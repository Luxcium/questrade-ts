import { GetEquitySymbol } from '../typescript';
import { promiseOf } from '../utils';

export const getAllEquitySymbList: GetEquitySymbol = qtApi => async symbolList => {
  const symbolList_ = await promiseOf(symbolList);

  return Promise.all(
    symbolList_.map(async symb => qtApi.search.allStocks(symb)),
  );
};
