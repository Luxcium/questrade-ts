// import axios from 'axios';
// tslint:disable-next-line: no-implicit-dependencies
import { default as ƒ } from 'ramda';
// import { dateRangeFromNow, void0 } from '../api/utils';
// import { qtEnumerations as Enumerations } from 'questrade-api-enumerations';
import { redeemToken } from '..';
import { log, setDateRange, void0 } from '../api/utils';
// tslint:disable-next-line: no-unused-expression

const dateRange20 = setDateRange(20);
(async () => {
  const { credentials, qtApi } = await redeemToken(
    'eKzmpSBbTR0Atb00FLvwJTJ32IfXBYXl0'
  );
  void0([credentials, qtApi, ƒ, log]);
  // const { startDate, endDate } = dateRange(10);
  //   // console.log(credentials);
  //   // const serverTime = await qtApi.getServerTime();
  //   // console.log(serverTime);
  //   const [timeStart, timeEnd] = dateRangeFromNow(10);
  //   const qt = qtApi;
  //   const results = {
  log(await dateRange20(qtApi.get.market.candlesByStockId(8049)('OneDay')));
  //     setAccount: qtApi.currentAccount,
  //     getServerTime: qtApi.serverTime,
  //     get: {
  //       accounts: {
  //         activities: (await qt.get.account.activities(timeStart)(timeEnd))[0],
  //         orders: (await qt.get.account.orders('All')(timeStart)(timeEnd))[0],
  //         // ordersAll: (await qt.get.account.allOrders()(timeStart)(timeEnd))[0],
  //         ordersByIds: qt.get.account.ordersByIds,
  //         executions: (await qt.get.account.executions(timeStart)(timeEnd))[0],
  //         balances: await qt.get.account.balances(),
  //         positions: await qt.get.account.positions(),
  //         allAccounts: await qt.get.account.allAccounts(),
  //       },
  //       markets: {
  //         candlesById: qt.get.market.candlesByStockId(8049)('OneDay'),
  //         quotes: {
  //           byStrategies: qt.get.quotes.byStrategies,
  //           options: qt.get.quotes.optionsQuotes,
  //           byIds: qt.get.quotes.byStockIds,
  //         },
  //         allMarkets: void0(await qt.get.market.allMarkets()),
  //       },
  //       symbols: {
  //         optionsById: qt.get.symbols.optionChains.byStockId,
  //         byIds: qt.get.symbols.byStockIds,
  //         search: qt.get.search.stock,
  //         searchAll: qt.get.search.allStocks,
  //         searchCount: qt.get.search.countResults,
  //       },
  //     },
  //   };
  //   // results.search = await qtApi.get.symbols.search('t');
  //   // console.dir(results.get.accounts);
  //   // console.dir(results.get.markets);
  //   // console.dir(results.get.symbols);
  //   // aapl : 8049
  //   const candles = await results.get.markets.candlesById(timeStart)(timeEnd);
  //   candles.map(candle => {
  //     console.log(candle.hash.short);
  //   });

  //   return credentials;
})().catch(error => console.log('error message:', error.message));

export const getSymbolId = (stockSymbol: WithSymbolID) => stockSymbol.symbolId;
// const symId = getSymbolId;
interface WithSymbolID {
  symbolId: number;
}
export const xyz = (async () => {
  // const { qtApi } = await redeemToken('gEkuIykdwkkAGPsSo6BS1vQ7idM3uNIs0');

  // console.log(qtApi.serverTime);
  // const stock = qtApi.get.search.stock;

  // const candles =  qtApi.get.market.candlesByStockId(startDate)

  // const getId = async (sid: string) => {
  // return symId(await stock(sid));
  // };

  // qtApi.get.account.activities();

  // console.log(await getId('aapl'));

  // console.log(symId(AAPL));

  return void 0 && ƒ;
})().catch(error => console.log('error message:', error.message));
