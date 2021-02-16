/* eslint-disable radar/no-unused-collection */
import { qtAPIv2_0 } from '..';
import { ech0, echo, getMyToken } from '../resources/side-effects';
import { echo1 } from '../resources/side-effects/default-behaviour';
import { ApiOptions } from '../typescript';
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
  ech0(qtApi);

  const snp500list = id0(await willGetSNP500StringList())
    .slice(0, 10)
    .map(async item =>
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

  // snp500list.map(async item =>
  //   echo1(
  //     'getSymbols.byStockIds:',
  //     (
  //       await qtApi.getSymbols.byStockIds([
  //         echo1('symbolId:', (await item)[0]?.symbolId) || 1,
  //       ])
  //     )[0],
  //   ),
  // );

  /*
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
  void snp500list;

  return true;
}

main();
export { main };
