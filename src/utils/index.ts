// export {
//   clientProxyFactory,
//   httpHashLoggerClientProxyHandler,
//   proxyReflexionLoggerFunctionHandler,
// } from '../resources/proxies';
import { helperFunctions } from './void0';

export { HTTP_PROXI_CONNECTOR } from './constants';
export {
  getDataHash,
  getUDatagram,
  getUrlAndDataHashes,
  getUrlHash,
} from './create-url-and-data-hashes';
export { formatDate } from './dates';
export { getQtUrlPathFromArgs } from './get-qt-url-path-from-args';
export { preValidateToken } from './get-token';
export { getHash } from './getHash';
export {
  getSymboIdBy,
  getSymboIdByStockSymbol,
} from './helpers/get-symbol-id-by-stock-symbol';
export { perSeconds } from './perSeconds';
export { promiseOf } from './promise-of';
export { timeoutPromise } from './timeout';
export {
  dateNowISO,
  dateNowNumeric,
  dateRange,
  dateRangeFromNow,
  dateToISOString,
  dateToNumeric,
  dayMiliseconds,
  getDateRange,
  now,
  setDateRange,
  urlEncodeDateTool,
} from './timeutil';
export {
  apply,
  compose,
  curry,
  flip,
  id0,
  idx,
  konst,
  parser,
  psi,
  stringny,
  thrush,
  urlEncode,
  void0,
};
export { helperFunctions };

const {
  id0,
  idx,
  void0,
  curry,
  thrush,
  apply,
  compose,
  flip,
  konst,
  psi,
  stringny,
  parser,
  urlEncode,
} = helperFunctions;
