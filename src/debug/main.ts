/* eslint-disable radar/no-unused-collection */
import { questradeAPI } from '..';
import { ech0, echo, getMyToken } from '../resources/side-effects';
import { echo1 } from '../resources/side-effects/default-behaviour';
import { willGetSNP500StringList } from '../test/development/getSNP500List';
import { id0, void0 } from '../utils';

const once = { onlyOnce: true };

async function main() {
  echo(`Will execute main: ${once.onlyOnce}`);
  if (!once.onlyOnce) {
    return false;
  }
  once.onlyOnce = false;

  const { credentials, qtApi } = await questradeAPI({
    debug: 100,
    token: getMyToken,
  });

  void0(credentials);
  ech0(qtApi);

  const snp500list = id0(await willGetSNP500StringList()).map(
    async item => await qtApi.search.stock(item),
  );

  snp500list.map(async item =>
    echo1(
      'getSymbols.byStockIds:',
      (
        await qtApi.getSymbols.byStockIds([
          echo1('symbolId:', (await item)[0]?.symbolId) || 1,
        ])
      )[0]?.description,
    ),
  );

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
