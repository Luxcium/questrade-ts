// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.

import { questradeAPI } from './core/api';
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
    const qtApi: QtApi = await questradeAPI(options);
    qtApi.credentials.accountNumber = await _getPrimaryAccountNumber(qtApi);

    return {
      credentials: qtApi.credentials,
      getAccounts: () => _getAccounts(qtApi),
      getMarkets: () => _getMarkets(qtApi),
      getPrimaryAccountNumber: () => _getPrimaryAccountNumber(qtApi),
    };
  };
})();
questrade('elEp9b6PABDNeYUsXddrzjLnehTAuOXa0');

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

const _getMarkets = async (qtApi: QtApi): Promise<IMarket[]> => {
  return (await qtApi.get<IMarketsResponse>('/markets')).markets;
};

// _getAccounts
// _getAccounts/:id/positions
// _getAccounts/:id/balances
// _getAccounts/:id/executions
// _getAccounts/:id/orders[/:orderId]
// _getAccounts/:id/activities

// _getSymbols/:id
// _getSymbols/search
// _getSymbols/:id/options
// _getMarkets
// _getMarkets/quotes/:id
// _getMarkets/quotes/options
// _getMarkets/quotes/strategies
// _getMarkets/candles/:id
