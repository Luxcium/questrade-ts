/* eslint-disable radar/no-identical-functions */
import { promisify } from 'util';

import { qtAPIv2_0 } from '..';
import { echo, getMyToken } from '../resources/side-effects';
import type { ApiOptions } from '../typescript';
import { id0 } from '../utils';
import { willGetSNP500StringList } from './development/getSNP500List';

const once = { onlyOnce: true };
async function timeout_<T>(fn: (val: T) => any, value: T, delay: number) {
  return promisify(setTimeout)(delay, value).then(fn);
}

async function one() {
  const funct = (x: number) => x * 10;
  echo(await timeout_(funct, 500, 14));
}


export const timeoutPromise = {
  delay(delay: number) {
    return {
      fn<T>(fnx: (val: T) => any) {
        return {
          value(value: T) {
            return timeout_(fnx, value, delay);
          },
        };
      },
      value<T>(value: T) {
        return {
          fn(fnx: (val: T) => any) {
            return timeout_(fnx, value, delay);
          },
        };
      },
    };
  },
  fn<T>(fnx: (val: T) => any) {
    return {
      delay(delay: number) {
        return {
          value(value: T) {
            return timeout_(fnx, value, delay);
          },
        };
      },
      value(value: T) {
        return {
          delay(delay: number) {
            return timeout_(fnx, value, delay);
          },
        };
      },
    };
  },
  value<T>(value: T) {
    return {
      delay(delay: number) {
        return {
          fn(fnx: (val: T) => any) {
            return timeout_(fnx, value, delay);
          },
        };
      },
      fn(fnx: (val: T) => any) {
        return {
          delay(delay: number) {
            return timeout_(fnx, value, delay);
          },
        };
      },
    };
  },
};

timeoutPromise.fn((x:number)=>x*2).delay(150).value(10)
/*
timeout

delay:{},
  fn: {},

delay:{},
  value:{},


timeoutValueDelayFn
timeoutValueFnDelay

Fn Delay Value
Fn Delay Value
Fn Delay Value
Fn Delay Value
 */
async function testingOrDebugging() {
  const apiOptions: ApiOptions = {
    debug: 100,
    token: getMyToken,
  };

  const { qtApi } = await qtAPIv2_0(apiOptions);
  const setImmediatePromise = promisify(setImmediate);

  // void async function timeoutPromise(fn?: any, cb?: any, delay?: number) {
  //   const setTimeoutPromise = promisify(setTimeout);
  //   const timeout = setTimeoutPromise(5000, 14).then(x => x * 123);
  //   void timeout, fn, cb, delay;

  //   return timeout;
  // };

  void setImmediatePromise;
  id0(await willGetSNP500StringList())
    // .slice(0, 2)
    .map(item => () => qtApi.search.stock(item))
    .map(item => async () =>
      qtApi.getSymbols.byStockIds([(await item())[0]?.symbolId || 0]),
    )
    .map(item => item());
}

async function main() {
  echo(`Will execute main: ${once.onlyOnce}`);
  if (!once.onlyOnce) {
    return false;
  }

  once.onlyOnce = false;

  one();
  void testingOrDebugging;

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
