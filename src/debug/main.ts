/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-new */
/* eslint-disable promise/avoid-new */
/* eslint-disable radar/no-unused-collection */
import { promisify } from 'util';

import { qtAPIv2_0 } from '..';
import { echo, getMyToken } from '../resources/side-effects';
import { echo1 } from '../resources/side-effects/default-behaviour';
import type { ApiOptions, ISymbolSearchResult } from '../typescript';
import { id0, void0 } from '../utils';
import { willGetSNP500StringList } from './development/getSNP500List';

const once = { onlyOnce: true };

async function main() {
  echo(`Will execute main: ${once.onlyOnce}`);
  if (!once.onlyOnce) {
    return false;
  }

  once.onlyOnce = false;
  const apiOptions: ApiOptions = {
    debug: 100,
    token: getMyToken,
  };

  const { credentials, qtApi } = await qtAPIv2_0(apiOptions);

  void0(credentials);
  // ech0(qtApi);

  // const snp500list =
  id0(await willGetSNP500StringList())
    .slice(0, 10)
    .map(item => async () => {
      const [ref] /* : ISymbolSearchResult */ = await qtApi.search.stock(item);
      const {
        // all /*  ISymbolSearchResult[]; */,
        // count /*  number; */,
        currency /*  Currency; */,
        description /*  string; */,
        isQuotable /*  boolean; */,
        isTradable /*  boolean; */,
        listingExchange /*  string; */,
        securityType /*  string; */,
        symbol /*  string; */,
        symbolId /*  number; */,
      } = ref;

      const partial: ISymbolSearchResult = {
        // all:[] /*  ISymbolSearchResult[]; */,
        // count /*  number; */,
        currency /*  Currency; */,
        description /*  string; */,
        isQuotable /*  boolean; */,
        isTradable /*  boolean; */,
        listingExchange /*  string; */,
        securityType /*  string; */,
        symbol /*  string; */,
        symbolId /*  number; */,
      };

      return echo1(`'qtApi.search.stock(${item})':`, partial).symbolId || 1;
    })
    .map(item => async () => qtApi.getSymbols.byStockIds([await item()]))
    .map(item => async () =>
      echo1(
        'getSymbols.byStockIds:',
        (await promisify(setImmediate)(item()))[0],
      ),
    )
    .map(item => item());

  return true;
}

main();
export { main };
