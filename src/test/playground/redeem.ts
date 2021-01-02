/* eslint-disable unicorn/no-keyword-prefix */
// tslint:disable-next-line: no-var-requires
import axios, { AxiosStatic } from 'axios';

import { redeemToken } from '../..';
import { getMyToken } from '../../get-token';
import { ProxyReflexionLoggerFunctionHandler, void0 } from '../../utils';

export const echo = console.log;
export const parser = (obj: any) => JSON.parse(JSON.stringify(obj));
async function main() {
  // inside of an async function or async IIFE
  const { qtApi, credentials } = await redeemToken(getMyToken());
  void0(credentials);
  void0(qtApi);
  return (async () => {
    const handler = new ProxyReflexionLoggerFunctionHandler<AxiosStatic>();

    const axiosProxy = new Proxy(axios, handler);

    echo(axiosProxy('https://www.google.com'));
    // echo(axiosProxy);
  })().catch(error => console.error(error.message));
}
main();

/*


  + Terminologie

  # gestionnaire (handler)
  Un objet qui contient les trappes qui intercepteront les opérations.

  # trappes
  Les méthodes qui fournissent l'accès aux propriétés. Ce concept est analogue
  aux trappes utilisées dans les systèmes d'exploitations.

  # cible
  L'objet virtualisé par le proxy. Il est souvent utilisé comme objet de
  stockage. Les invariants (c'est-à-dire les éléments de sémantique qui restent
  inchangés) relatifs à la non-extensibilité et au caractère non-configurable
  des propriétés sont vérifiés par rapport à la cible.

  +Syntaxe
  * var p = new Proxy(cible, gestionnaire);

  + Paramètres

  # cible
  Une cible (qui peut être n'importe quel objet, un tableau, une fonction,
  ou même un autre proxy) qu'on souhaite envelopper dans un Proxy.

  # gestionnaire
  Un objet dont les propriétés sont des fonctions qui définissent le
  comportement du proxy lorsqu'on utilise une opération sur celui-ci.

  +Méthodes
  $> Permet de créer un objet Proxy révocable:
  |> Proxy.revocable()

  +Méthodes pour le gestionnaire
  L'objet utilisé comme gestionnaire regroupe les différentes fonctions
  « trappes » pour le Proxy.

  Toutes ces trappes sont optionnelles. Si une trappe n'a pas été définie,
  le comportement par défaut sera de transmettre l'opération à la cible.


  $> Une trappe pour Object.getPrototypeOf:
  |> handler.getPrototypeOf()

  $> Une trappe pour Object.setPrototypeOf:
  |> handler.setPrototypeOf()

  $> Une trappe pour Object.isExtensible:
  |> handler.isExtensible()

  $> Une trappe pour Object.preventExtensions:
  |> handler.preventExtensions()

  $> Une trappe pour Object.getOwnPropertyDescriptor:
  |> handler.getOwnPropertyDescriptor()

  $> Une trappe pour Object.defineProperty:
  |> handler.defineProperty()

  $> Une trappe pour l'opérateur in:
  |> handler.has()

  $> Une trappe pour l'accès aux valeurs des propriétés:
  |> handler.get()

  $> Une trappe pour la définition des valeurs des propriétés:
  |> handler.set()

  $> Une trappe pour l'opérateur delete:
  |> handler.deleteProperty()

  $> Une trappe pour Object.getOwnPropertyNames et Object.getOwnPropertySymbols:
  |> handler.ownKeys()

  $> Une trappe pour l'appel d'une fonction:
  |> handler.apply()

  $> Une trappe pour l'opérateur new:
  |> handler.construct()

  Certaines trappes non standards sont désormais obsolètes et ont été supprimées.



*/
// echo(qtApi);
// echo(qtApi.currentAccount);
// echo(await qtApi.myBalances());
// echo(qtApi.serverTime);
// echo(qtApi.account);
// echo(qtApi.account.getActivities());
// echo(await qtApi.account.getAllAccounts());
// echo(await qtApi.account.getBalances());
// echo(qtApi.account.getExecutions());
// echo(qtApi.account.getOrders());
// echo(qtApi.account.getOrdersByIds());
// echo(await qtApi.account.getPositions());
// echo(await qtApi.account.getServerTime());
// echo(qtApi.market);
// echo(await qtApi.market.getAllMarkets());
// echo(qtApi.market.getCandlesByStockId());
// echo(qtApi.getOptionsQuotes());
// echo(qtApi.getOptionsQuotes.byOptionsIds());
// echo(qtApi.getOptionsQuotes.fromFilter());
// echo(qtApi.getQuotes);
// echo(qtApi.getQuotes.byStockIds());
// echo(qtApi.getQuotes.byStrategies());
// echo(qtApi.getOptionChains());
// echo(qtApi.getSymbols());
// echo(qtApi.search);
// echo(await qtApi.search.stock('aapl', 2));
// echo(await qtApi.search.allStocks('aapl'));
// echo(qtApi.search.countResults());

