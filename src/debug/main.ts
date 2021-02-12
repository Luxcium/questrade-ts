/* eslint-disable radar/no-unused-collection */
import { questradeAPI } from '..';
import { ech0, echo, getMyToken } from '../resources/side-effects';
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

  const snp500list = id0(await willGetSNP500StringList())
    .slice(0, 5)
    .map(ech0);

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
