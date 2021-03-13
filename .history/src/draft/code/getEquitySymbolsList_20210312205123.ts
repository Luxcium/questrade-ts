import { GetEquitySymbol } from '../../typescript';
import { promiseOf } from '../../utils';

export const getAllEquitySymbList: GetEquitySymbol = qtApi => async symbolList => {
  let symbolList_: string[];
  symbolList_ = await (typeof symbolList === 'function'
    ? promiseOf(symbolList())
    : promiseOf(symbolList));

  return Promise.all(
    symbolList_.map(async symb => qtApi.search.allStocks(symb)),
  );
};
