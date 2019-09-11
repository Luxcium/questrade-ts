import { questradeAPI } from './core/api';
import { ApiGet } from './core/ApiGet.1';
import {
  AcountNumber,
  IAccount,
  IAccounts,
  IMarket,
  IMarketsResponse,
} from './core/types';
export const questrade = (() => {
  return async (options: any) => {
    const [apiGet, credentials] = await questradeAPI(options);
    // const credentials = (await oAuth(options)) as Credentials;
    credentials.accountNumber = await _getPrimaryAccountNumber(
      apiGet
      // credentials
    );
    return {
      credentials,
      getAccounts: () => _getAccounts(apiGet),
      getMarkets: () => _getMarkets(apiGet),
      getPrimaryAccountNumber: () => _getPrimaryAccountNumber(apiGet),
    };
  };
})();
questrade('elEp9b6PABDNeYUsXddrzjLnehTAuOXa0');

async function _getAccounts(apiGet: ApiGet): Promise<IAccount[]> {
  try {
    const { accounts } = await apiGet<IAccounts>('/accounts');
    return accounts;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

const _getPrimaryAccountNumber = async (
  apiGet: ApiGet
): Promise<AcountNumber> => {
  const accounts = await _getAccounts(apiGet as ApiGet);
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

const _getMarkets = async (apiGet: ApiGet): Promise<IMarket[]> => {
  return (await apiGet<IMarketsResponse>('/markets')).markets;
};
