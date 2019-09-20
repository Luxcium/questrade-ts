// tslint:disable: variable-name
import { _getEndPoinFactory } from '.';
import { QtApi } from '../../../libraries';
import { IQuotes } from '../../../types';

export const _getQuotesFromSymbolID = (qtApi: Promise<QtApi>) => async (
  qtSymbol: number[]
) => {
  if (!qtSymbol.length) {
    return (await _getEndPoinFactory<Promise<IQuotes>>('/markets/quotes')(
      qtApi
    )).quotes;
  }
  let qtSymbolString: string = '';
  qtSymbol.forEach((val, currentIndex, ar) => {
    qtSymbolString += `${val.toString()}${
      !(ar.length - currentIndex - 1) ? '' : ','
    }`;
  });

  const endpoint = `/markets/quotes${
    qtSymbol.length === 1 ? `/${qtSymbolString}` : `?ids=${qtSymbolString}`
  }`;
  return (await _getEndPoinFactory<Promise<IQuotes>>(endpoint)(qtApi)).quotes;
};
