import mongoose from 'mongoose';

import { QuestradeAPIv2_0 } from '../..';
import { SimpleQueue } from '../../private/core/next-rate-limiter/simple-queue';
import { StockSymbolModel } from '../../schema/stock-symbol';
import { IEquitySymbol, StockTickerList } from '../../typescript';
import { typeCorrection } from '../../typescript/MappingFunction';
import { getSnP500List } from '../../utils';
import {
  applyListMapping,
  applyMappingList,
} from '../../utils/mapping-function';
import { getEquitySymbolList } from '../code/get-equity-symbols-list';
import { getSymbol } from '../code/get-symbol';
import { getIDsAndSymbolsList } from '../code/will-get-symbol-id-and-first-symbol';
import { mapValueToDB } from './save-value-to-db';

export async function SCIENTIA_ES_LUX_PRINCIPIUM(
  dbCallCue: SimpleQueue,
  qtApi: QuestradeAPIv2_0,
) {
  // + start with a list of stockTicker
  const stockTickerList: StockTickerList = await getSnP500List({
    endIndex: 5,
    startIndex: 0,
  });

  //
  // + use the stockTickerList to get, from the api, a list² of all the results per tickers → ²[][]
  const tikerSymbols = await getEquitySymbolList({
    qtApi,
    stockTickerList,
  });

  // + get a list of objects contaning the first symbolID, the first equitySymbolObject
  // + and the list of each equitySymbolObjects  →  MappedEquity[]
  // ** ------------------------------------------------------------------------>
  const idsAndSymbList = await getIDsAndSymbolsList(tikerSymbols);
  // ** ------------------------------------------------------------------------>
  const symbolIDsList = liftSymbolIDs(idsAndSymbList);
  const symbolItems = liftSymbolItems(idsAndSymbList);
  const symbolItemsList = liftSymbolItemsList(idsAndSymbList);
  const getQuotesMapper = async (id: number) =>
    qtApi.getQuotes.byStockIds([id]);

  const getSymbolsMapper = (id: number) => qtApi.getSymbols.byStockIds([id]);
  const getCandlesMapper = (id: number) => qtApi.market.getCandlesByStockId(id);
  const quotesMapper = applyMappingList(getQuotesMapper);
  const symbolsMapper = applyMappingList(getSymbolsMapper);
  const candlesMapper = applyMappingList(getCandlesMapper);
  const symbolIDsListMappable = applyListMapping(symbolIDsList);
  const someName1 = symbolIDsListMappable(getQuotesMapper);
  const someConverted = typeCorrection(someName1);
  void someConverted;
  const someName2 = symbolIDsListMappable(getSymbolsMapper);
  const someName3 = symbolIDsListMappable(getCandlesMapper);
  // const symbolsMappable = applyMappingList(symbolIDsList);
  // const candlesMappable = applyMappingList(symbolIDsList);
  const someval1 = quotesMapper(symbolIDsList);
  const someval2 = symbolsMapper(symbolIDsList);
  const someval3 = candlesMapper(symbolIDsList);
  void getQuotesMapper;
  void getSymbolsMapper, someval1, someName1;
  void getCandlesMapper, someval2, someName2, someName3, someval3;

  /*
  export type MappingFunction = <T, R>(
  mappableList: MappableListAsync<T>,
  mapperFunction: MapperFunction<T, R>,
) => Promise<R[]>;

   */
  //   const getQuotesMapping = <T>(mappableList: MappableListAsync<T>) => mapping<T,unknown>(mappableList,getQuotesMapper);
  // const getSymbolsMapping = ;
  //   const getCandlesMapping = ;
  //   void curyedMapping
  // ** ------------------------------------------------------------------------>
  const getSymbolMapper = (symbolId: number) => getSymbol({ qtApi, symbolId });
  const getStockSymbolMapped = await applyListMapping(symbolIDsList)(
    getSymbolMapper,
  );

  const dbMapper = <D extends mongoose.Document<unknown>>(
    Model: mongoose.Model<D>,
  ) => mapValueToDB(dbCallCue)(Model);

  const dbStockSymbolMapper = dbMapper(StockSymbolModel);
  const mappedStockSymbolDocument = applyListMapping(getStockSymbolMapped)(
    dbStockSymbolMapper,
  );

  void mappedStockSymbolDocument;

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
  void [symbolIDsList, symbolItems, symbolItemsList];
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

export function liftSymbolIDs(
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
