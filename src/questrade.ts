// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
import { OrderStateFilterType } from 'questrade-api-enumerations';
import { api } from './core/api';
import { QtApi } from './core/libraries';
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
} from './core/types';

// const ONE_MONTH = 30 * 24 * 60 * 60 * 1000;

export const questrade = (() => {
  return async (options: any) => {
    const qtApi: QtApi = await api(options);

    qtApi.credentials.accountNumber = await _getPrimaryAccountNumber(qtApi);

    const { credentials } = qtApi;
    return {
      get: {
        supported: {
          markets: () => _getMarkets(qtApi),
        },

        current: { accountNumber: () => credentials.accountNumber },
        credentials: () => credentials,
        allAccounts: () => _getAccounts(qtApi),
        account: {
          number: () => credentials.accountNumber,
          activities: (startDate: string, endDate: string) =>
            _getActivities(qtApi)(startDate, endDate),
          balances: () => _getBalances(qtApi),
          executions: () => _getExecutions(qtApi),
          orders: (startDate?: string, endDate?: string) => (
            orderStateFilterType?: OrderStateFilterType
          ) => _getOrders(qtApi)(orderStateFilterType)(startDate, endDate),
          ordersAll: (startDate?: string, endDate?: string) =>
            _getOrders(qtApi)(OrderStateFilterType.ALL)(startDate, endDate),
          ordersClosed: (startDate?: string, endDate?: string) =>
            _getOrders(qtApi)(OrderStateFilterType.CLOSED)(startDate, endDate),
          ordersOpen: (startDate?: string, endDate?: string) =>
            _getOrders(qtApi)(OrderStateFilterType.OPEN)(startDate, endDate),
          positions: () => _getPositions(qtApi),
          primaryNumber: () => _getPrimaryAccountNumber(qtApi),
        },
      },
    };
  };
})();

// questrade('0I55OUTM7zHQZbG9AiwA5vY3zQY6W6qt0')
//   .then(async will => {
//     console.log(will.getAcountNumber());
//     console.log(await will.getAccounts());
//     // console.log(await will.getActivities());
//     console.log(await will.getBalances());
//     console.log(will.getCredentials());
//     console.log(await will.getExecutions());
//     console.log(await will.getMarkets());
//     console.log(await will.getOrders());
//     console.log(await will.getPositions());
//     console.log(await will.getPrimaryAccountNumber());

//     // await will.getMarkets();
//     // console.log('- -\n',await will.getAccounts());
//     // console.log('- -\n',await will.getActivities());
//     // console.log((await will.getBalances()).combinedBalances.USD.cash);
//     // console.log('- -\n', await will.getSODPerCurrencyBalances());
//     // console.log('- -\n',await will.getBalances());
//     // console.log('- -\n',await will.getExecutions());
//     // console.log('- -\n',await will.getMarkets());
//     // console.log('- -\n',await will.getOrders());
//     // console.log('- -\n',await will.getPositions());
//     // console.log('- -\n',await will.getPrimaryAccountNumber());
//     // console.log('- -\n',will.credentials);
//   })
//   .then(_ => console.log('-OK-'))
//   .catch(err => console.error(err.message));

const _getAccounts = async (qtApi: QtApi): Promise<IAccount[]> => {
  try {
    const { accounts } = await qtApi.get<IAccounts>('/accounts');
    return accounts;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

const _getPrimaryAccountNumber = async (
  qtApi: QtApi
): Promise<AcountNumber> => {
  const accounts = await _getAccounts(qtApi as QtApi);
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

const endPoinFactory = <T>(endpoint: string) => {
  return async (qtApi: QtApi): Promise<T> => qtApi.get<T>(endpoint);
};

const accountEndPoinFactory = <T>(endpoint: string) => {
  return async (qtApi: QtApi): Promise<T> => qtApi.accountGet<T>(endpoint);
};
// /accounts/26598145/

export const _getPositions = async (qtApi: QtApi) =>
  accountEndPoinFactory<Promise<IPositions>>('/positions')(qtApi);

export const _getBalances = async (qtApi: QtApi) => {
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
export const _getExecutions = async (qtApi: QtApi): Promise<IExecution[]> =>
  (await accountEndPoinFactory<Promise<IExecutions>>('/executions')(qtApi))
    .executions;

export const _getOrders = (qtApi: QtApi) => (
  orderStateFilterType?: OrderStateFilterType
) => async (startDate?: string, endDate?: string): Promise<IOrders> => {
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
  return accountEndPoinFactory<Promise<IOrders>>(
    `/orders?${stateFilter}&${requstRange}`
  )(qtApi);
};
const _getActivities = (qtApi: QtApi) => async (
  startDate: string,
  endDate: string
): Promise<IAccountActivity[]> => {
  return (await accountEndPoinFactory<Promise<IActivities>>(
    `/activities?startTime=${new Date(
      startDate
    ).toISOString()}&endTime=${new Date(endDate).toISOString()}`
  )(qtApi)).activities;
};
export const _getMarkets = async (qtApi: QtApi) =>
  (await endPoinFactory<Promise<IMarkets>>('/markets')(qtApi)).markets;
// _getActivities<any>()
// _getPositions<any>(qtApi);
// function getUrl(= endpoint:string,)

// _getSymbols/:id
// _getSymbols/search
// _getSymbols/:id/options
// _getMarkets
// _getMarkets/quotes/:id
// _getMarkets/quotes/options
// _getMarkets/quotes/strategies
// _getMarkets/candles/:id

// '/markets';

// _getPositions() '/positions'
// _getBalances() '/balances'
// _getExecutions() '/executions'
// _getOrders() '/orders'
// _getActivities() '/activities'

// [/:orderId]

// _getAccounts
// _getAccounts/:id
// _getAccounts/:id
// _getAccounts/:id
// _getAccounts/:id
// _getAccounts/:id

// _getSymbols/:id
// _getSymbols/search
// _getSymbols/:id/options
// _getMarkets
// _getMarkets/quotes/:id
// _getMarkets/quotes/options
// _getMarkets/quotes/strategies
// _getMarkets/candles/:id
// const qtApi : any = null
