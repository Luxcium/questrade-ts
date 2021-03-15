import mongoose from 'mongoose';

import { IQuestradeAPIv2_0 } from '../..';
import { SimpleQueue } from '../../private/core/next-rate-limiter/simple-queue';
import {
  IStockSymbolDocument,
  StockSymbolModel,
} from '../../schema/stock-symbol';
import { IEquitySymbol, IStockSymbol } from '../../typescript';
import { getSnP500List, mapping } from '../../utils';
import { getEquitySymbList } from '../code/get-equity-symbols-list';
import { getSymbol } from '../code/get-symbol';
import { getIdsAndSymbolsList } from '../code/will-get-symbol-id-and-first-symbol';
import { getAllPromises } from './getAllPromises';
import { mapValueToDB } from './save-value-to-db';

export async function SCIENTIA_ES_LUX_PRINCIPIUM(
  dbCallCue: SimpleQueue,
  qtApi: IQuestradeAPIv2_0,
) {
  const qtSymbolList = getEquitySymbList({
    qtApi,
    symbolList: () => getSnP500List({ endIndex: 5, startIndex: 0 }),
  });

  // ** ------------------------------------------------------------------------>
  const idsAndSymbList = await getIdsAndSymbolsList({
    ...(await qtSymbolList),
  });

  const symbolIdsList = liftSymbolIds(idsAndSymbList);

  // ** ------------------------------------------------------------------------>

  const getSymbolMapper = (symbolId: number) => getSymbol({ qtApi, symbolId });
  const getStockSymbolMapped: Promise<IStockSymbol>[] = await mapping({
    list: symbolIdsList,
    mapper: getSymbolMapper,
  });

  const stockSymbolAwaited = await getAllPromises(getStockSymbolMapped);
  const dbMapper = <D extends mongoose.Document<unknown>>(
    Model: mongoose.Model<D>,
  ) => mapValueToDB(dbCallCue)(Model);

  const dbStockSymbolMapper = dbMapper(StockSymbolModel);
  const mappedStockSymbolDocument: Promise<IStockSymbolDocument>[] = await mapping(
    {
      list: stockSymbolAwaited,
      mapper: dbStockSymbolMapper,
    },
  );

  const awaitedStockSymbolDocument = await getAllPromises(
    mappedStockSymbolDocument,
  );

  void awaitedStockSymbolDocument;

  // const getStockSymbolMapped: Promise<IStockSymbol>[] = await mapping({
  //   list: idsAndSymbList,
  //   mapper: getSymbolMapper,
  // });

  // const stockSymbolAwaited = await getAllPromises(getStockSymbolMapped);
  // // ** ------------------------------------------------------------------------>

  // const dbEquitySymbolMapper = ({
  //   symbolItem,
  // }: {
  //   symbolItem: IEquitySymbol;
  // }) => dbMapper(EquitySymbolModel)(symbolItem);

  // const dbSymbolInfoMapper = ({ symbolItem }: { symbolItem: IEquitySymbol }) =>
  //   dbMapper(SymbolInfoModel)(symbolItem);

  //
  // // ** ------------------------------------------------------------------------>
  // const mappedEquitySymbolDocument: Promise<IEquitySymbolDocument>[] = await mapping(
  //   {
  //     list: idsAndSymbList,
  //     mapper: dbEquitySymbolMapper,
  //   },
  // );

  // const mappedSymbolInfoDocument: Promise<ISymbolInfoDocument>[] = await mapping(
  //   {
  //     list: idsAndSymbList,
  //     mapper: dbSymbolInfoMapper,
  //   },
  // );

  // // ** ------------------------------------------------------------------------>

  // const awaitedEquitySymbolDocument = await getAllPromises(
  //   mappedEquitySymbolDocument,
  // );

  // const awaitedSymbolInfoDocument = await getAllPromises(
  //   mappedSymbolInfoDocument,
  // );

  // const awaitedStockSymbolDocument = await getAllPromises(
  //   mappedStockSymbolDocument,
  // );

  // // ** ------------------------------------------------------------------------>

  // void awaitedEquitySymbolDocument;
  // void awaitedSymbolInfoDocument;
  // void awaitedStockSymbolDocument;
}

// ** ------------------------------------------------------------------------>
//   const mappedSymbolInfo: Promise<ISymbolInfoDocument>[] = await mapping({
//   list: idsAndSymbList,
//   mapper: dbSymbolInfoMapper,
// });

// ** ------------------------------------------------------------------------>

// const awaitedSymbolInfoDocument = await getAllPromises();
// const awaitedSymbolInfoDocument = await getAllPromises();
// const awaitedSymbolInfoDocument = await getAllPromises(
//   mappedSymbolInfoDocument,
// );

// void awaitedSymbolInfoDocument,
//   dbEquitySymbolMapper,
//   dbStockSymbolMapper,
//   mappedEquitySymbolDocument;

// void stockSymbolAwaited, mappedStockSymbolDocument;
// const symbolDBMapper = async (stockSymbol: IStockSymbol) => {
//   saveValueToDB(dbCallCue)({
//     Model: StockSymbolModel,
//     value: stockSymbol,
//   });

//   return stockSymbol;
// };

// const list = await getAllPromises(getStockSymbolMapped);
// const step7 = await mapping({ list, mapper: symbolDBMapper });
// const step8 = await getAllPromises(step7);
// console.log(step8);

// return step8;

// const fnStep7 = (step5: any, step6: any) => step6.map(step5);
// /*

//  */
// return getSymbolIDSearchAndStockSymbolDbSave(qtApi, apiCallQ, idsAndSymbList);

export function liftSymbolIds(
  idsAndSymbolList: {
    symbolId: number;
    symbolItem: IEquitySymbol;
    symbolItems: IEquitySymbol[];
  }[],
) {
  return idsAndSymbolList.map(list => list.symbolId);
}

export function liftSymbolItems(
  idsAndSymbolList: {
    symbolId: number;
    symbolItem: IEquitySymbol;
    symbolItems: IEquitySymbol[];
  }[],
) {
  return idsAndSymbolList.map(list => list.symbolItem);
}

export function liftSymbolItemsList(
  idsAndSymbolList: {
    symbolId: number;
    symbolItem: IEquitySymbol;
    symbolItems: IEquitySymbol[];
  }[],
) {
  return idsAndSymbolList.map(list => list.symbolItems);
}
