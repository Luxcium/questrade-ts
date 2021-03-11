import { GetEquitySymbol } from '../typescript';

export const getEquitySymbolsList: GetEquitySymbol = async ({
  qtApi,
  symbolList,
}) =>
  Promise.all(
    (await symbolList).map(async symb => qtApi.search.allStocks(symb)),
  );
