// tslint:disable: variable-name
// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
import { OrderStateFilterType } from 'questrade-api-enumerations';
import {
  _accountEndPoinFactory,
  _getEndPoinFactory,
  _postEndPoinFactory,
} from '.';
import { _questradeApi } from '../../../api';
import { QtApi } from '../../../libraries';
import {
  AcountNumber,
  IAccount,
  IAccountActivity,
  IAccounts,
  IActivities,
  IBalances,
  ICurencyBalance,
  IExecution,
  IExecutions,
  IMarkets,
  IOrders,
  IPositions,
  IQuotes,
  Time,
} from '../../../types';
// import { _getBalances } from './_getBalances';

export const questrade = async (options: any) => {
  const qtApi: QtApi = await _questradeApi(options);

  qtApi.credentials.accountNumber = await _getPrimaryAccountNumber(qtApi)();
  const accounts = {
    activities: _getAccounts(qtApi),
    orders: _getActivities(qtApi),
    executions: _getExecutions(qtApi), // :// _getApiAccountCalls(qtApi),
    balances: _getBalances(qtApi),
    listAccounts: _getExecutions(qtApi),
    time: _getOrders(qtApi),
  } as any;
  const markets = {
    candles: _getCandles(qtApi),
    list: _getMarkets(qtApi),
  } as any;
  const quotes = {
    strategies: _postGetStrategiesQuotes(qtApi),
    options: _postGetOptionsQuotes(qtApi),
    fromSymbolID: _getQuotesFromSymbolID(qtApi),
  } as any;
  const symbols = {
    search: _getSymbolSearch(qtApi),
    options: _getOptionsSymbols(qtApi),
    fromSymbolID: _getSymbolFromSymbolID(qtApi),
  } as any;

  return {
    qtApi,
    accounts,
    symbols,
    markets,
    quotes,
  };
};

// GET https://api01.iq.questrade.com/v1/markets/candles/38738?startTime=2014-10-01T00:00:00-05:00&endTime=2014-10-20T23:59:59-05:00&interval=OneDay
const _getCandles = (qtApi: QtApi) => (startDate: string) => (
  interval: string = 'OneDay'
) => (endDate: string) => async (symbolID: string) => {
  return _getEndPoinFactory<Promise<any>>(
    `/markets/candles/${symbolID}?startTime=${startDate}&endTime=${endDate}&interval=${interval}`
  )(qtApi);
};

/*

 {
    "variants": [
        {
             "variantId": 1,
             "strategy": ”Custom”,
             "legs": [
                   {
                      "symbolId": 27426,
                      "ratio":  1000,
                      "action": "Buy"
                   },
                   {
                       "symbolId": 10550014,
                       "ratio":  10,
                       "action": "Sell"
                   }
                ]
          },
             ...
    ]
}
*/

// POST https://api01.iq.questrade.com/v1/markets/quotes/strategies
const _postGetStrategiesQuotes = (qtApi: QtApi) => async () => {
  return _postEndPoinFactory<Promise<any>>('/markets/quotes/strategies')(qtApi);
};

// GET https://api01.iq.questrade.com/v1/markets/quotes?ids=38738,...
const _getQuotesFromSymbolID = (qtApi: QtApi) => async (symbolID: string) => {
  return _getEndPoinFactory<Promise<any>>(`/markets/quotes?ids=${symbolID}`)(
    qtApi
  );
};

// GET https://api01.iq.questrade.com/v1/symbols/search?prefix=BMO
const _getSymbolSearch = (qtApi: QtApi) => async (prefix: string) => {
  return _getEndPoinFactory<Promise<any>>(`/symbols/search?prefix=${prefix}`)(
    qtApi
  );
};

// GET https://api01.iq.questrade.com/v1/symbols/9291/options
const _getOptionsSymbols = (qtApi: QtApi) => async (symbolID: string) => {
  return _getEndPoinFactory<Promise<any>>(`/symbols/${symbolID}/options`)(
    qtApi
  );
};

/*

{
    “filters”: [
        {
             “optionType”: ”Call”,
             “underlyingId”: 27426,
             “expiryDate”: ”2017-01-20T00:00:00.000000-05:00”,
             “minstrikePrice”: 70,
             “maxstrikePrice”: 80
        },
              ...
      ],
      “optionIds”:
             [
              9907637,
              9907638,
                  ...
         ]
  }
*/
// POST https://api01.iq.questrade.com/v1/markets/quotes/options
const _postGetOptionsQuotes = (qtApi: QtApi) => async () => {
  return _postEndPoinFactory<Promise<any>>('/markets/quotes/options')(qtApi);
};

