// tslint:disable: ordered-imports
import { tokenConnection } from '.';
import { day, id0 } from './utils';
export const log = console.log;
const myRefreshToken = 'cz8IwkxFNKilf9TkoeKA0gD5whwALsMt0';

(async () => {
  const startTime = new Date(Date.now() - day(10)).toISOString();
  const endTime = new Date(Date.now()).toISOString();
  const { qt } = await tokenConnection(myRefreshToken);
  async function accountCallsTimings() {
    log('');

    let datenow = Date.now();

    datenow = Date.now();
    id0(await qt.getActivities(startTime)(endTime));
    log('getActivities(startTime)(endTime)', Date.now() - datenow, 'ms');

    datenow = Date.now();
    id0(await qt.getOrders(startTime)(endTime)('All'));
    log("getOrders(startTime)(endTime)('All')", Date.now() - datenow, 'ms');

    datenow = Date.now();
    id0(await qt.getOrderByIds([546964950, 546966570]));
    log('getOrderByIds([546964950, 546966570])', Date.now() - datenow, 'ms');

    datenow = Date.now();
    id0(await qt.getExecutions(startTime)(endTime));
    log('getExecutions(startTime)(endTime)', Date.now() - datenow, 'ms');

    datenow = Date.now();
    id0(await qt.getBalances());
    log('getBalances()', Date.now() - datenow, 'ms');

    datenow = Date.now();
    id0(await qt.getPositions());
    log('getPositions()', Date.now() - datenow, 'ms');

    datenow = Date.now();
    id0(await qt.getAccounts());
    log('getAccounts()', Date.now() - datenow, 'ms');

    datenow = Date.now();
    id0(await qt.getServerTime());
    log('getServerTime()', Date.now() - datenow, 'ms');

    log(
      'serverTime offset with client:',
      (await qt.getServerTime()).valueOf() - Date.now(),
      'ms'
    );

    log('');
  }

  async function marketCallsTimings() {
    let datenow = Date.now();
    log('');

    datenow = Date.now();
    id0(await qt.getCandles(startTime)(endTime)('OneDay')(8049));
    log(
      "getCandles(startTime)(endTime)('OneDay')(8049)",
      Date.now() - datenow,
      'ms'
    );

    log('markets/quotes/strategies');
    log('markets/quotes/options');
    datenow = Date.now();
    id0(await qt.getQuotesByIds([8049]));
    log('getQuotesByID([8049])', Date.now() - datenow, 'ms');

    datenow = Date.now();
    id0(await qt.getMarkets());
    log('getMarkets()', Date.now() - datenow, 'ms');

    datenow = Date.now();
    id0(await qt.getOptionsById(8049));
    log('getOptionsSymbolsByIds(8049)', Date.now() - datenow, 'ms');
    // option symbol id : 27003348

    datenow = Date.now();
    id0(await qt.getSymbolSearch('aapl'));
    log('getSymbolSearch("aapl")', Date.now() - datenow, 'ms');

    datenow = Date.now();
    id0(await qt.getSymbolsByIds([8049]));
    log('getSymbolsByIDs([8049])', Date.now() - datenow, 'ms');

    log('');
  }

  await accountCallsTimings();
  await marketCallsTimings();
})().catch(error =>
  console.log('error message in debugtesting:', error.message)
);

// const candles = await qt.getCandles(startTime)(endTime)()(8049);
// log(candles);

// const getActivities = _getActivities(cred);
// const activitiesUntil = getActivities(startTime);
// const activities = activitiesUntil(endTime);
// log(
// await activities();
// );

// log(await qt.postGetOptionsQuotes());
// log(await qt.getOptionsSymbols());

// log(await qt.getSymbolFromSymbolID('ETR18Oct19C110.00'));

// log(await qt.postGetStrategiesQuotes());
// log(await qt.OptionsQuotes()()()()());
// log(await qt.getQuotesByID([8049]));
// log(await qt.getMarkets());
// log(await qt.getSymbolSearch('aapl'));
// log(await qt.getSymbolSearchAll('ETR18Oct19C110.00'));
// log(await qt.getSymbolSearch.count('ETR18Oct19C110.00'));
// const candles = await qt.getCandles(startTime)(endTime)()(8049)
// transformCandle
