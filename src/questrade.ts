// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.

import { api } from './core/api';
import { QtApi } from './core/libraries';
import {
  AcountNumber,
  IAccount,
  IAccounts,
  IMarket,
  IMarketsResponse,
} from './core/types';

export const questrade = (() => {
  return async (options: any) => {
    const qtApi: QtApi = await api(options);
    qtApi.credentials.accountNumber = await _getPrimaryAccountNumber(qtApi);

    return {
      credentials: qtApi.credentials,
      getAccounts: async () => _getAccounts(qtApi),
      getActivities: async () => _getActivities(qtApi),
      getBalances: async () => _getBalances(qtApi),
      getExecutions: async () => _getExecutions(qtApi),
      getMarkets: async () => _getMarkets2(qtApi),
      getOrders: async () => _getOrders(qtApi),
      getPositions: async () => _getPositions(qtApi),
      getPrimaryAccountNumber: async () => _getPrimaryAccountNumber(qtApi),
    };
  };
})();
questrade('0I55OUTM7zHQZbG9AiwA5vY3zQY6W6qt0')
  .then(async got => {
    // await got.getMarkets()
    console.log(await got.getAccounts());
    // console.log(await got.getActivities());
    console.log(await got.getBalances());
    // console.log(await got.getExecutions());
    // console.log(await got.getMarkets());
    // console.log(await got.getOrders());
    // console.log(await got.getPositions());
    // console.log(await got.getPrimaryAccountNumber());
    // console.log(got.credentials);
  })
  .then(_ => console.log('-OK-'))
  .catch(err => console.error(err.message));

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

export const _getMarkets = async (qtApi: QtApi): Promise<IMarket[]> => {
  return (await qtApi.get<IMarketsResponse>('/markets')).markets;
};

const endPoinFactory = <T>(endpoint: string) => {
  return async (qtApi: QtApi): Promise<T> => qtApi.get<T>(endpoint);
};

export const accountEndPoinFactory = <T>(endpoint: string) => {
  return async (qtApi: QtApi): Promise<T> => qtApi.get<T>(endpoint);
};
// /accounts/26598145/

export const _getPositions = async <T>(qtApi: QtApi) =>
  endPoinFactory<T>('/positions')(qtApi);

export const _getBalances = async <T>(qtApi: QtApi) =>
  endPoinFactory<T>('/balances')(qtApi);

export const _getExecutions = async <T>(qtApi: QtApi) =>
  endPoinFactory<T>('/executions')(qtApi);

export const _getOrders = async <T>(qtApi: QtApi) =>
  endPoinFactory<T>('/orders')(qtApi);

export const _getActivities = async <T>(qtApi: QtApi) =>
  endPoinFactory<T>('/activities')(qtApi);

export const _getMarkets2 = async <T>(qtApi: QtApi) =>
  endPoinFactory<T>('/markets')(qtApi);
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
