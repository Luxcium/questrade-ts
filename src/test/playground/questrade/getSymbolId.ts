import { QuestradeApi } from '../../../typescript';
export function getSymbolId(qtApi: QuestradeApi) {
  return async (stockSymbol: string) => {
    const stock = await qtApi.search.stock(stockSymbol);
    if (!stock) {
      console.log(stockSymbol);
      throw new Error('getSymbolId failed to return a value');
    }
    if (stock.length > 0) return stock[0].symbolId;
    return 0;
  };
}
