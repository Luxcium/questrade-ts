# Questrade TS

**This [NPM Package](https://www.npmjs.com/package/questrade-ts) is an unofficial [Questrade API](https://www.questrade.com/api/documentation/getting-started) wrapper for [NodeJS](https://nodejs.org/en/docs/) with full [TypeScript](https://www.typescriptlang.org/docs/home.html) support.** <br />

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

## Contributions
### All contributions are welcome!
  - **To contribute to this project:** [visit the GitHub Repo page of the project](https://github.com/Luxcium/questrade-ts)
  - **To obtain or provide feedback (as bug reports or enhancements):** [visit our GitHub Issue page](https://github.com/Luxcium/questrade-ts/issues)
  - **Please make sure to open a [GitHub issues](https://github.com/luxcium/questrade-ts/issues) for anything you feel is not exactly as described on this page or [Questrade Page](https://www.questrade.com/api/documentation/getting-started).**




## Examples

You will need to get an [API key](https://login.questrade.com/APIAccess/userapps.aspx).

After that, it is really simple to use:

### TL;DR
```TypeScript
import { redeemToken } from 'questrade-ts';

const yourRefreshToken = 'RocgyhkqWp-USE-YOUR-OWN-TOKEN-M3BSDjd0';

// inside of an async function or async IIFE
(async () => {
const log = console.log

const { qtApi: qt, credentials } = await redeemToken(yourRefreshToken);

// Validate the server time as your hello world for this package
const serverTime = qt.serverTime
log(serverTime)

// inside an async function use await qt.get.<... some methode>
const balances = await qt.get.account.balances()

log(credentials)

// you can use a try/catch block to manage error instead:
})().catch(error=>console.error(error.message));
```

```TypeScript

const qtApi: IQuestradeApi = {
    currentAccount,
    myBalances,
    serverTime,
    get: {
      account: {
        activities,
        allAccounts,
        allOrders,
        balances,
        executions,
        orders,
        ordersByIds,
        positions,
      },
      market: {
        allMarkets,
        candlesByStockId,
      },
      quotes: {
        byStockIds,
        byStrategies,
        optionsQuotes: {
          byOptionsIds,
          fromFilter,
        },
      },
      symbols: {
        optionChains: {
          byStockId,
        },
        byStockIds,
      },
      search: {
        allStocks,
        stock,
        countResults,
      },
    },
  };


interface IQuestradeApi {
  currentAccount: string;
  myBalances: IMyBalances;
  serverTime: Date;
  get: {
    account: {
      allAccounts(): Promise<IAccount[]>;

      balances(): Promise<IBalances>;

      executions(startTime: string): (endDate: string) => Promise<IExecution[]>;

      orders(
        stateFilter?: string | undefined
      ): (startDate: string) => (endDate: string) => Promise<IOrder[]>;

      allOrders(startTime: string): (endDate: string) => Promise<IOrder[]>;

      ordersByIds(orderId: number[]): Promise<IOrder[]>;

      positions(): Promise<IPosition[]>;

      activities(
        startTime: string
      ): (endTime: string) => Promise<IAccountActivity[]>;
    };
    market: {
      allMarkets(): Promise<IMarket[]>;
      candlesByStockId(
        startDate: string
      ): (
        endDate: string
      ) => (
        interval?: string | undefined
      ) => (symbolID: number) => Promise<ICandle[]>;
    };
    quotes: {
      optionsQuotes: {
        fromFilter(filters: OptionsFilters): Promise<IOptionsQuotes>;
        byOptionsIds(optionIds: number[]): Promise<IOptionsQuotes>;
      };
      byStrategies(
        strategyVariantRequestData: StrategyVariantRequest
      ): Promise<IStrategiesQuotes>;

      byStockIds(ids: number[]): Promise<IQuote[]>;
    };
    search: {
      stock(
        prefix: string,
        offset?: number | undefined
      ): Promise<ISymbolSearchResult>;
      allStocks(
        prefix: string,
        offset?: number | undefined
      ): Promise<ISymbolSearchResult[]>;
      countResults(prefix: string): Promise<number>;
    };
    symbols: {
      optionChains: {
        byStockId(stockId: number): Promise<IOptionChain[]>;
      };
      byStockIds(stockIds: number[]): Promise<ISymbol[]>;
    };
  };
}
```

### Enumerations
[Questrade Enumerations](https://www.questrade.com/api/documentation/rest-operations/enumerations)

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



## Features

  - Token management
  - Easy to use API calls
  - Auto-select primary account

### Security and Token management

Questrade's security token system requires that you save the latest refresh token that it vends you. After you create one in the user apps page, our library needs to save a key somewhere onto disk. By default, this wrapper create a folder for these keys in `./keys` at your working directory,but you can change the directory location or load from a text file (with the key as its contents).

### Switching Accounts

By default, when you instantiate the `qtApi`  it will try to find and select the primary account (by fetching a list of all the accounts). If you want to change the account, simply do:

```typescript
// Switch to account 12345678 -- All future calls will use this 8 digits account.
qt.account = '12345678';
// Must be one of the valid account number for the
// user on behalf of which the API client is authorized
```


### Currently, this API does not have full coverage of his test suites installed
#### No test suite is curently fully implemented but all the examples on this page have been tested manually and did not generated whichever errors at all.

[![Coverage Status](https://coveralls.io/repos/github/Luxcium/questrade-ts/badge.svg?branch=version/feature-axio-mock)](https://coveralls.io/github/Luxcium/questrade-ts?branch=version/feature-axio-mock) [![CII Best Practices Summary](https://img.shields.io/cii/summary/3222?label=Best%20Practices)](https://bestpractices.coreinfrastructure.org/en/projects/3222)

#### Manual testing coverage
![Manual testing coverage](https://raw.githubusercontent.com/Luxcium/questrade-ts/next/version/images/manual-testing.png)



## No-any

This project count that forbiden keyword only twice, once in this title above, the other one is part of the tslint rule name forbiding the keword in the project.

![Forbiden Keyword](https://raw.githubusercontent.com/Luxcium/questrade-ts/master/images/forbiden-keyword.png)

## Always use semicolons when using this package or using this code in other projects
>Why? ([airbnb/javascript](https://github.com/airbnb/javascript#semicolons)):
>When JavaScript encounters a line break without a semicolon, it uses a set of rules called [Automatic Semicolon Insertion](https://tc39.es/ecma262/#sec-automatic-semicolon-insertion) to determine whether or not it should regard that line break as the end of a statement, and (as the name implies) place a semicolon into your code before the line break if it thinks so. ASI contains a few eccentric behaviors, though, and your code will break if JavaScript misinterprets your line break. These rules will become more complicated as new features become a part of JavaScript. Explicitly terminating your statements and configuring your linter to catch missing semicolons will help prevent you from encountering issues.




## Questrade does not maintain this unofficial SDK

Refer to [Questrade's Documentation](https://www.questrade.com/api/documentation/) to get help. Please always open a [questrade-ts GitHub issue](https://github.com/luxcium/questrade-ts/issues) for anything you feel doesn't match the way it should be working when referring to Questrade docs.


## MIT LICENSE

Copyright (c) 2019 Benjamin Vincent Kasapoglu (Luxcium)

Copyright (c) 2016-2019 Leander Lee

Permission is hereby granted, free of charge, to all person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ALL KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ALL CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Originaly based on the work of

[Leander Lee](https://github.com/leanderlee/questrade)
