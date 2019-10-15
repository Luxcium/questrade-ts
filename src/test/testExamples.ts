// import { day, Enumerations } from '..';
// import { redeemToken } from '../api/public/credentialsFactory';
// import { void0 } from '../api/utils';

// // TypeScript/JavaScript

// const testing = true;

// export const testExamples = (
//   yourRefreshToken: string,
//   startTime: string,
//   endTime: string,
//   optionExpiryDate: string,
//   optionNumericID: number,
//   stockNumericID: number,
//   stockStringID: string
// ) =>
//   (async () => {
//     // Using console.log (log) to output the
//     const log = console.log;
//     // always put your code in a try catch block
//     try {
//       // Create a questrade-ts Api (qtApi) Object redeeming your Refresh Token
//       const { qtApi: qt, credentials } = await redeemToken(yourRefreshToken);

//       // list of all the differents api calls managed by this package
//       void0(
//         optionNumericID,
//         stockStringID,
//         optionExpiryDate,
//         stockNumericID,
//         startTime,
//         endTime,
//         log
//       );
//       // ACCOUNTS CALLS
//       // GET ACCOUNTS/:ID/ACTIVITIES
//       void0(await qt.get.accounts.activities(startTime)(endTime));
//       // GET ACCOUNTS/:ID/ORDERS
//       void0(await qt.get.accounts.orders('All')(startTime)(endTime));
//       // GET ACCOUNTS/:ID/EXECUTIONS
//       void0(await qt.get.accounts.executions(startTime)(endTime));
//       // GET ACCOUNTS/:ID/BALANCES
//       void0(await qt.get.accounts.balances());
//       // GET ACCOUNTS/:ID/POSITIONS
//       void0(await qt.get.accounts.positions());
//       // GET ACCOUNTS
//       void0(await qt.get.accounts.allAccounts());
//       // GET TIME
//       void0(await qt.get.accounts.time());

//       // MARKET CALLS
//       // GET MARKETS/CANDLES/:ID
//       void0(
//         await qt.get.markets.candlesById(startTime)(endTime)('OneDay')(
//           stockNumericID
//         )
//       );
//       // !! GET MARKETS/QUOTES/STRATEGIES
//       void0('NO IMPLEMENTATION AT HIS TIME');

//       // GET MARKETS/QUOTES/OPTIONS (filter)
//       void0(
//         await qt.get.markets.quotes.options({
//           underlyingId: stockNumericID,
//           expiryDate: optionExpiryDate,
//         })
//       );
//       /*
//       underlyingId: number; [REQUIRED]
//       expiryDate: string; [REQUIRED]
//       optionType?: string | null; [OPTIONAL]
//       minstrikePrice?: number | null; [OPTIONAL]
//       maxstrikePrice?: number | null; [OPTIONAL]
//     */

//       // !! GET MARKETS/QUOTES/OPTIONS (byIds optionsIds array)
//       // !! log(await qt.get.markets.quotes.options.byIds([optionNumericID]));
//       // GET MARKETS/QUOTES/:ID
//       void0(await qt.get.markets.quotes.byIds([stockNumericID]));
//       // GET MARKETS
//       // void0(await qt.get.markets.allMarkets());
//       // GET SYMBOLS/:ID/OPTIONS (by single stockId)
//       void0(await qt.get.symbols.optionsById(stockNumericID));
//       // GET SYMBOLS/SEARCH (return fisrt result or offseted result)
//       void0(await qt.get.symbols.search(stockStringID));
//       // GET SYMBOLS/SEARCH (count of results or offseted results)
//       void0((await qt.get.symbols.search(stockStringID)).count);
//       // !! GET SYMBOLS/SEARCH (count the number of results)
//       // !! log(await qt.get.symbols.search.count(stockStringID));
//       /* OR */
//       void0(await qt.get.symbols.searchCount(stockStringID));
//       // GET SYMBOLS/SEARCH (return ALL results can profide an offset as second)
//       void0(await qt.get.symbols.searchAll(stockStringID));

//       // GET SYMBOLS/:ID (stockIds array)
//       void0(await qt.get.symbols.byIds([stockNumericID]));
//       // Enumerations from questrade-api-enumerations NPM package (included)
//       /** Specifies all supported currency codes. */
//       /* console.dir */ void0(Enumerations.Currency);
//       /** Specifies all supported listing exchanges. */
//       /* console.dir */ void0(Enumerations.ListingExchange);
//       /** Specifies all supported user account types. */
//       /* console.dir */ void0(Enumerations.AccountType);
//       /** Specifies all supported account client types. */
//       /* console.dir */ void0(Enumerations.ClientAccountType);
//       /** Specifies all supported account status values. */
//       /* console.dir */ void0(Enumerations.AccountStatus);
//       /** Specifies all supported market data tick types. */
//       /* console.dir */ void0(Enumerations.TickType);
//       /** Specifies all supported option types. */
//       /* console.dir */ void0(Enumerations.OptionType);
//       /** Specifies all supported option duration types. */
//       /* console.dir */ void0(Enumerations.OptionDurationType);
//       /** Specifies all supported option exercise types. */
//       /* console.dir */ void0(Enumerations.OptionExerciseType);
//       /** Specifies all supported security types. */
//       /* console.dir */ void0(Enumerations.SecurityType);
//       /** Specifies all supported order state filter types. */
//       /* console.dir */ void0(Enumerations.OrderStateFilterType);
//       /** Specifies all supported order side values. */
//       /* console.dir */ void0(Enumerations.OrderAction);
//       /** Specifies all supported client order side values. */
//       /* console.dir */ void0(Enumerations.OrderSide);
//       /** Specifies all supported order types. */
//       /* console.dir */ void0(Enumerations.OrderType);
//       /** Specifies all supported order Time-In-Force instructions. */
//       /* console.dir */ void0(Enumerations.OrderTimeInForce);
//       /** Specifies all supported order states. */
//       /* console.dir */ void0(Enumerations.OrderState);
//       /** Specifies all supported order execution status values. */
//       /* console.dir */ void0(Enumerations.HistoricalDataGranularity);
//       /** Specifies all supported bracket order components. */
//       /* console.dir */ void0(Enumerations.OrderClass);
//       /** Supported types of strategies for multi-leg strategy orders. */
//       /* console.dir */ void0(Enumerations.StrategyTypes);

//       // return private credentials
//       log(credentials);
//     } catch (error) {
//       // manage your errors here if needed
//       console.error(error.message);
//       throw error;
//     }
//   })();

// function runExamples(isTesting: boolean = false) {
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
//   const refreshToken = 'EXUPy9fGLADVQMzR9QvSPixTLPdMJ5Jv0';
//   // using async Immediately Invoked Function Expressions to avoid using then().catch()

//   testExamples(
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

// runExamples(testing);
