// -------------------------------------------------------------------------- //
import { questradeAPI } from './core/api';
import { QtApi } from './core/libraries';
import {
  AcountNumber,
  IAccount,
  IAccounts,
  IMarket,
  IMarketsResponse,
} from './core/types';
// -------------------------------------------------------------------------- //
// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
// - ------------------------------------------------------------------------ //

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

// getAccounts
// getAccounts/:id/positions
// getAccounts/:id/balances
// getAccounts/:id/executions
// getAccounts/:id/orders[/:orderId]
// getAccounts/:id/activities

// getSymbols/:id
// getSymbols/search
// getSymbols/:id/options
// getMarkets
// getMarkets/quotes/:id
// getMarkets/quotes/options
// getMarkets/quotes/strategies
// getMarkets/candles/:id
// - ------------------------------------------------------------------------ //
