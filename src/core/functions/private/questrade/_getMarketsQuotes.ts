// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
import { endPoinFactory } from '.';
import { QtApi } from '../../../libraries';
import { IQuotes } from '../../../types';

export const _getMarketsQuotes = (qtApi: QtApi) => async (
  qtSymbol: number[]
) => {
  if (!qtSymbol.length) {
    // will error out after calling the api the server will reply the error message ...
    return (await endPoinFactory<Promise<IQuotes>>('/markets/quotes')(qtApi)())
      .quotes;
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
  return (await endPoinFactory<Promise<IQuotes>>(endpoint)(qtApi)()).quotes;
};
