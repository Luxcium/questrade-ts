import { redeemToken } from '.';
import { day, id0, log } from './utils';
// import { types } from 'util';
// types.
const myRefreshToken = 'IskeVOywsgf1xx3305wA64BGKwyVibRQ0';

const aValue = 0;

const startTime = new Date(Date.now() - day(1)).toISOString();
const endTime = new Date(Date.now()).toISOString();

(async () => {
  const { qtApi: qt, credentials } = await redeemToken(myRefreshToken);

  await id0(async () => qt.getServerTime());

  // await id0(async () => qt.setAccount, 'Test #', ++aValue);

  // await id0(
  //   async () => qt.get.accounts.activities(startTime)(endTime),
  //   'Test #',
  //   ++aValue
  // );

  // await id0(async () => qt.get.accounts.allAccounts(), 'Test #', ++aValue);

  // await id0(async () => qt.get.accounts.balances(), 'Test #', ++aValue);

  // await id0(
  // async () =>
  log(await qt.get.accounts.executions(startTime)(endTime));
  //   'Test #',
  //   ++aValue
  // );

  // await id0(
  //   async () => qt.get.accounts.orders(startTime)(endTime)('All'),
  //   'Test #',
  //   ++aValue
  // );

  // // await id0(
  // //   async () => qt.get.accounts.ordersAll(startTime)(endTime),
  // //   'Test #',
  // //   ++aValue,
  // //   '!'
  // // );

  // await id0(
  //   async () => qt.get.accounts.ordersByIds([546964950, 546966570]),
  //   'Test #',
  //   ++aValue
  // );

  // await id0(async () => qt.get.accounts.positions(), 'Test #', ++aValue);

  // await id0(async () => qt.get.accounts.time(), 'Test #', ++aValue);

  // await id0(
  //   async () => qt.get.markets.quotes.byIds([8049, 8049]),
  //   'Test #',
  //   ++aValue
  // );

  // await id0(
  //   async () => qt.get.markets.quotes.options.byIds([27003348]),
  //   'Test #',
  //   ++aValue
  // );

  // await id0(async () => qt.get.markets.quotes.byStrategies, 'Test #', ++aValue);

  // await id0(
  //   async () => qt.get.markets.candlesById(startTime)(endTime)('OneDay')(8049),
  //   'Test #',
  //   ++aValue
  // );

  // await id0(async () => qt.get.markets.allMarkets(), 'Test #', ++aValue);

  // await id0(async () => qt.get.symbols.byIds([8049, 8049]), 'Test #', ++aValue);

  // await id0(
  //   async () => qt.get.symbols.optionsById(27003348),
  //   'Test #',
  //   ++aValue
  // );

  // await id0(async () => qt.get.symbols.search('aapl'), 'Test #', ++aValue);

  // await id0(
  //   async () => (await qt.get.symbols.search('aapl')).count,
  //   'Test #',
  //   ++aValue
  // );

  // await id0(
  //   async () => qt.get.symbols.search.count('aapl'),
  //   'Test #',
  //   ++aValue
  // );

  return credentials;
})()
  .then(cred => {
    id0(() => cred);
  })
  .catch(error =>
    console.log(
      'Test #',
      aValue,
      'error message in debugtesting:',
      error.message
    )
  );

// async function accountCallsTimings(){

//   let datenow = Date.now();

//   datenow = Date.now();
//   await  id0(async ()=>await qt.getActivities(startTime)(endTime)), 'getActivities(startTime)(endTime)', Date.now() - datenow,;

//   datenow = Date.now();
//   await  id0(async ()=>await qt.getOrders(startTime)(endTime)('All');
//   log("getOrders(startTime)(endTime)('All')", Date.now() - datenow, 'ms');

//   datenow = Date.now();
//   await  id0(async ()=>await qt.getOrderByIds([546964950, 546966570])), 'getOrderByIds([546964950, 546966570])', Date.now() - datenow,;

//   datenow = Date.now();
//   await  id0(async ()=>await qt.getExecutions(startTime)(endTime)), 'getExecutions(startTime)(endTime)', Date.now() - datenow,;

//   datenow = Date.now();
//   await  id0(async ()=>await qt.getBalances()), 'getBalances()', Date.now() - datenow,;

//   datenow = Date.now();
//   await  id0(async ()=>await qt.getPositions()), 'getPositions()', Date.now() - datenow,;

//   datenow = Date.now();
//   await  id0(async ()=>await qt.getAccounts()), 'getAccounts()', Date.now() - datenow,;

//   datenow = Date.now();
//   await  id0(async ()=>await qt.getServerTime()), 'getServerTime()', Date.now() - datenow,;

//   log(
//     'serverTime offset with client:',
//     (await qt.getServerTime()).valueOf() - Date.now(),
//     'ms'
//   );

//

// async function marketCallsTimings() {
//   let datenow = Date.now(;

//   datenow = Date.now();
//   await  id0(async ()=>await qt.getCandles(startTime)(endTime)('OneDay')(8049);
//   log(
//     "getCandles(startTime)(endTime)('OneDay')(8049)",
//     Date.now() - datenow,
//     'ms'
//   );, 'markets/quotes/strate

//   datenow = Date.now(, 'markets/quotes/opt);
//   await  id0(async ()=>await qt.getQuotesByIds([8049])), 'getQuotesByID([8049])', Date.now() - datenow,;

//   datenow = Date.now();
//   await  id0(async ()=>await qt.getMarkets()), 'getMarkets()', Date.now() - datenow,;

//   datenow = Date.now();
//   log(await qt.getOptionsById(8049);

// option symbol id : 270033, 'getOptionsSymbolsByIds(8049)', Date.now() - datenow,48

//   datenow = Date.now();
//   await  id0(async ()=>await qt.getSymbolSearch('aapl')), 'getSymbolSearch("aapl")', Date.now() - datenow,;

//   datenow = Date.now();
//   await  id0(async ()=>await qt.getSymbolsByIds([8049])), 'getSymbolsByIDs([8049])', Date.now() - datenow,;

// }
// const postData: OptionsPostData = { optionIds: [26947351, 26947367] };
// log(
// await _marketsQuotesOptions(credentials)(
// )(
// null, // postData.optionIds,
// 8049,
// '2019-10-04T00:00:00.000000-04:00'
// )
// );
// symbolId: 26947351
// await accountCallsTimings();
// await marketCallsTimings();
