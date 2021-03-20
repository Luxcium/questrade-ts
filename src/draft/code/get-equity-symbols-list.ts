import { GetEquitySymbol } from '../../typescript';
import { promiseOf } from '../../utils';

export const getEquitySymbolList: GetEquitySymbol = async ({
  qtApi,
  stockTickerList,
}) => {
  let symbolList_: string[];
  symbolList_ = await (typeof stockTickerList === 'function'
    ? promiseOf(stockTickerList())
    : promiseOf(stockTickerList));

  return {
    equityList: await Promise.all(
      symbolList_.map(async symb => qtApi.search.allStocks(symb)),
    ),
  };
};
