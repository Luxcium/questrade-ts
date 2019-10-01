// TypeScript/JavaScript
import { day, Enumerations, redeemToken } from '.';

const testing = false;

export const testExamples = (
  yourRefreshToken: string,
  startTime: string,
  endTime: string,
  optionExpiryDate: string,
  optionNumericID: number,
  stockNumericID: number,
  stockStringID: string
) =>
  (async () => {
    // Using console.log (log) to output the
    const log = console.log;
    // always put your code in a try catch block
    try {
      // Create a questrade-ts Api (qtApi) Object redeeming your Refresh Token
      const { qtApi: qt, credentials } = await redeemToken(yourRefreshToken);

      // list of all the differents api calls managed by this package

      // ACCOUNTS CALLS
      // GET ACCOUNTS/:ID/ACTIVITIES
      log(await qt.get.accounts.activities(startTime)(endTime));
      // GET ACCOUNTS/:ID/ORDERS
      log(await qt.get.accounts.orders(startTime)(endTime)('All'));
      // GET ACCOUNTS/:ID/EXECUTIONS
      log(await qt.get.accounts.executions(startTime)(endTime));
      // GET ACCOUNTS/:ID/BALANCES
      log(await qt.get.accounts.balances());
      // GET ACCOUNTS/:ID/POSITIONS
      log(await qt.get.accounts.positions());
      // GET ACCOUNTS
      log(await qt.get.accounts.allAccounts());
      // GET TIME
      log(await qt.get.accounts.time());

      // MARKET CALLS
      // GET MARKETS/CANDLES/:ID
      log(
        await qt.get.markets.candlesById(startTime)(endTime)('OneDay')(
          stockNumericID
        )
      );
      // GET MARKETS/QUOTES/STRATEGIES
      log('NO IMPLEMENTATION AT HIS TIME');

      // GET MARKETS/QUOTES/OPTIONS (filter)
      log(
        await qt.get.markets.quotes.options({
          underlyingId: stockNumericID,
          expiryDate: optionExpiryDate,
        })
      );
      /*
      underlyingId: number; [REQUIRED]
      expiryDate: string; [REQUIRED]
      optionType?: string | null; [OPTIONAL]
      minstrikePrice?: number | null; [OPTIONAL]
      maxstrikePrice?: number | null; [OPTIONAL]
    */

      // GET MARKETS/QUOTES/OPTIONS (byIds optionsIds array)
      log(await qt.get.markets.quotes.options.byIds([optionNumericID]));
      // GET MARKETS/QUOTES/:ID
      log(await qt.get.markets.quotes.byIds([stockNumericID]));
      // GET MARKETS
      log(await qt.get.markets.allMarkets());
      // GET SYMBOLS/:ID/OPTIONS (by single stockId)
      log(await qt.get.symbols.optionsById(stockNumericID));
      // GET SYMBOLS/SEARCH (return fisrt result or offseted result)
      log(await qt.get.symbols.search(stockStringID));
      // GET SYMBOLS/SEARCH (count of results or offseted results)
      log((await qt.get.symbols.search(stockStringID)).count);
      // GET SYMBOLS/SEARCH (count the number of results)
      log(await qt.get.symbols.search.count(stockStringID));
      /* OR */
      log(await qt.get.symbols.searchCount(stockStringID));
      // GET SYMBOLS/SEARCH (return ALL results can profide an offset as second)
      log(await qt.get.symbols.searchAll(stockStringID));

      // GET SYMBOLS/:ID (stockIds array)
      log(await qt.get.symbols.byIds([stockNumericID]));
      // Enumerations from questrade-api-enumerations NPM package (included)
      /** Specifies all supported currency codes. */
      console.dir(Enumerations.Currency);
      /** Specifies all supported listing exchanges. */
      console.dir(Enumerations.ListingExchange);
      /** Specifies all supported user account types. */
      console.dir(Enumerations.AccountType);
      /** Specifies all supported account client types. */
      console.dir(Enumerations.ClientAccountType);
      /** Specifies all supported account status values. */
      console.dir(Enumerations.AccountStatus);
      /** Specifies all supported market data tick types. */
      console.dir(Enumerations.TickType);
      /** Specifies all supported option types. */
      console.dir(Enumerations.OptionType);
      /** Specifies all supported option duration types. */
      console.dir(Enumerations.OptionDurationType);
      /** Specifies all supported option exercise types. */
      console.dir(Enumerations.OptionExerciseType);
      /** Specifies all supported security types. */
      console.dir(Enumerations.SecurityType);
      /** Specifies all supported order state filter types. */
      console.dir(Enumerations.OrderStateFilterType);
      /** Specifies all supported order side values. */
      console.dir(Enumerations.OrderAction);
      /** Specifies all supported client order side values. */
      console.dir(Enumerations.OrderSide);
      /** Specifies all supported order types. */
      console.dir(Enumerations.OrderType);
      /** Specifies all supported order Time-In-Force instructions. */
      console.dir(Enumerations.OrderTimeInForce);
      /** Specifies all supported order states. */
      console.dir(Enumerations.OrderState);
      /** Specifies all supported order execution status values. */
      console.dir(Enumerations.HistoricalDataGranularity);
      /** Specifies all supported bracket order components. */
      console.dir(Enumerations.OrderClass);
      /** Supported types of strategies for multi-leg strategy orders. */
      console.dir(Enumerations.StrategyTypes);

      // return private credentials
      log(credentials);
    } catch (error) {
      // manage your errors here if needed
      console.error(error.message);
    }
  })();

function runExamples(isTesting: boolean = false) {
  if (!isTesting) return;

  // for easier reading of the examples
  const toISOStringDate = (dateTime: number | string) =>
    new Date(dateTime).toISOString();
  // for easier reading of the examples

  // convert days to miliseconds for calculations in date
  const tenDays = day(10);

  // to have a start and end dateTime to use in examples
  const timeNow = Date.now();
  const start = timeNow - tenDays;
  const end = timeNow;
  const exampleStartTime = toISOStringDate(start);
  const exampleEndTime = toISOStringDate(end);

  const exampleOptionExpiryDate: string = '2019-10-04T05:37:30.053Z';
  const exampleOptionNumericID: number = 27003348;
  const exampleStockNumericID: number = 8049; // 'aapl'
  const exampleStockStringID: string = 'aapl'; // 8049

  // you do not have to put the token in plain text you should import it from elsewhere
  // const refreshToken = 'YOUR-TOKEN-HERE_jKi1YCwCjAMJFugwD4A8cgb0';
  const refreshToken = 'G0DpF1a5ANONc1kgkC5aOuoMUMrW0X0l0';
  // using async Immediately Invoked Function Expressions to avoid using then().catch()

  testExamples(
    refreshToken,
    exampleStartTime,
    exampleEndTime,
    exampleOptionExpiryDate,
    exampleOptionNumericID,
    exampleStockNumericID,
    exampleStockStringID
  );

  return;
}

runExamples(testing);
