/* eslint-disable no-plusplus */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable promise/avoid-new */
/* eslint-disable radar/no-unused-collection */
import { qtAPIv2_0 } from '..';
import { echo, getMyToken } from '../resources/side-effects';
import { echo1 } from '../resources/side-effects/default-behaviour';
import type { ApiOptions, ISymbolSearchResult } from '../typescript';
import { id0, void0 } from '../utils';
import { willGetSNP500StringList } from './development/getSNP500List';

const once = { onlyOnce: true };
let c0 = 0;
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;
let c5 = 0;
let c6 = 0;
let c7 = 0;
// let c8 = 1;
// , c1, c2, c3, c4, c5, c6, c7, c8 = 1,1, 1, 1, 1, 1, 1, 1, 1
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
    .slice(0, 50)
    .map((item, i1) => {
      console.log(c0++, '--0--MAP1', i1);

      return async () => {
        console.log(c1++, '--1--');
        const [ref] /* : ISymbolSearchResult */ = await qtApi.search.stock(
          item,
        );

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
      };
    })
    .map((item, i2) => {
      console.log(c2++, '--2--MAP2', i2);

      return async () => {
        console.log(c3++, '--3--');

        return item().then(xItem => {
          console.log(c4++, '--4--');

          return qtApi.getSymbols.byStockIds([xItem]);
        });
      };
    })
    .map((item, i3) => {
      console.log(c5++, '--5--MAP3', i3);

      return async () => {
        console.log(c6++, '--6--');

        return echo1('getSymbols.byStockIds:', await item());
      };
    })
    .map((item, i4) => {
      console.log(c7++, '--7--MAP4', i4);

      return item();
    });

  return true;
}

main();
export { main };

/* promisify(setImmediate)( */
