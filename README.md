# Questrade TS

[![Coverage Status](https://coveralls.io/repos/github/Luxcium/questrade-ts/badge.svg?branch=master&x=0)](https://coveralls.io/github/Luxcium/questrade-ts?branch=master) [![Travis (.com) Build Status](https://img.shields.io/travis/com/luxcium/questrade-ts/master?label=Build&logo=travis&logoColor=white)](https://travis-ci.com/Luxcium/questrade-ts) [![Build Status](https://dev.azure.com/luxcium/Questrade-ts/_apis/build/status/Luxcium.questrade-ts?branchName=master)](https://dev.azure.com/luxcium/Questrade-ts/_build/latest?definitionId=1&branchName=master) [![Known Vulnerabilities](https://snyk.io/test/github/luxcium/questrade-ts/badge.svg)](https://snyk.io/test/github/luxcium/questrade-ts) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/8af26b0bfa624c66b266cd83d4eb52b4)](https://www.codacy.com/manual/Luxcium/questrade-ts?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Luxcium/questrade-ts&amp;utm_campaign=Badge_Grade) [![CII Best Practices Summary](https://img.shields.io/cii/summary/3222?label=Best%20Practices)](https://bestpractices.coreinfrastructure.org/en/projects/3222)

[![GitHub contributors](https://img.shields.io/github/contributors-anon/luxcium/questrade-ts.svg?style=social)](https://github.com/luxcium/questrade-ts/graphs/contributors)
[![GitHub watchers](https://img.shields.io/github/watchers/luxcium/questrade-ts.svg?style=social)](https://github.com/luxcium/questrade-ts/watchers)
[![GitHub forks](https://img.shields.io/github/forks/luxcium/questrade-ts.svg?style=social)](https://github.com/luxcium/questrade-ts/network/members)
[![GitHub stars](https://img.shields.io/github/stars/luxcium/questrade-ts.svg?style=social)](https://github.com/luxcium/questrade-ts/stargazers)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/luxcium/questrade-ts.svg?style=social)](https://github.com/luxcium/questrade-ts/pulls)
[![GitHub issues](https://img.shields.io/github/issues/luxcium/questrade-ts.svg?style=social)](https://github.com/luxcium/questrade-ts/issues)

## Getting Started

This [NPM Package](https://www.npmjs.com/package/questrade-ts) is an unofficial [Questrade API](https://www.questrade.com/api/documentation/getting-started) wrapper for [NodeJS](https://nodejs.org/en/docs/) with full [TypeScript](https://www.typescriptlang.org/docs/home.html) support.

This NodeJS wrapper is an easy way to use the [Questrade API](www.questrade.com/api/documentation/getting-started) immediately. It commes with full TypeScript support.

Simply start by installing this questrade-ts library:

This Package conforms to [Semantic Versioning Specification (SemVer)](https://semver.org/#semantic-versioning-200)

```bash
npm i questrade-ts@latest
```

or

```bash
yarn add questrade-ts@latest
```

You will need to get an [API key](https://login.questrade.com/APIAccess/userapps.aspx).

After that, it is really simple to use:

### TL;DR

```TypeScript

  /* 'require' call may be converted to an import. */
  // import { redeemToken } from 'questrade-ts'
  const { redeemToken } = require('questrade-ts');

  /* You will need to create your own API key: */
  /* https://login.questrade.com/APIAccess/UserApps.aspx */
  const yourRefreshToken = 'RocgqWp_USE_YOUR_OWN_TOKEN_M3BCd0';

  /* inside of an async function or async IIFE */
  (async () => {
    const log = console.log

    const { qtApi, credentials } = await redeemToken(yourRefreshToken);

    /* Validate the server time as your hello world for this package */
    const serverTime = qtApi.serverTime
    log(serverTime)

    /* inside an async function use await qt.get.<... some properties or methods> */
    const myBalances = await qtApi.myBalances();
    const balances = await qtApi.account.getBalances();

    log(myBalances);
    log(balances);

    log(credentials);

    /* you can use a try/catch block to manage error instead: */
  })().catch(error=>console.error(error.message));
```

### Structure

```TypeScript

  const qtApi: IQuestradeApi = {
    currentAccount,
    myBalances,
    serverTime,
    account: {
      getActivities,
      getAllAccounts,
      getAllOrders,
      getBalances,
      getExecutions,
      getOrders,
      getOrdersByIds,
      getPositions,
    },
    market: {
      getAllMarkets,
      gtCandlesByStockId,
    },
    getQuotes: {
      byStockIds,
      byStrategies,
    },
    getOptionsQuotes: {
      byOptionsIds,
      fromFilter,
    },
    getOptionChains: {
      byStockId,
    },
    getSymbols: {
      byStockIds,
    },
    search: {
      stock,
      allStocks,
      countResults,
    },
  };
```

### IQuestradeApi describe in TypeScript terms what the `questrade-ts` api look like

```TypeScript
  interface IQuestradeApi {
    currentAccount: string;
    myBalances: IQtApiMyBalances;
    serverTime: Date | 'ERROR';
    account: IQtApiAccount;
    market: IQtApiMarket;
    getQuotes: IQtApiQuotes;
    getOptionsQuotes: IQtApiOptionsQuotes;
    getSymbols: IQtApiSymbols;
    getOptionChains: IQtApiOptionChains;
    search: IQtApiSearch;
  }
```

### Methods signatures and parameters

```TypeScript
  getActivities(startTime: string) =>
    (endTime: string) => Promise<IAccountActivity[]>;

  getAllAccounts() => Promise<IAccount[]>;

  getBalances() => Promise<IBalances>;

  getExecutions(startTime: string) => (endTime: string) => Promise<IExecution[]>;

  /* type DateRange<R> = (startTime: string) => (endTime: string) => R */
  getOrders(stateFilter?: string | undefined) => DateRange<Promise<IOrder[]>>;

  getOrdersByIds(orderId: number[]) => Promise<IOrder[]>;

  getPositions() => Promise<IPosition[]>;

  getServerTime() => Promise<Date>;

  getAllMarkets() => Promise<IMarket[]>;

  /* type DateRange<R> = (startTime: string) => (endTime: string) => R */
  getCandlesByStockId(symbolID: number) =>
    (interval?: string | undefined) => DateRange<Promise<ICandle[]>>;

  byStockIds(ids: number[]) => Promise<IQuote[]>;

  byStrategies(strategyVariantRequestData: StrategyVariantRequest) =>
    Promise<IStrategiesQuotes>;

  fromFilter(filters: OptionsFilters) => Promise<IOptionsQuotes>;

  byOptionsIds(optionIds: number[]) => Promise<IOptionsQuotes>;

  byStockIds(stockIds: number[]) => Promise<ISymbol[]>;

  byStockId(stockId: number) => Promise<IOptionChain[]>;

  stock(prefix: string, offset?: number | undefined) =>
    Promise<ISymbolSearchResult>;

  allStocks(prefix: string, offset?: number | undefined) =>
    Promise<ISymbolSearchResult[]>;

  countResults(prefix: string) => Promise<number>;
```

### The `qtApi.myBalances()` property

Calling the property `qtApi.myBalances()` can give more user friendly "dot notation" acces to your balances than using the method `qtApi.account.getBalances()`

```TypeScript

 /* qtApi.myBalances() property is of type IQtApiMyBalances = () => Promise<IMyBalances> */
 interface IMyBalances {
   perCurrency: {
     CAD: {
       startOfDay: IBalance;
       current: IBalance;
     };
     USD: {
       startOfDay: IBalance;
       current: IBalance;
     };
   };
   combined: {
     CAD: {
       startOfDay: IBalance;
       current: IBalance;
     };
     USD: {
       startOfDay: IBalance;
       current: IBalance;
     };
   };
   current: {
     perCurrency: {
       CAD: IBalance;
       USD: IBalance;
     };
     combined: {
       CAD: IBalance;
       USD: IBalance;
     };
   };
   startOfDay: {
     combined: {
       CAD: IBalance;
       USD: IBalance;
     };
     perCurrency: {
       CAD: IBalance;
       USD: IBalance;
     };
   };
   CAD: {
     perCurrency: {
       startOfDay: IBalance;
       current: IBalance;
     };
     combined: {
       startOfDay: IBalance;
       current: IBalance;
     };
   };
   USD: {
     combined: {
       startOfDay: IBalance;
       current: IBalance;
     };
     perCurrency: {
       startOfDay: IBalance;
       current: IBalance;
     };
   };
 }
```

## Features

- No `any` TypeScript Keyword
- Token management
- Easy to use API calls
- Auto-select primary account

### Security and Token management

Questrade's security token system requires that you save the latest refresh token that it vends you. After you create one in the user apps page, our library needs to save a key somewhere onto disk. By default, this wrapper create a folder for these keys in `./keys` at your working directory,but you can change the directory location or load from a text file (with the key as its contents).

### Switching Accounts

By default, when you instantiate the `qtApi`  it will try to find and select the primary account (by fetching a list of all the accounts). If you want to change the account, simply do:

```typescript
  /* Switch to account 12345678 -- All future calls will use this 8 digits account. */
  qtApi.currentAccount = '12345678';

  /* Must be one of the valid account number for the */
  /* user on behalf of which the API client is authorized */
```

### No-any

This project count that forbiden keyword only twice, once in this title above, the other one is part of the tslint rule name forbiding the keword in the project.

![Forbiden Keyword](https://raw.githubusercontent.com/Luxcium/questrade-ts/master/images/forbiden-keyword.png)

### Always use semicolons when using this package or using this code in other projects

>Why? ([airbnb/javascript](https://github.com/airbnb/javascript#semicolons)):
>When JavaScript encounters a line break without a semicolon, it uses a set of rules called [Automatic Semicolon Insertion](https://tc39.es/ecma262/#sec-automatic-semicolon-insertion) to determine whether or not it should regard that line break as the end of a statement, and (as the name implies) place a semicolon into your code before the line break if it thinks so. ASI contains a few eccentric behaviors, though, and your code will break if JavaScript misinterprets your line break. These rules will become more complicated as new features become a part of JavaScript. Explicitly terminating your statements and configuring your linter to catch missing semicolons will help prevent you from encountering issues.

## Contributions

### All contributions are welcome

- **To contribute to this project:** [visit the GitHub Repo page of the project](https://github.com/Luxcium/questrade-ts)
- **To obtain or provide feedback (as bug reports or enhancements):** [visit our GitHub Issue page](https://github.com/Luxcium/questrade-ts/issues)
- **Please make sure to open a [GitHub issues](https://github.com/luxcium/questrade-ts/issues) for anything you feel is not exactly as described on this page or [Questrade Page](https://www.questrade.com/api/documentation/getting-started).**

## MIT LICENSE [![NPM](https://img.shields.io/npm/l/questrade-ts.svg)](https://raw.githubusercontent.com/Luxcium/questrade-ts/master/LICENSE)

Copyright (c) 2019 Benjamin Vincent Kasapoglu (Luxcium)

Copyright (c) 2016-2019 Leander Lee

Permission is hereby granted, free of charge, to all person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ALL KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ALL CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### Originaly based on the work of

[Leander Lee](https://github.com/leanderlee/questrade)

## Questrade does not maintain this unofficial SDK

Refer to [Questrade's Documentation](https://www.questrade.com/api/documentation/) to get help. Please always open a [questrade-ts GitHub issue](https://github.com/luxcium/questrade-ts/issues) for anything you feel doesn't match the way it should be working when referring to Questrade docs.

 [![npm](https://img.shields.io/npm/dt/questrade-ts.svg)](https://www.npmjs.com/package/questrade-ts)