// GET https://api01.iq.questrade.com/v1/symbols?ids=8049,...
const _getSymbolFromSymbolID = (qtApi: QtApi) => async () => {
  return _getEndPoinFactory<Promise<any>>('/symbols')(qtApi);
};

export const _getMarketsQuotes = (qtApi: QtApi) => async (
  qtSymbol: number[]
) => {
  if (!qtSymbol.length) {
    // will error out after calling the api the server will reply the error message ...
    return (await _getEndPoinFactory<Promise<IQuotes>>('/markets/quotes')(
      qtApi
    )()).quotes;
  }
  let qtSymbolString: string = '';
  qtSymbol.forEach((val, currentIndex, ar) => {
    qtSymbolString += `${val.toString()}${
      !(ar.length - currentIndex - 1) ? '' : ','
    }`;
  });

  const endpoint = `/markets/quotes${
    qtSymbol.length === 1 ? `/${qtSymbolString}` : `?ids=${qtSymbolString}`
  }`;
  return (await _getEndPoinFactory<Promise<IQuotes>>(endpoint)(qtApi)()).quotes;
};

export const _getMarkets = (qtApi: QtApi) => async () => {
  return _getEndPoinFactory<Promise<IMarkets>>('/markets')(qtApi)();
};

export const _getPositions = (qtApi: QtApi) => async () =>
  _accountEndPoinFactory<Promise<IPositions>>('/positions')(qtApi)();

