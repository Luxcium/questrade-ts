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

  const snp500list = id0(await willGetSNP500StringList()).map(item =>
    qtApi.search.stock(item),
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
  // Snp500list
  //   .map(stock => qtApi.search.stock(stock))
  //   .map(stock =>
  //     Stock.then(s => {
  //       Try {
  //         Return s[0].symbolId;
  //       } catch {
  //         Return 0;
  //       }
  //     }),
  //   )
  //   .map(t =>
  //     T.then(sid => {
  //       Try {
  //         Return qtApi.getSymbols.byStockIds([sid]);
  //       } catch {
  //         Return {} as ISymbol[];
  //       }
  //     }),
  //   );

  // Await qtApi.search.stock('couche tard');
  // Void qtApi;
  void snp500list;

  return true;
}

main();
export { main };
