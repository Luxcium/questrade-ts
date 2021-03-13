import { SimpleQueue } from '../../private/core/next-rate-limiter/simple-queue';
import { xIdsAndSymbList } from '../../typescript';
import { getSnP500List } from '../../utils';
import { getEquitySymbList } from '../code/getEquitySymbolsList';
import { getSymbolIDSearchAndStockSymbolDbSave } from '../code/getSymbolIdEquitySymbolAndStockSymbolDbSave';
import { mainRedis } from '../code/mainRedis_b';
import { getIdsAndSymbolsList } from '../code/willGetSymbolIdAndFirstSymbol';

export async function SCIENTIA_ES_LUX_PRINCIPIUM(apiCallQ: SimpleQueue) {
  // activate the api for later use
  const { qtApi } = await mainRedis();
  const equityList = getEquitySymbList({ qtApi, symbolList: getSnP500List });
  const idsAndSymbList: xIdsAndSymbList = getIdsAndSymbolsList({ equityList });

  return getSymbolIDSearchAndStockSymbolDbSave(qtApi, apiCallQ, idsAndSymbList);
}
