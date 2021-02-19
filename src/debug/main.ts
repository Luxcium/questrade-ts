/* eslint-disable radar/no-duplicate-string */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable promise/avoid-new */
/* eslint-disable radar/no-unused-collection */
import { promisify } from 'util';

import { qtAPIv2_0 } from '..';
import { echo, getMyToken } from '../resources/side-effects';
import type { ApiOptions } from '../typescript';
import { id0, void0 } from '../utils';
import { willGetSNP500StringList } from './development/getSNP500List';

const once = { onlyOnce: true };
// const c000 = 0;
// const c00 = 0;
// const c0 = 0;
// let c1 = 0;
// let c2a = 0;
// const c2b = 0;
// let c3 = 0;
// let c4 = 0;
// let c5 = 0;
// let c6 = 0;
// let c7a = 0;
// let c7b = 0;
// let c8a = 0;
// let c8b = 0;
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

  // .slice(0, 2)
  // .map(item => ech0(item))
  // const snp500list =
  // console.log(c00++, '----STEP 1------');
  const setImmediatePromise = promisify(setImmediate);

  void async function timeoutPromise(fn?: any, cb?: any, delay?: number) {
    const setTimeoutPromise = promisify(setTimeout);
    const timeout = setTimeoutPromise(5000, 14).then(x => x * 123);
    void timeout, fn, cb, delay;

    return null;
  };

  void setImmediatePromise;
  id0(await willGetSNP500StringList())
    // .slice(0, 2)
    .map(item => () => qtApi.search.stock(item))
    .map(item => async () =>
      qtApi.getSymbols.byStockIds([(await item())[0]?.symbolId || 0]),
    )
    .map(item => item());

  // .map((item, i2) => {
  //   console.log(c3++, '----STEP 3----MAP-2-2-2', i2);

  //   return async () => {
  //     console.log(c4++, '----STEP 7-m2-');

  //     return item().then(xItem => {
  //       console.log(c5++, '-$2---STEP 11-m2-');

  //       return qtApi.getSymbols.byStockIds([xItem]);
  //     });
  //   };
  // });
  // .map((item, i3) => {
  //   console.log(c6++, '----STEP 4----MAP-3-3-3', i3);

  //   return async () => {
  //     console.log(c7a++, '----STEP 6-m3-');
  //     const returnValue = echo1('getSymbols.byStockIds:', await item());
  //     console.log(c7b++, '----STEP 12-m3-');

  //     return returnValue;
  //   };
  // })
  // .map((item, i4) => {
  //   console.log(c8a++, '----STEP 5---MAP-4-4-4', i4);
  //   const returnValue = item();
  //   console.log(c8b++, '----STEP 9---MAP-4-4-4', i4);

  //   return returnValue;
  // });

  return true;
}

main();
export { main };

/* promisify(setImmediate)( */

// {
// console.log(c1++, '----STEP 2----MAP-1-1-1', i1);

// return async
// }
// #region : as
//     {
//     // console.log(c2a++, '-$---STEP 8-m1-ISymbolSearchResult');
//     // const [ref] /* : ISymbolSearchResult */ =
//     await
//       item,
//     );
//     // console.log(c2b++, '----STEP 10-m1-ISymbolSearchResult');

//     // const {
//     //   // all /*  ISymbolSearchResult[]; */,
//     //   // count /*  number; */,
//     //   currency /*  Currency; */,
//     //   description /*  string; */,
//     //   isQuotable /*  boolean; */,
//     //   isTradable /*  boolean; */,
//     //   listingExchange /*  string; */,
//     //   securityType /*  string; */,
//     //   symbol /*  string; */,
//     //   symbolId /*  number; */,
//     // } = ref || {
//     //   // all /*  ISymbolSearchResult[]; */,
//     //   // count /*  number; */,
//     //   currency: 'CAD',
//     //   description: '' /*  string; */,
//     //   isQuotable: false /*  boolean; */,
//     //   isTradable: false /*  boolean; */,
//     //   listingExchange: '' /*  string; */,
//     //   securityType: '' /*  string; */,
//     //   symbol: 'N/A' /*  string; */,
//     //   symbolId: 1 /*  number; */,
//     // };

//     // const partial: ISymbolSearchResult = {
//     //   // all:[] /*  ISymbolSearchResult[]; */,
//     //   // count /*  number; */,
//     //   currency /*  Currency; */,
//     //   description /*  string; */,
//     //   isQuotable /*  boolean; */,
//     //   isTradable /*  boolean; */,
//     //   listingExchange /*  string; */,
//     //   securityType /*  string; */,
//     //   symbol /*  string; */,
//     //   symbolId /*  number; */,
//     // };

//     return echo1(`'qtApi.search.stock(${item})':`, ref)?.symbolId || 1;
//   };
// })
// #endregion :
