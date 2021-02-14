import { QuestradeApi } from '../../../typescript';
import { getSymbolId } from './getSymbolId';

export function getSymbolDetails(qtApi: QuestradeApi) {
  return async (stockSymbol: string | number | number[]) => {
    const getSymbolsByStockIds = qtApi.getSymbols.byStockIds;
    const getquotes = qtApi.getQuotes.byStockIds;

    if (typeof stockSymbol === 'string') {
      const symbolID = await getSymbolId(qtApi)(stockSymbol);

      if (symbolID) {
        //
      }

      return {
        ...(await getSymbolsByStockIds([symbolID]))[0],
        ...(await getquotes([symbolID]))[0],
      };
    }
    if (typeof stockSymbol === 'number') {
      return {
        ...(await getSymbolsByStockIds([stockSymbol]))[0],
        ...(await getquotes([stockSymbol]))[0],
      };
    }

    return {
      ...(await getSymbolsByStockIds(stockSymbol))[0],
      ...(await getquotes(stockSymbol))[0],
    };
  };
}
