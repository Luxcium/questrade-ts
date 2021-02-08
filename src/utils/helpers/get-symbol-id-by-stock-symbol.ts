import { QuestradeApi } from '../../typescript';

const getSymboIdByStockSymbol = (qtApi: QuestradeApi) => async (
  prefix: string,
  offset?: number | undefined,
) => {
  return (await qtApi.search.stock(prefix, offset))[0].symbolId;
};

export { getSymboIdByStockSymbol as getSymboIdBy, getSymboIdByStockSymbol };
