import { IQuestradeApi } from '../../../typescript';
export function getSymbolId(qtApi: IQuestradeApi) {
  return async (stockSymbol: string) =>
    (await qtApi.search.stock(stockSymbol)).symbolId;
}
