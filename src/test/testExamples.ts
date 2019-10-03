// // TypeScript/JavaScript
// import { day, redeemToken } from '.';
export const testExamples = () => void 0;
// export const testExamples = async (
//   yourRefreshToken: string,
//   startTime: string,
//   endTime: string,
//   optionExpiryDate: string,
//   optionNumericID: number,
//   stockNumericID: number,
//   stockStringID: string,
//   done: any
// ) => {
//   // (async (done: any) => {
//   // Using console.log (log) to output the
//   // always put your code in a try catch block
//   try {
//     // Create a questrade-ts Api (qtApi) Object redeeming your Refresh Token
//     const { qtApi: qt, credentials } = await redeemToken(yourRefreshToken);

//     // list of all the differents api calls managed by this package

//     // ACCOUNTS CALLS
//     // GET ACCOUNTS/:ID/ACTIVITIES

//     const testSomething = async () =>
//       await qt.get.accounts.activities(startTime)(endTime);
//     // GET ACCOUNTS/:ID/ORDERS
//     const testSomething = async () =>
//       await qt.get.accounts.orders(startTime)(endTime)('All');
//     // GET ACCOUNTS/:ID/EXECUTIONS
//     const testSomething = async () =>
//       await qt.get.accounts.executions(startTime)(endTime);
//     // GET ACCOUNTS/:ID/BALANCES
//     const testSomething = async () => await qt.get.accounts.balances();
//     // GET ACCOUNTS/:ID/POSITIONS
//     const testSomething = async () => await qt.get.accounts.positions();
//     // GET ACCOUNTS
//     const testSomething = async () => await qt.get.accounts.allAccounts();
//     // GET TIME
//     const testSomething = async () => await qt.get.accounts.time();

//     // MARKET CALLS
//     // GET MARKETS/CANDLES/:ID
//     const testSomething = async () =>
//       await qt.get.markets.candlesById(startTime)(endTime)('OneDay')(
//         stockNumericID
//       );
//     // GET MARKETS/QUOTES/STRATEGIES
//     const testSomething = async () => 'NO IMPLEMENTATION AT HIS TIME';

//     // GET MARKETS/QUOTES/OPTIONS (filter)
//     const testSomething = async () =>
//       await qt.get.markets.quotes.options({
//         underlyingId: stockNumericID,
//         expiryDate: optionExpiryDate,
//       });
//     /*
//       underlyingId: number; [REQUIRED]
//       expiryDate: string; [REQUIRED]
//       optionType?: string | null; [OPTIONAL]
//       minstrikePrice?: number | null; [OPTIONAL]
//       maxstrikePrice?: number | null; [OPTIONAL]
//     */

//     // GET MARKETS/QUOTES/OPTIONS (byIds optionsIds array)
//     const testSomething = async () =>
//       await qt.get.markets.quotes.options.byIds([optionNumericID]);
//     // GET MARKETS/QUOTES/:ID
//     const testSomething = async () =>
//       await qt.get.markets.quotes.byIds([stockNumericID]);
//     // GET MARKETS
//     const testSomething = async () => await qt.get.markets.allMarkets();
//     // GET SYMBOLS/:ID/OPTIONS (by single stockId)
//     const testSomething = async () =>
//       await qt.get.symbols.optionsById(stockNumericID);
//     // GET SYMBOLS/SEARCH (return fisrt result or offseted result)
//     const testSomething = async () =>
//       await qt.get.symbols.search(stockStringID);
//     // GET SYMBOLS/SEARCH (count of results or offseted results)
//     const testSomething = async () =>
//       (await qt.get.symbols.search(stockStringID)).count;
//     // GET SYMBOLS/SEARCH (count the number of results)
//     const testSomething = async () =>
//       await qt.get.symbols.search.count(stockStringID);
//     /* OR */
//     const testSomething = async () =>
//       await qt.get.symbols.searchCount(stockStringID);
//     // GET SYMBOLS/SEARCH (return ALL results can profide an offset as second)
//     const testSomething = async () =>
//       await qt.get.symbols.searchAll(stockStringID);

//     // GET SYMBOLS/:ID (stockIds array)
//     const testSomething = async () =>
//       await qt.get.symbols.byIds([stockNumericID]);