// async function then() {
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
// }
// then();
/*


 void parser;
    echo('credentials:', credentials);
    echo('serverTime:', qtApi.serverTime);
    // echo({
    // echo(credentials.toValue());
    // echo(qtApi.serverTime);
    // echo((await qtApi.myBalances()).CAD.combined.current.buyingPower);
    // 2021-01-01T07:43:26.305Z
    // 2014-01-02T00:00:00.000000-05:00
    // void0(
    //   await qtApi.market.getCandlesByStockId(8049)()(
    //     '2019-12-11T07:43:26.305Z'
    //   )('2021-01-01T07:43:26.305Z')
    // );

    echo('credentials.response_');
    echo('credentials.response_');
    echo('credentials.response_');
    echo('credentials.response_');
    echo('credentials.response_');
    // echo(credentials.response_);

    echo(credentials.toValue());
    // echo(credentials.toString());
    // echo(credentials.toValue());
    // echo(await (await account()).getBalances());
    // echo(await (await account()).getAllAccounts());
    // echo(await executions30Days());
    // echo(await orders30Days());
    // echo(await orders30Days());
    // echo(await orders30Days());
    // echo(await orders30Days());
    // echo((await account()).getOrdersByIds([123]));
    // echo(await (await account()).getPositions());
    // echo(await (await account()).getServerTime());
    // echo(await (await market()).getAllMarkets());
    // echo(await candel30Day());
    // echo(await candel30Day());
    // echo(await (await getQuotes()).byStockIds([8049]));
    // echo(await (await getQuotes()).byStrategies(demoRequestVariants));
    // echo(
    // echo(await (await getOptionsQuotes()).byOptionsIds([27_244_725]));
    // echo(await (await search()).stock('aapl'));
    // echo(await (await search()).stock('aapl', 0));
    // echo(await (await search()).allStocks('aapl'));
    // echo(await (await search()).allStocks('aapl', 0));
    // echo(await (await search()).countResults('aapl'));
    // echo(await (await getOptionChains()).byStockId(8049));
    // echo(await (await getSymbols()).byStockIds([8049]));
    // echo(log);

    // Validate the server time as your hello world for this package

    // // inside an async function use await qt.get.<... some properties or methods>
    // echo(await qtApi.myBalances());
    // echo(await qtApi.account.getBalances());
    // echo(credentials);
    // await qtApi.market.getAllMarkets();
    // echo('accessToken  →  ', parser(credentials.accessToken));
    // echo('accountNumber  →  ', parser(credentials.accountNumber));
    // echo('accessToken  →  ', parser(credentials.accessToken));
    // echo('accountNumber  →  ', parser(credentials.accountNumber));
    // echo('apiServer  →  ', parser(credentials.apiServer));
    // echo('apiUrl  →  ', parser(credentials.apiUrl));
    // echo('apiVersion  →  ', parser(credentials.apiVersion));
    // echo('authUrl  →  ', parser(credentials.authUrl));
    // echo('expiresAt  →  ', parser(credentials.expiresAt));
    // echo('expiresAtRaw  →  ', parser(credentials.expiresAtRaw));
    // echo('expiresIn  →  ', parser(credentials.expiresIn));
    // echo('keyDir  →  ', parser(credentials.keyDir));
    // echo('keyFile  →  ', parser(credentials.keyFile));
    // echo('practice  →  ', parser(credentials.practice));
    // echo('tokenExpiration  →  ', parser(credentials.tokenExpiration));
    // echo('refreshToken  →  ', parser(credentials.refreshToken));
    // echo('seedToken  →  ', parser(credentials.seedToken));
    // echo('serverTime  →  ', parser(credentials.serverTime));
    // echo('serverTimeRaw  →  ', parser(credentials.serverTimeRaw));
    // echo('tokenType  →  ', parser(credentials.tokenType));
    // echo('remainingRequests  →  ', parser(credentials.remainingRequests));
    // echo('response_.headers  →  ', parser(credentials.response_?.headers));
    // echo('response_.status  →  ', parser(credentials.response_?.status));
    // echo('response_.statusText  →  ', parser(credentials.response_?.statusText));
    // echo('response_.data  →  ', parser('credentials.response_.data'));
    // echo('config_  →  ', parser(credentials.config_));
    // echo('urlHash64  →  ', parser(credentials.urlHash64));
    // echo('urlHashHex  →  ', parser(credentials.urlHashHex));
    // echo('urlTime  →  ', parser(credentials.urlTime));
    // echo('serverTime_  →  ', parser(credentials.serverTime_));
    // echo('expiresAt_  →  ', parser(credentials.expiresAt_));

    // you can use a try/catch block to manage error instead:
(
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"  )
 */
