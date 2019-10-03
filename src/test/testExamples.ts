import { day, redeemToken } from '..';
export const testExamples = async (
  yourRefreshToken: string,
  startTime: string,
  endTime: string,
  optionExpiryDate: string,
  optionNumericID: number,
  stockNumericID: number,
  stockStringID: string
) => {
  (async () => {
    // Using console.log (log) to output the
    const log = console.log;
    // always put your code in a try catch block
    try {
      // Create a questrade-ts Api (qtApi) Object redeeming your Refresh Token
      const { qtApi: qt, credentials } = await redeemToken(yourRefreshToken);

      // list of all the differents api calls managed by this package

      log(await qt.get.accounts.activities(startTime)(endTime));
      log(await qt.get.accounts.orders(startTime)(endTime)('All'));
      log(await qt.get.accounts.executions(startTime)(endTime));
      log(await qt.get.accounts.balances());
      log(await qt.get.accounts.positions());
      log(await qt.get.accounts.allAccounts());
      log(await qt.get.accounts.time());
      log(
        await qt.get.markets.candlesById(startTime)(endTime)('OneDay')(
          stockNumericID
        )
      );
      log('NO IMPLEMENTATION AT HIS TIME');
      log(
        await qt.get.markets.quotes.options({
          underlyingId: stockNumericID,
          expiryDate: optionExpiryDate,
        })
      );
      log(await qt.get.markets.quotes.options.byIds([optionNumericID]));
      log(await qt.get.markets.quotes.byIds([stockNumericID]));
      log(await qt.get.markets.allMarkets());
      log(await qt.get.symbols.optionsById(stockNumericID));
      log(await qt.get.symbols.search(stockStringID));
      log((await qt.get.symbols.search(stockStringID)).count);
      log(await qt.get.symbols.search.count(stockStringID));
      log(await qt.get.symbols.searchAll(stockStringID));
      log(await qt.get.symbols.byIds([stockNumericID]));

      // return private credentials
      log(credentials);
    } catch (error) {
      // manage your errors here if needed
      console.error(error.message);
    }
  })();
};
async function runExamples(
  isTesting: boolean = false /* ,refreshToken: string */
) {
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
  const refreshToken = 'pNBgdR9H1M8O1rKH0wCrQWHHAU0Aos7s0'; // myrefresh token have been revoked prior to publishing
  // using async Immediately Invoked Function Expressions to avoid using then().catch()

  await testExamples(
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

export const testAll = async (/* token: string */) => {
  return runExamples(true /* ,token */);
};

export const partialTests = (token: string) => {
  return { token };
};

testAll();