// tslint:disable-next-line: variable-name
// tslint:disable-next-line: variable-name
export const testEnumerations = async (Enumerations: any) => {
  // Enumerations from questrade-api-enumerations NPM package (included)

  const testCurrency = async (done: any) => {
    console.log(
      '/** Specifies all supported currency codes. */\n',
      Enumerations.Currency
    );
    return done;
  };
  const testListingExchange = async (done: any) => {
    console.log(
      '/** Specifies all supported listing exchanges. */\n',
      Enumerations.ListingExchange
    );
    return done;
  };
  const testAccountType = async (done: any) => {
    console.log(
      '/** Specifies all supported user account types. */\n',
      Enumerations.AccountType
    );
    return done;
  };
  const testClientAccountType = async (done: any) => {
    console.log(
      '/** Specifies all supported account client types. */\n',
      Enumerations.ClientAccountType
    );
    return done;
  };
  const testAccountStatus = async (done: any) => {
    console.log(
      '/** Specifies all supported account status values. */\n',
      Enumerations.AccountStatus
    );
    return done;
  };
  const testTickType = async (done: any) => {
    console.log(
      '/** Specifies all supported market data tick types. */\n',
      Enumerations.TickType
    );
    return done;
  };
  const testOptionType = async (done: any) => {
    console.log(
      '/** Specifies all supported option types. */\n',
      Enumerations.OptionType
    );
    return done;
  };
  const testOptionDurationType = async (done: any) => {
    console.log(
      '/** Specifies all supported option duration types. */\n',
      Enumerations.OptionDurationType
    );
    return done;
  };
  const testOptionExerciseType = async (done: any) => {
    console.log(
      '/** Specifies all supported option exercise types. */\n',
      Enumerations.OptionExerciseType
    );
    return done;
  };
  const testSecurityType = async (done: any) => {
    console.log(
      '/** Specifies all supported security types. */\n',
      Enumerations.SecurityType
    );
    return done;
  };
  const testOrderStateFilterType = async (done: any) => {
    console.log(
      '/** Specifies all supported order state filter types. */\n',
      Enumerations.OrderStateFilterType
    );
    return done;
  };
  const testOrderAction = async (done: any) => {
    console.log(
      '/** Specifies all supported order side values. */\n',
      Enumerations.OrderAction
    );
    return done;
  };
  const testOrderSide = async (done: any) => {
    console.log(
      '/** Specifies all supported client order side values. */\n',
      Enumerations.OrderSide
    );
    return done;
  };
  const testOrderType = async (done: any) => {
    console.log(
      '/** Specifies all supported order types. */\n',
      Enumerations.OrderType
    );
    return done;
  };
  const testOrderTimeInForce = async (done: any) => {
    console.log(
      '/** Specifies all supported order Time-In-Force instructions. */\n',
      Enumerations.OrderTimeInForce
    );
    return done;
  };
  const testOrderState = async (done: any) => {
    console.log(
      '/** Specifies all supported order states. */\n',
      Enumerations.OrderState
    );
    return done;
  };
  const testHistoricalDataGranularity = async (done: any) => {
    console.log(
      '/** Specifies all supported order execution status values. */\n',
      Enumerations.HistoricalDataGranularity
    );
    return done;
  };
  const testOrderClass = async (done: any) => {
    console.log(
      '/** Specifies all supported bracket order components. */\n',
      Enumerations.OrderClass
    );
    return done;
  };
  const testStrategyTypes = async (done: any) => {
    console.log(
      '/** Supported types of strategies for multi-leg strategy orders. */\n',
      Enumerations.StrategyTypes
    );
    return done;
  };
  return {
    testCurrency,
    testListingExchange,
    testAccountType,
    testClientAccountType,
    testAccountStatus,
    testTickType,
    testOptionType,
    testOptionDurationType,
    testOptionExerciseType,
    testSecurityType,
    testOrderStateFilterType,
    testOrderAction,
    testOrderSide,
    testOrderType,
    testOrderTimeInForce,
    testOrderState,
    testHistoricalDataGranularity,
    testOrderClass,
    testStrategyTypes,
  };
};
//     // return private credentials
//     console.log(credentials);
//   } catch (error) {
//     // manage your errors here if needed
//     console.error(error.message);
//   }
//   done();
// };
// // })(doneTesting);

// async function runExamples(
//   isTesting: boolean = false,
//   refreshToken: string,
//   doneTesting: any
// ) {
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
//   // const refreshToken = 'G0DpF1a5ANONc1kgkC5aOuoMUMrW0X0l0'; // myrefresh token have been revoked prior to publishing
//   // using async Immediately Invoked Function Expressions to avoid using then().catch()

//   await testExamples(
//     refreshToken,
//     exampleStartTime,
//     exampleEndTime,
//     exampleOptionExpiryDate,
//     exampleOptionNumericID,
//     exampleStockNumericID,
//     exampleStockStringID,
//     doneTesting
//   );

//   return;
// }

// export const testAll = async (token: string, doneTesting: any) => {
//   return runExamples(true, token, doneTesting);
// };

// export const partialTests = (token: string, doneTesting: any) => {
//   return { token, doneTesting };
// };
