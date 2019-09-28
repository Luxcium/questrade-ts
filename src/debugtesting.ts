// tslint:disable: ordered-imports
import { _credentialsFactory } from './core/api/_credentialsFactory';
import { apiFunctions } from './core/classes/QuestradeBase/private/getDataFromApi';
import { id0 } from './core/libraries';
import { day } from './core/utils/timeutil/';
export const log = console.log;
const myRefreshToken = 'qd0AJcnxOGOKpXzvqzIbzKwgHy3Rm3XJ0';

(async () => {
  const startTime = new Date(Date.now() - day(10)).toISOString();
  const endTime = new Date(Date.now()).toISOString();

  const cred = await _credentialsFactory(myRefreshToken);
  const qtApi = apiFunctions(cred);
  // const candles = await qtApi.getCandles(startTime)(endTime)()(8049);
  // log(candles);

  // const getActivities = _getActivities(cred);
  // const activitiesUntil = getActivities(startTime);
  // const activities = activitiesUntil(endTime);
  // log(
  // await activities();
  // );

  // log(await qtApi.postGetOptionsQuotes());
  // log(await qtApi.getOptionsSymbols());

  // log(await qtApi.getSymbolFromSymbolID('ETR18Oct19C110.00'));

  // log(await qtApi.postGetStrategiesQuotes());
  // log(await qtApi.OptionsQuotes()()()()());
  // log(await qtApi.getQuotesByID([8049]));
  // log(await qtApi.getMarkets());
  // log(await qtApi.getSymbolSearch('aapl'));
  // log(await qtApi.getSymbolSearchAll('ETR18Oct19C110.00'));
  // log(await qtApi.getSymbolSearch.count('ETR18Oct19C110.00'));
  // const candles = await qtApi.getCandles(startTime)(endTime)()(8049)
  // transformCandle

  async function accountCallsTimings() {
    log('');

    let datenow = Date.now();

    datenow = Date.now();
    id0(await qtApi.getActivities(startTime)(endTime));
    log('getActivities(startTime)(endTime)', Date.now() - datenow, 'ms');

    datenow = Date.now();
    id0(await qtApi.getOrders(startTime)(endTime)('All'));
    log("getOrders(startTime)(endTime)('All')", Date.now() - datenow, 'ms');

    datenow = Date.now();
    id0(await qtApi.getOrderByIds([546964950, 546966570]));
    log('getOrderByIds([546964950, 546966570])', Date.now() - datenow, 'ms');

    datenow = Date.now();
    id0(await qtApi.getExecutions(startTime)(endTime));
    log('getExecutions(startTime)(endTime)', Date.now() - datenow, 'ms');

    datenow = Date.now();
    id0(await qtApi.getBalances());
    log('getBalances()', Date.now() - datenow, 'ms');

    datenow = Date.now();
    id0(await qtApi.getPositions());
    log('getPositions()', Date.now() - datenow, 'ms');

    datenow = Date.now();
    id0(await qtApi.getAccounts());
    log('getAccounts()', Date.now() - datenow, 'ms');

    datenow = Date.now();
    id0(await qtApi.getServerTime());
    log('getServerTime()', Date.now() - datenow, 'ms');

    log(
      'serverTime offset with client:',
      (await qtApi.getServerTime()).valueOf() - Date.now(),
      'ms'
    );

    log('');
  }

  async function marketCallsTimings() {
    let datenow = Date.now();
    log('');

    datenow = Date.now();
    id0(await qtApi.getCandles(startTime)(endTime)('OneDay')(8049));
    log(
      "getCandles(startTime)(endTime)('OneDay')(8049)",
      Date.now() - datenow,
      'ms'
    );

    log('markets/quotes/strategies');
    log('markets/quotes/options');
    datenow = Date.now();
    id0(await qtApi.getQuotesByIds([8049]));
    log('getQuotesByID([8049])', Date.now() - datenow, 'ms');

    datenow = Date.now();
    id0(await qtApi.getMarkets());
    log('getMarkets()', Date.now() - datenow, 'ms');

    datenow = Date.now();
    id0(await qtApi.getOptionsById(8049));
    log('getOptionsSymbolsByIds(8049)', Date.now() - datenow, 'ms');
    // option symbol id : 27003348

    datenow = Date.now();
    id0(await qtApi.getSymbolSearch('aapl'));
    log('getSymbolSearch("aapl")', Date.now() - datenow, 'ms');

    datenow = Date.now();
    id0(await qtApi.getSymbolsByIds([8049]));
    log('getSymbolsByIDs([8049])', Date.now() - datenow, 'ms');

    log('');
  }

  await accountCallsTimings();
  await marketCallsTimings();
})().catch(error =>
  console.log('error message in debugtesting:', error.message)
);

/*
 as unknown) as Date).getUTCDate -
      datenow

 { start: '2014-08-27T00:00:00.000000-04:00',
    end: '2014-08-28T00:00:00.000000-04:00',
    low: 100.7,
    high: 102.57,
    open: 101.02,
    close: 102.13,
    volume: 52369011,
    VWAP: 101.8 },



}
{
    start: date
    end: date
    candel:{ low: 100.7,
    high: 102.57,
    open: 101.02,
    close: 102.13,
    volume: 52369011}
    VWAP: 101.8
},













*/
