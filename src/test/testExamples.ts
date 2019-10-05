// import { day, redeemToken } from '..';
// export const testExamples = async (
//   yourRefreshToken: string,
//   startTime: string,
//   endTime: string,
//   optionExpiryDate: string,
//   optionNumericID: number,
//   stockNumericID: number,
//   stockStringID: string
// ) => {
//   (async () => {
//     // Using console.log (log) to output the
//     // const log = console.log;
//     // always put your code in a try catch block
//     try {
//       // Create a questrade-ts Api (qtApi) Object redeeming your Refresh Token
//       const { qtApi: qt, credentials } = await redeemToken(yourRefreshToken);

//       // list of all the differents api calls managed by this package

//       console.log(await qt.get.accounts.activities(startTime)(endTime));
//       console.log(await qt.get.accounts.orders(startTime)(endTime)('All'));
//       console.log(await qt.get.accounts.executions(startTime)(endTime));
//       console.log(await qt.get.accounts.balances());
//       console.log(await qt.get.accounts.positions());
//       console.log(await qt.get.accounts.allAccounts());
//       console.log(await qt.get.accounts.time());
//       console.log(
//         await qt.get.markets.candlesById(startTime)(endTime)('OneDay')(
//           stockNumericID
//         )
//       );
//       console.log(
//         '(await qt.get.markets.quotes.byStrategies({variants:[{variantId:1,strategy:"custom",[]}]}));'
//       );
//       console.log(
//         await qt.get.markets.quotes.options({
//           underlyingId: stockNumericID,
//           expiryDate: optionExpiryDate,
//         })
//       );
//       console.log(await qt.get.markets.quotes.options.byIds([optionNumericID]));
//       console.log(await qt.get.markets.quotes.byIds([stockNumericID]));
//       console.log(await qt.get.markets.allMarkets());
//       console.log(await qt.get.symbols.optionsById(stockNumericID));
//       console.log(await qt.get.symbols.search(stockStringID));
//       console.log((await qt.get.symbols.search(stockStringID)).count);
//       console.log(await qt.get.symbols.search.count(stockStringID));
//       console.log(await qt.get.symbols.searchAll(stockStringID));
//       console.log(await qt.get.symbols.byIds([stockNumericID]));

//       // return private credentials
//       console.log(credentials);
//       // return credentials;
//     } catch (error) {
//       // manage your errors here if needed
//       console.error(error.message);
//     }
//   })();
// };
// async function runExamples(isTesting: boolean = false, refreshToken: string) {
//   if (!isTesting) return;

//   // for easier reading of the examples
//   const toISOStringDate = (dateTime: number | string) =>
//     new Date(dateTime).toISOString();
//   // for easier reading of the examples

//   // convert days to miliseconds for calculations in date
//   const tenDays = day(10);

//   // to have a start and end dateTime to use in examples
//   const timeNow = Date.now();
//   const start = timeNow - tenDays;
//   const end = timeNow;
//   const exampleStartTime = toISOStringDate(start);
//   const exampleEndTime = toISOStringDate(end);

//   const exampleOptionExpiryDate: string = '2019-10-04T05:37:30.053Z';
//   const exampleOptionNumericID: number = 27003348;
//   const exampleStockNumericID: number = 8049; // 'aapl'
//   const exampleStockStringID: string = 'aapl'; // 8049

//   // you do not have to put the token in plain text you should import it from elsewhere
//   // const refreshToken = 'YOUR-TOKEN-HERE_jKi1YCwCjAMJFugwD4A8cgb0';
//   // const refreshToken = ''; // myrefresh token have been revoked prior to publishing
//   // using async Immediately Invoked Function Expressions to avoid using then().catch()

//   await testExamples(
//     refreshToken,
//     exampleStartTime,
//     exampleEndTime,
//     exampleOptionExpiryDate,
//     exampleOptionNumericID,
//     exampleStockNumericID,
//     exampleStockStringID
//   );

//   return;
// }

// export const testAll = async (token: string) => {
//   return runExamples(true, token);
// };

// export const partialTests = (token: string) => {
//   return { token };
// };
