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
let c000 = 0;
let c00 = 0;
// let c0 = 0;
let c1 = 0;
let c2a = 0;
let c2b = 0;
let c3 = 0;
let c4 = 0;
let c5 = 0;
let c6 = 0;
let c7a = 0;
let c7b = 0;
let c8a = 0;
let c8b = 0;
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
  console.log(c00++, '----STEP 0------');

  id0(await willGetSNP500StringList())
    .slice(0, 5)
    .map((item, i1) => {
      console.log(c1++, '----STEP 1----MAP-1-1-1', i1);

      return async () => {
        console.log(c2a++, '----STEP 2a----');
        const [ref] /* : ISymbolSearchResult */ = await qtApi.search.stock(
          item,
        );

        console.log(c2b++, '----STEP 2b----');

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
      console.log(c3++, '----STEP 3----MAP-2-2-2', i2);

      return async () => {
        console.log(c4++, '----STEP 4----');

        return item().then(xItem => {
          console.log(c5++, '----STEP 5----');

          return qtApi.getSymbols.byStockIds([xItem]);
        });
      };
    })
    .map((item, i3) => {
      console.log(c6++, '----STEP 6----MAP-3-3-3', i3);

      return async () => {
        console.log(c7a++, '----STEP 7a----');
        const returnValue = echo1('getSymbols.byStockIds:', await item());
        console.log(c7b++, '----STEP 7b----');

        return returnValue;
      };
    })
    .map((item, i4) => {
      console.log(c8a++, '----STEP 8a----MAP-4-4-4', i4);
      const returnValue = item();
      console.log(c8b++, '----STEP 8b----MAP-4-4-4', i4);

      return returnValue;
    });

  return true;
}

main();
export { main };
console.log(c000++, '----STEP NaN------');

/* promisify(setImmediate)( */
