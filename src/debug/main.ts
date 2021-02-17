/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-new */
/* eslint-disable promise/avoid-new */
/* eslint-disable radar/no-unused-collection */
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

  const snp500list = id0(await willGetSNP500StringList())
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
    .map(async item => echo1('getSymbols.byStockIds:', (await item())[0]));

  void snp500list;

  return true;
}

main();
export { main };

// : (resolve: (value: unknown) => void
// : (reason?: any) => void

new Promise((resolve, reject) => {
  resolve(0);
  reject();
});
setImmediate(() => 4);

export function outerFunct() {
  return null;
}

/*
const fntocall= void0;
 const callBack = (cb: any) => {
       setImmediate( ()=>{

       cb(fntocall())
       })
    };

    return new Promise<any>((resolve, reject) => {
      callBack((error: Error, result: any) => {
        if (!error) {
          resolve(result);

          return true;
        }

        reject(error);

        return false;
      });
    });
---------------------------
setImmediate(callback: (...args: any[]) => void, ...args: any[]): NodeJS.Immediate

 const callBack = (cb: any) => {
      //
      this.enQueue({ ...value, cb });
      //
      if (this.isNotCalled) {
        this.callToPopQueue();
      }

      return null;
    };
immediateCallBack
   const immediateCallBack =  new Promise<any>((resolve, reject) => {
      setImmediate((error: Error, result: any) => {
        if (!error) {
          resolve(result);

          return true;
        }

        reject(error);

        return false;
      });
    });


  echo1(
        'getSymbols.byStockIds:',
        (await
item()
        )[0],
      ),
    )
   */
// snp500list.map(async item =>
//   echo1(
//     'getSymbols.byStockIds:',
//     (
//       await qtApi.getSymbols.byStockIds([
// await         item()
//     )[0],
//   ),
// );

/*
    .map( item => async()=>
      echo1(
        'getSymbols.byStockIds:',
        (
          await qtApi.getSymbols.byStockIds([
            echo1('symbolId:', (await qtApi.search.stock(item))[0])?.symbolId ||
              1,
          ])
        )[0],
      ),
    );
  ----
   echo1(
      'getSymbols.byStockIds:',
      (
        await qtApi.getSymbols.byStockIds([
          echo1('symbolId:', (await qtApi.search.stock(item))[0]?.symbolId) || 1,
        ])
      )[0],
    )
   */
// // export const cs
// snp500list
//   .map(stock => qtApi.search.stock(stock))
//   .map(stock =>
//     stock.then(s => {
//       try {
//         return s[0].symbolId;
//       } catch {
//         return 0;
//       }
//     }),
//   )
//   .map(t =>
//     t.then(sid => {
//       try {
//         return qtApi.getSymbols.byStockIds([sid]);
//       } catch {
//         return {} as ISymbol[];
//       }
//     }),
//   );

// await qtApi.search.stock('couche tard');
// void qtApi;
