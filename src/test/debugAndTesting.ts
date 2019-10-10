import axios from 'axios';
// tslint:disable-next-line: no-implicit-dependencies
import { default as ƒ } from 'ramda';
import { _redeemToken } from '../api/private/core/CredentialsFactory';
import { IExecution } from '../api/typescript';
import { dateRangeFromNow, void0 } from '../api/utils';
// import { qtEnumerations as Enumerations } from 'questrade-api-enumerations';
import { redeemToken } from '../index';
(async () => {
  void0(ƒ);
  const { credentials, qtApi } = await _redeemToken(axios)(
    'JPkAws5CSK1GkAzpVovk4Q3nwVbUTUPA0'
  );

  // console.log(credentials);
  // const serverTime = await qtApi.getServerTime();
  // console.log(serverTime);
  const [timeStart, timeEnd] = dateRangeFromNow(10);
  const qt = qtApi;
  const results = {
    setAccount: qtApi.currentAccount,
    getServerTime: qtApi.serverTime,
    get: {
      accounts: {
        activities: (await qt.get.account.activities()(timeStart)(timeEnd))[0],
        orders: (await qt.get.account.orders('All')(timeStart)(timeEnd))[0],
        // ordersAll: (await qt.get.account.allOrders()(timeStart)(timeEnd))[0],
        ordersByIds: qt.get.account.ordersByIds,
        executions: (await qt.get.account.executions()(timeStart)(timeEnd))[0],
        balances: await qt.get.account.balances(),
        positions: await qt.get.account.positions(),
        allAccounts: await qt.get.account.allAccounts(),
      },
      markets: {
        candlesById: qt.get.market.candlesByStockId(8049)('OneDay'),
        quotes: {
          byStrategies: qt.get.quotes.byStrategies,
          options: qt.get.quotes.optionsQuotes,
          byIds: qt.get.quotes.byStockIds,
        },
        allMarkets: void0(await qt.get.market.allMarkets()),
      },
      symbols: {
        optionsById: qt.get.symbols.optionChains.byStockId,
        byIds: qt.get.symbols.byStockIds,
        search: qt.get.search.stock,
        searchAll: qt.get.search.allStocks,
        searchCount: qt.get.search.countResults,
      },
    },
  };
  // results.search = await qtApi.get.symbols.search('t');
  // console.dir(results.get.accounts);
  // console.dir(results.get.markets);
  // console.dir(results.get.symbols);
  // aapl : 8049
  const candles = await results.get.markets.candlesById(timeStart)(timeEnd);
  candles.map(candle => {
    console.log(candle.hash.short);
  });

  return credentials;
})().catch(error => console.log('error message:', error.message));

export type DateRange<R> = (startTime: string) => (endTime: string) => R;

export type AccountExecutions = DateRange<Promise<IExecution[]>>;

export const getSymbolId = (stockSymbol: WithSymbolID) => stockSymbol.symbolId;
const symId = getSymbolId;
interface WithSymbolID {
  symbolId: number;
}

export const x = (async () => {
  const { qtApi } = await redeemToken('gEkuIykdwkkAGPsSo6BS1vQ7idM3uNIs0');

  console.log(qtApi.serverTime);
  const stock = qtApi.get.search.stock;

  // const candles =  qtApi.get.market.candlesByStockId(startDate)

  const getId = async (sid: string) => {
    return symId(await stock(sid));
  };

  console.log(await getId('aapl'));

  // console.log(symId(AAPL));

  return void 0 && ƒ;
})().catch(error => console.log('error message:', error.message));
