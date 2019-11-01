import { IQuestradeApi } from '../../../typescript';
import { getSymbolId } from './';
export function getSymbolDetails(qtApi: IQuestradeApi) {
  return async (stockSymbol: string | number | number[]) => {
    const getSymbolsByStockIds = qtApi.getSymbols.byStockIds;
    const getquotes = qtApi.getQuotes.byStockIds;
    if (typeof stockSymbol === 'string') {
      const symbolID = await getSymbolId(qtApi)(stockSymbol);
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
