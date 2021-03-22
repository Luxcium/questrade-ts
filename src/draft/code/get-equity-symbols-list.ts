import { GetEquitySymbol } from '../../typescript';
import { promiseOf } from '../../utils';

export const getEquitySymbolList: GetEquitySymbol = async ({
  qtApi,
  stockTickerList,
}) => {
  const symbolList_: string[] = await (typeof stockTickerList === 'function'
    ? promiseOf(stockTickerList())
    : promiseOf(stockTickerList));

  return {
    equityList: await Promise.all(
      symbolList_.map(async symb => qtApi.search.allStocks(symb)),
    ),
  };
};
