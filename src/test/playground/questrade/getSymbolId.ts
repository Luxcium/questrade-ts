import { IQuestradeApi } from '../../../typescript';
export function getSymbolId(qtApi: IQuestradeApi) {
  return async (stockSymbol: string) => {
    const stock = await qtApi.search.stock(stockSymbol);
    if (!stock) {
      console.log(stockSymbol);
      throw new Error('getSymbolId failed to return a value');
    }
    if (stock) return stock[0].symbolId;
    return 0;
  };
}
