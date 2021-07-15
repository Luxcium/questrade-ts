import mongoose from 'mongoose';

import { SimpleQueue } from '../../private/core/next-rate-limiter/simple-queue';
import {
  EquitySymbolModel,
  IEquitySymbolDocument,
} from '../../schema/equity-symbol';
import {
  IStockSymbolDocument,
  StockSymbolModel,
} from '../../schema/stock-symbol';
import { ISymbolInfoDocument, SymbolInfoModel } from '../../schema/symbol-info';
import { IEquitySymbol, IStockSymbol, xIdsAndSymbList } from '../../typescript';
import { getSnP500List, promiseOf } from '../../utils';
import { getEquitySymbolList } from '../code/get-equity-symbols-list';
import { getSymbol } from '../code/get-symbol';
import { mainRedis } from '../code/main-redis';
import { getIDsAndSymbolsList } from '../code/will-get-symbol-id-and-first-symbol';
import { mapValueToDB, saveValueToDB } from './save-value-to-db';

export async function SCIENTIA_ES_LUX_PRINCIPIUM(dbCallCue: SimpleQueue) {
  const { qtApi } = await mainRedis();
  // const qtSymbolList = getEquitySymbList({ qtApi, symbolList: getSnP500List });
  const qtSymbolList = getEquitySymbolList({
    qtApi,
    stockTickerList: () => getSnP500List({ endIndex: 5, startIndex: 0 }),
  });

  const idsAndSymbList: xIdsAndSymbList = getIDsAndSymbolsList({
    ...(await qtSymbolList),
  });

  const symbolInfoDBMapper = async ({
    symbolItem,
  }: {
    symbolItem: IEquitySymbol;
  }) => {
    saveValueToDB(dbCallCue)({
      Model: SymbolInfoModel,
      value: symbolItem,
    });
    void symbolInfoDBMapper;
  };

  const getAllPromises = async <T>(step7: Promise<T>[]) =>
    Promise.all<T>(step7);

  const mapper = ({ symbolId }: { symbolId: number }) =>
    getSymbol({ qtApi, symbolId });

  const mapped: Promise<IStockSymbol>[] = await mapping({
    list: idsAndSymbList,
    mapper,
  });

  const awaited = await getAllPromises(mapped);

  void awaited;
  const symbolDBMapper = async (stockSymbol: IStockSymbol) => {
    saveValueToDB(dbCallCue)({
      Model: StockSymbolModel,
      value: stockSymbol,
    });

    return stockSymbol;
  };

  const list = await getAllPromises(mapped);
  const step7 = await mapping({ list, mapper: symbolDBMapper });
  const step8 = await getAllPromises(step7);
  console.log(step8);

  // ** ------------------------------------------------------------------------>
  // const idsAndSymbList: xIdsAndSymbList = getIdsAndSymbolsList({
  //   ...(await qtSymbolList),
  // });
  // ** ------------------------------------------------------------------------>

  const getSymbolMapper = ({ symbolId }: { symbolId: number }) =>
    getSymbol({ qtApi, symbolId });

  const getStockSymbolMapped: Promise<IStockSymbol>[] = await mapping({
    list: idsAndSymbList,
    mapper: getSymbolMapper,
  });

  const stockSymbolAwaited = await getAllPromises(getStockSymbolMapped);
  // ** ------------------------------------------------------------------------>
  const dbMapper = <D extends mongoose.Document<unknown>>(
    Model: mongoose.Model<D>,
  ) => mapValueToDB(dbCallCue)(Model);

  const dbEquitySymbolMapper = ({
    symbolItem,
  }: {
    symbolItem: IEquitySymbol;
  }) => dbMapper(EquitySymbolModel)(symbolItem);

  const dbSymbolInfoMapper = ({ symbolItem }: { symbolItem: IEquitySymbol }) =>
    dbMapper(SymbolInfoModel)(symbolItem);

  const dbStockSymbolMapper = dbMapper(StockSymbolModel);
  // ** ------------------------------------------------------------------------>
  const mappedEquitySymbolDocument: Promise<IEquitySymbolDocument>[] = await mapping(
    {
      list: idsAndSymbList,
      mapper: dbEquitySymbolMapper,
    },
  );

  const mappedSymbolInfoDocument: Promise<ISymbolInfoDocument>[] = await mapping(
    {
      list: idsAndSymbList,
      mapper: dbSymbolInfoMapper,
    },
  );

  const mappedStockSymbolDocument: Promise<IStockSymbolDocument>[] = await mapping(
    {
      list: stockSymbolAwaited,
      mapper: dbStockSymbolMapper,
    },
  );

  // ** ------------------------------------------------------------------------>

  const awaitedEquitySymbolDocument = await getAllPromises(
    mappedEquitySymbolDocument,
  );

  const awaitedSymbolInfoDocument = await getAllPromises(
    mappedSymbolInfoDocument,
  );

  const awaitedStockSymbolDocument = await getAllPromises(
    mappedStockSymbolDocument,
  );

  // ** ------------------------------------------------------------------------>

  void awaitedEquitySymbolDocument;
  void awaitedSymbolInfoDocument;
  void awaitedStockSymbolDocument;

  return step8;
}

// const fnStep7 = (step5: any, step6: any) => step6.map(step5);
// /*
export async function mapping<T, R>({
  list,
  mapper,
}: {
  list: T[] | Promise<T[]>;
  mapper: (item: T) => R;
}): Promise<R[]> {
  return (await promiseOf(list)).map(mapper);
}

//  */
// return getSymbolIDSearchAndStockSymbolDbSave(qtApi, apiCallQ, idsAndSymbList);
