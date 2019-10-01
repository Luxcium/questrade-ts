# Questrade TS

**This [NPM Package](https://www.npmjs.com/package/questrade-ts) is an unofficial [Questrade API](https://www.questrade.com/api/documentation/getting-started) wrapper for [NodeJS](https://nodejs.org/en/docs/) with full [TypeScript](https://www.typescriptlang.org/docs/home.html) support.**

[![Build Status](https://dev.azure.com/luxcium/Questrade-ts/_apis/build/status/Luxcium.questrade-ts?branchName=master)](https://dev.azure.com/luxcium/Questrade-ts/_build/latest?definitionId=1&branchName=master)
[![Travis (.org)](https://img.shields.io/travis/Luxcium/questrade-ts?label=Build&logo=travis&logoColor=white)](https://travis-ci.com/Luxcium/questrade-ts)
[![Known Vulnerabilities](https://snyk.io/test/github/luxcium/questrade-ts/badge.svg)](https://snyk.io/test/github/luxcium/questrade-ts)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8af26b0bfa624c66b266cd83d4eb52b4)](https://www.codacy.com/manual/Luxcium/questrade-ts?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Luxcium/questrade-ts&amp;utm_campaign=Badge_Grade)
[![npm](https://img.shields.io/npm/dt/questrade-ts.svg)](https://www.npmjs.com/package/questrade-ts)
[![NPM](https://img.shields.io/npm/l/questrade-ts.svg)](https://raw.githubusercontent.com/Luxcium/questrade-ts/master/LICENSE)


[![GitHub contributors](https://img.shields.io/github/contributors-anon/luxcium/questrade-ts.svg?style=social)](https://github.com/luxcium/questrade-ts/graphs/contributors)
[![GitHub watchers](https://img.shields.io/github/watchers/luxcium/questrade-ts.svg?style=social)](https://github.com/luxcium/questrade-ts/watchers)
[![GitHub forks](https://img.shields.io/github/forks/luxcium/questrade-ts.svg?style=social)](https://github.com/luxcium/questrade-ts/network/members)
[![GitHub stars](https://img.shields.io/github/stars/luxcium/questrade-ts.svg?style=social)](https://github.com/luxcium/questrade-ts/stargazers)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/luxcium/questrade-ts.svg?style=social)](https://github.com/luxcium/questrade-ts/pulls)
[![GitHub issues](https://img.shields.io/github/issues/luxcium/questrade-ts.svg?style=social)](https://github.com/luxcium/questrade-ts/issues)

## Getting Started

This NodeJS wrapper is an easy way to use the [Questrade API](www.questrade.com/api/documentation/getting-started) immediately. It give full TypeScript support.

Simply start by installing this questrade-ts library:

```bash
npm install --save-exact questrade-ts
```

or

```bash
npm install --save-exact questrade-ts@latest
```

### Currently, this API does not have any test suites installed and is therefore not to be considered ready for production

[![Coverage Status](https://coveralls.io/repos/github/luxcium/questrade-ts/badge.svg?style=flat&branch=master)](https://coveralls.io/github/luxcium/questrade-ts?branch=master) [![CII Best Practices Summary](https://img.shields.io/cii/summary/3222?label=Best%20Practices)](https://bestpractices.coreinfrastructure.org/en/projects/3222)

Until version 1.0 breaking change occur at minor version change 0.X.0, Please make sure to open a [GitHub issues](https://github.com/luxcium/questrade-ts/issues) for anything problematic to help us during the development phase of this project. use the `--save-exact` flag until the version 1.0.x Using the caret (circumflex accent`U+005E`) ^0.X.Y on a version stating with 0.x should not upgrade to folowing minor version but to have full control make sure you unsing that flag or `-E` and then to upgrade to a new latest version use `@latest` i.e. `npm i --save-exact questrade-ts@latest`. alternatively you may use `--no-save` to prevents saving to dependencies at all.

**To obtain or provide feedback (as bug reports or enhancements):** [visit our GitHub Issue page](https://github.com/Luxcium/questrade-ts/issues)
**To contribute to this project:** [visit the GitHub Repo page of the project](https://github.com/Luxcium/questrade-ts)

### Features

  - Token management
  - Easy to use API calls
  - Auto-select primary account

You will then need to get an [API key](https://login.questrade.com/APIAccess/userapps.aspx).

After that, it is really simple to use:

## Examples
**TL;DR**
```TypeScript
import { redeemToken } from 'questrade-ts';

const yourRefreshToken = 'RocgyhkqWp-USE-YOUR-OWN-TOKEN-M3BSDjd0';

const { qtApi: qt, credentials } = await redeemToken(yourRefreshToken);
```

## ACCOUNTS CALLS
 get accounts/:id/activities -> `qt.get.accounts.activities`
```TypeScript
      // GET ACCOUNTS/:ID/ACTIVITIES
      log(await qt.get.accounts.activities(startTime)(endTime));
```

get accounts/:id/orders -> `qt.get.accounts.orders`
```TypeScript

      // GET ACCOUNTS/:ID/ORDERS
      log(await qt.get.accounts.orders(startTime)(endTime)('All'));
```

 get accounts/:id/executions -> `qt.get.accounts.executions`
```TypeScript
      // GET ACCOUNTS/:ID/EXECUTIONS
      log(await qt.get.accounts.executions(startTime)(endTime));
```

 get accounts/:id/balances -> `qt.get.accounts.balances`
```TypeScript
      // GET ACCOUNTS/:ID/BALANCES
      log(await qt.get.accounts.balances());
```

 get accounts/:id/positions -> `qt.get.accounts.positions`
```TypeScript
      // GET ACCOUNTS/:ID/POSITIONS
      log(await qt.get.accounts.positions());
```

 get accounts -> `qt.get.accounts.allAccounts`
```TypeScript
      // GET ACCOUNTS
      log(await qt.get.accounts.allAccounts());
```

 get time -> `qt.get.accounts.time`
```TypeScript
      // GET TIME
      log(await qt.get.accounts.time());
```

## MARKET CALLS

### CANDLES

get markets/candles/:id -> `qt.get.markets.candlesById`


```TypeScript
      // GET MARKETS/CANDLES/:ID
      log(
        await qt.get.markets.candlesById(startTime)(endTime)('OneDay')(
          stockNumericID
        )
      );
```

### QUOTES

get markets/quotes/strategies -> `NO IMPLEMENTATION AT HIS TIME`
```TypeScript
      // GET MARKETS/QUOTES/STRATEGIES
      log('NO IMPLEMENTATION AT HIS TIME');
```

get markets/quotes/options (filter) -> `qt.get.markets.quotes.options`
```TypeScript
      // GET MARKETS/QUOTES/OPTIONS (filter)
      log(
        await qt.get.markets.quotes.options({
          underlyingId: stockNumericID,
          expiryDate: optionExpiryDate,
        })
      );
```

Filters :
```TypeScript
      /*
      underlyingId: number; [REQUIRED]
      expiryDate: string; [REQUIRED]
      optionType?: string | null; [OPTIONAL]
      minstrikePrice?: number | null; [OPTIONAL]
      maxstrikePrice?: number | null; [OPTIONAL]
    */
```

get markets/quotes/options (byids optionsids array) -> `qt.get.markets.quotes.options.byIds`
```TypeScript
      // GET MARKETS/QUOTES/OPTIONS (byIds optionsIds array)
      log(await qt.get.markets.quotes.options.byIds([optionNumericID]));
```

get markets/quotes/:id -> `qt.get.markets.quotes.byIds`
```TypeScript
      // GET MARKETS/QUOTES/:ID
      log(await qt.get.markets.quotes.byIds([stockNumericID]));
```

### LIST ALL MARKEST

get markets -> `qt.get.markets.allMarkets`

```TypeScript
      // GET MARKETS
      log(await qt.get.markets.allMarkets());
```

### SYMBOLS


```TypeScript
      // GET SYMBOLS/:ID/OPTIONS (by single stockId)
      log(await qt.get.symbols.optionsById(stockNumericID));
```

get symbols/search (return fisrt result or offseted result) -> `qt.get.symbols.search`

```TypeScript
      // GET SYMBOLS/SEARCH (return fisrt result or offseted result)
      log(await qt.get.symbols.search(stockStringID));
```

get symbols/search (count of results or offseted results) -> `(await qt.get.symbols.search(stockStringID)).count`

```TypeScript
      // GET SYMBOLS/SEARCH (count of results or offseted results)
      log((await qt.get.symbols.search(stockStringID)).count);
```

get symbols/search (count the number of results)  -> `qt.get.symbols.search.count`

```TypeScript
      // GET SYMBOLS/SEARCH (count the number of results)
      log(await qt.get.symbols.search.count(stockStringID));
      /* OR */
      log(await qt.get.symbols.searchCount(stockStringID));
```

get symbols/search (return all results can profide an offset as second) -> `qt.get.symbols.searchAll`

```TypeScript
      // GET SYMBOLS/SEARCH (return ALL results can profide an offset as second)
      log(await qt.get.symbols.searchAll(stockStringID));
```

get symbols/:id (stockids array) -> `qt.get.symbols.byIds`

```TypeScript
      // GET SYMBOLS/:ID (stockIds array)
      log(await qt.get.symbols.byIds([stockNumericID]));
```

**you can import `testExamples` to test the examples above**

```typescript
import { testExamples } from 'questrade-ts';
testExamples(
  refreshToken,
  exampleStartTime,
  exampleEndTime,
  exampleOptionExpiryDate,
  exampleOptionNumericID,
  exampleStockNumericID,
  exampleStockStringID
);
```

### Examples on this page assume theses values

```typescript
import { day } from 'questrade-ts';
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
const refreshToken = 'RocgyhkqWp-USE-YOUR-OWN-TOKEN-M3BSDjd0';
```

### IMPORTANT: to reproduce the examples
all example are run inside an async IIFE within a try/catch block in the section marked
`/* !!! HERE !!! */`

```typescript
// using async Immediately Invoked Function Expressions to avoid using then().catch()
;(async () => {
    // Using console.log (log) to output the
    const log = console.log;
    // always put your code in a try catch block
    try {
      // Create a questrade-ts Api (qtApi) Object redeeming your Refresh Token
      const { qtApi: qt, credentials } = await redeemToken(yourRefreshToken);

      // !!! list of all the differents api calls managed by this package

          /* !!! HERE !!! */

      // return private credentials
      log(credentials);
    } catch (error) {
      // manage your errors here if needed
      console.error(error.message);
    }
  })();
```

## Enumerations

 Enumerations from `questrade-api-enumerations` NPM package (included)
 Including with `import { Enumerations } from 'questrade-ts';` or
`import { qtEnumerations } from 'questrade-api-enumerations';`

```TypeScript
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
```

## Security and Token management

Questrade's security token system requires that you save the latest refresh token that it vends you. After you create one in the user apps page, our library needs to save a key somewhere onto disk. By default, this wrapper create a folder for these keys in `./keys` at your working directory,but you can change the directory location or load from a text file (with the key as its contents).


## Switching Accounts

By default, if you instantiate the `Questrade` class without passing in an account ID to options, we will try to find and select the primary account (by fetching a list of all the accounts). If you want to change the account, simply do:

```typescript
// Switch to account 12345678 -- All future calls will use this 8 digits account.
qt.account = '12345678';
// Must be one of your valid account number
```

## Contributions

All contributions are welcome!

### MIT LICENSE

Copyright (c) 2019 Benjamin Vincent Kasapoglu (Luxcium)

Copyright (c) 2016-2019 Leander Lee

Permission is hereby granted, free of charge, to all person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ALL KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ALL CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Questrade does not maintain this unofficial SDK

Refer to [Questrade's Documentation](https://www.questrade.com/api/documentation/) to get help. Please always open a [questrade-ts GitHub issue](https://github.com/luxcium/questrade-ts/issues) for anything you feel doesn't match the way it should be working when referring to Questrade docs.

### Originaly based on the work of

[Leander Lee](https://github.com/leanderlee/questrade)
