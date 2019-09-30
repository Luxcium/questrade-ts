// tslint:disable: ordered-imports
import { tokenConnection } from '.';
import { _marketsQuotesOptions } from './api';
// import { day, id0 } from './utils';
export const log = console.log;
const myRefreshToken = 'cz8IwkxFNKilf9TkoeKA0gD5whwALsMt0';

(async () => {
  // const startTime = new Date(Date.now() - day(10)).toISOString();
  // const endTime = new Date(Date.now()).toISOString();
  const { /* qt, */ credentials } = await tokenConnection(myRefreshToken);
  // async function accountCallsTimings() {
  //   log('');

  //   let datenow = Date.now();

  //   datenow = Date.now();
  //   id0(await qt.getActivities(startTime)(endTime));
  //   log('getActivities(startTime)(endTime)', Date.now() - datenow, 'ms');

  //   datenow = Date.now();
  //   id0(await qt.getOrders(startTime)(endTime)('All'));
  //   log("getOrders(startTime)(endTime)('All')", Date.now() - datenow, 'ms');

  //   datenow = Date.now();
  //   id0(await qt.getOrderByIds([546964950, 546966570]));
  //   log('getOrderByIds([546964950, 546966570])', Date.now() - datenow, 'ms');

  //   datenow = Date.now();
  //   id0(await qt.getExecutions(startTime)(endTime));
  //   log('getExecutions(startTime)(endTime)', Date.now() - datenow, 'ms');

  //   datenow = Date.now();
  //   id0(await qt.getBalances());
  //   log('getBalances()', Date.now() - datenow, 'ms');

  //   datenow = Date.now();
  //   id0(await qt.getPositions());
  //   log('getPositions()', Date.now() - datenow, 'ms');

  //   datenow = Date.now();
  //   id0(await qt.getAccounts());
  //   log('getAccounts()', Date.now() - datenow, 'ms');

  //   datenow = Date.now();
  //   id0(await qt.getServerTime());
  //   log('getServerTime()', Date.now() - datenow, 'ms');

  //   log(
  //     'serverTime offset with client:',
  //     (await qt.getServerTime()).valueOf() - Date.now(),
  //     'ms'
  //   );

  //   log('');
  // }

  // async function marketCallsTimings() {
  //   let datenow = Date.now();
  //   log('');

  //   datenow = Date.now();
  //   id0(await qt.getCandles(startTime)(endTime)('OneDay')(8049));
  //   log(
  //     "getCandles(startTime)(endTime)('OneDay')(8049)",
  //     Date.now() - datenow,
  //     'ms'
  //   );

  //   log('markets/quotes/strategies');
  //   log('markets/quotes/options');
  //   datenow = Date.now();
  //   id0(await qt.getQuotesByIds([8049]));
  //   log('getQuotesByID([8049])', Date.now() - datenow, 'ms');

  //   datenow = Date.now();
  //   id0(await qt.getMarkets());
  //   log('getMarkets()', Date.now() - datenow, 'ms');

  //   datenow = Date.now();
  //   log(await qt.getOptionsById(8049));
  //   log('getOptionsSymbolsByIds(8049)', Date.now() - datenow, 'ms');
  //   // option symbol id : 27003348

  //   datenow = Date.now();
  //   id0(await qt.getSymbolSearch('aapl'));
  //   log('getSymbolSearch("aapl")', Date.now() - datenow, 'ms');

  //   datenow = Date.now();
  //   id0(await qt.getSymbolsByIds([8049]));
  //   log('getSymbolsByIDs([8049])', Date.now() - datenow, 'ms');

  //   log('');
  // }
  log(
    await _marketsQuotesOptions(credentials)(
      [],
      // )(
      // [26947351, 26947367] // , // )
      8049,
      '2019-10-04T00:00:00.000000-04:00'
    )
  );
  // symbolId: 26947351
  // await accountCallsTimings();
  // await marketCallsTimings();
})().catch(error =>
  console.log('error message in debugtesting:', error.message)
);
