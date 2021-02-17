import { sideEffects } from '../../../resources/side-effects';
import type { QuestradeApi } from '../../../typescript';

const { echo } = sideEffects;

export function getSymbolId(qtApi: QuestradeApi) {
  return async (stockSymbol: string) => {
    const stock = await qtApi.search.stock(stockSymbol);

    if (!stock) {
      void echo(stockSymbol);
      throw new Error('getSymbolId failed to return a value');
    }

    if (stock.length > 0) {
      return stock[0].symbolId;
    }

    return 0;
  };
}
