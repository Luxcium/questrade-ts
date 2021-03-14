import { GetEquitySymbol } from '../../typescript';
import { promiseOf } from '../../utils';

export const getEquitySymbList: GetEquitySymbol = async ({
  qtApi,
  symbolList,
}) => {
  let symbolList_: string[];
  symbolList_ = await (typeof symbolList === 'function'
    ? promiseOf(symbolList())
    : promiseOf(symbolList));

  return {
    equityList: await Promise.all(
      symbolList_.map(async symb => qtApi.search.allStocks(symb)),
    ),
  };
};