export const _getTime = (qtApi: QtApi) => async (): Promise<string> => {
  try {
    const { time } = await qtApi.get<Time>('/time');
    return time;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const _getExecutions = (qtApi: QtApi) => async (): Promise<
  IExecution[]
> =>
  (await _accountEndPoinFactory<Promise<IExecutions>>('/executions')(qtApi)())
    .executions;

export const _getOrders = (qtApi: QtApi) => (
  orderStateFilterType?: OrderStateFilterType
) => (startDate?: string) => (endDate?: string) => async (): Promise<
  IOrders
> => {
  let stateFilter = '';
  if (!!orderStateFilterType) {
    stateFilter = `stateFilter=${orderStateFilterType}`;
  }
  let requstRange = '';
  if (startDate && endDate) {
    requstRange = `startTime=${new Date(
      startDate
    ).toISOString()}&endTime=${new Date(endDate).toISOString()}`;
  }
  return _accountEndPoinFactory<Promise<IOrders>>(
    `/orders?${stateFilter}&${requstRange}`
  )(qtApi)();
};

export const _getActivities = (qtApi: QtApi) => (startDate: string) => (
  endDate: string
) => async (): Promise<IAccountActivity[]> => {
  return (await _accountEndPoinFactory<Promise<IActivities>>(
    `/activities?startTime=${new Date(
      startDate
    ).toISOString()}&endTime=${new Date(endDate).toISOString()}`
  )(qtApi)()).activities;
};

export const _getBalances = (qtApi: QtApi) => async () => {
  let {
    perCurrencyBalances,
    combinedBalances,
    sodPerCurrencyBalances,
    sodCombinedBalances,
  } = (await _accountEndPoinFactory<IBalances>('/balances')(qtApi)()) as any;
  [
    perCurrencyBalances,
    combinedBalances,
    sodPerCurrencyBalances,
    sodCombinedBalances,
  ] = [
    perCurrencyBalances,
    combinedBalances,
    sodPerCurrencyBalances,
    sodCombinedBalances,
  ].map(item => {
    const [CAD, USD] = item;
    return { CAD, USD };
  });
  return {
    perCurrencyBalances: perCurrencyBalances as ICurencyBalance,
    combinedBalances: combinedBalances as ICurencyBalance,
    sodPerCurrencyBalances: sodPerCurrencyBalances as ICurencyBalance,
    sodCombinedBalances: sodCombinedBalances as ICurencyBalance,
  };
};

export const _getAccounts = (qtApi: QtApi) => async (): Promise<IAccount[]> => {
  try {
    const { accounts } = await qtApi.get<IAccounts>('/accounts');
    return accounts;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const _getPrimaryAccountNumber = (qtApi: QtApi) => async (): Promise<
  AcountNumber
> => {
  const accounts = await _getAccounts(qtApi)();
  if (accounts.length < 1) {
    throw new Error('No account number found');
  }
  // if only one retur the only one ...
  if (accounts.length === 1) {
    return accounts[0].number;
  }
  // if more than one return the first one marked primary
  const primary = accounts.filter(account => account.isPrimary);
  if (primary.length > 0) {
    return primary[0].number;
  }
  // if none marked primary and more than one return first one
  return accounts[0].number;
};

const BALANCES = (qtApi: QtApi) => {
  const combinedCADCurrent = async () =>
    (await _getBalances(qtApi)()).combinedBalances.CAD;
  const combinedUSDCurrent = async () =>
    (await _getBalances(qtApi)()).combinedBalances.USD;
  const CADCurrent = async () =>
    (await _getBalances(qtApi)()).perCurrencyBalances.CAD;
  // tslint:disable: variable-name
  const USDCurrent = async () =>
    (await _getBalances(qtApi)()).perCurrencyBalances.USD;
  const combinedCADStartOfDay = async () =>
    (await _getBalances(qtApi)()).sodCombinedBalances.CAD;
  const combinedUSDStartOfDay = async () =>
    (await _getBalances(qtApi)()).sodCombinedBalances.USD;
  const CADStartOfDay = async () =>
    (await _getBalances(qtApi)()).sodPerCurrencyBalances.CAD;
  const USDStartOfDay = async () =>
    (await _getBalances(qtApi)()).sodPerCurrencyBalances.USD;

  return {
    current: {
      CAD: CADCurrent,
      USD: USDCurrent,
      allInCAD: combinedCADCurrent,
      allInUSD: combinedUSDCurrent,
    },
    startOfDay: {
      CAD: CADStartOfDay,
      USD: USDStartOfDay,
      allInCAD: combinedCADStartOfDay,
      allInUSD: combinedUSDStartOfDay,
    },
  };
};

// const TIME = _getTime(qtApi);

export const _accounts = (qtApi: QtApi) => ({
  // ACTIVITIES: (startDate: string) => (endDate: string) =>
  //   _getActivities(qtApi)(startDate)(endDate),
  get: {
    BALANCES: BALANCES(qtApi),
    ORDERS: {
      all: {
        from: (startDate?: string) => ({
          to: (endDate?: string) =>
            _getOrders(qtApi)(OrderStateFilterType.ALL)(startDate)(endDate)(),
        }),
      },
      closed: {
        from: (startDate?: string) => ({
          to: (endDate?: string) =>
            _getOrders(qtApi)(OrderStateFilterType.CLOSED)(startDate)(
              endDate
            )(),
        }),
      },
      open: {
        from: (startDate?: string) => ({
          to: (endDate?: string) =>
            _getOrders(qtApi)(OrderStateFilterType.OPEN)(startDate)(endDate)(),
        }),
      },
      // ACCOUNTS: async () => _getAccounts(qtApi),
    },
  },
  // ORDERS: async (orderStateFilterType: OrderStateFilterType) => (
  //   startDate?: string
  // ) => (endDate?: string) =>
  //   _getOrders(qtApi)(orderStateFilterType)(startDate)(endDate),

  // EXECUTIONS: async () => _getExecutions(qtApi),
  // BALANCES: async () => _getBalances(qtApi),
  // POSITIONS: async () => _getPositions(qtApi),

  // currentAccountNumber: async () => qtApi.credentials.accountNumber,
  // TIME: async () => _getTime(qtApi),
  // qtApi,
});

/*


export const _getBalances =  (qtApi: QtApi)=>async () => {
  let {
    perCurrencyBalances,
    combinedBalances,
    sodPerCurrencyBalances,
    sodCombinedBalances,
  } = (await accountEndPoinFactory<IBalances>('/balances')(qtApi)) as any;
  [
    perCurrencyBalances,
    combinedBalances,
    sodPerCurrencyBalances,
    sodCombinedBalances,
  ] = [
    perCurrencyBalances,
    combinedBalances,
    sodPerCurrencyBalances,
    sodCombinedBalances,
  ].map(item => {
    const [CAD, USD] = item;
    return { CAD, USD };
  });
  return {
    perCurrencyBalances: perCurrencyBalances as ICurencyBalance,
    combinedBalances: combinedBalances as ICurencyBalance,
    sodPerCurrencyBalances: sodPerCurrencyBalances as ICurencyBalance,
    sodCombinedBalances: sodCombinedBalances as ICurencyBalance,
  };
};

*/

// }//
/*

current

currentCAD
currentUSD

currentallInCAD
currentallInUSD

startOfDay

startOfDayCAD
startOfDayUSD

startOfDayallInCAD
startOfDayallInUSD


*/
