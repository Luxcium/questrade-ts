// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
import { OrderStateFilterType } from 'questrade-api-enumerations';
import { api } from './core/api';
import { _apiPOST } from './core/api/apiGet/axiosApi';
import { QtApi } from './core/libraries';
import { AcountNumber, IAccount, IAccountActivity, IAccounts, IActivities, IBalances, ICurencyBalance, IExecution, IExecutions, IMarkets, IOrders, IPositions, IQuotes } from './core/types';

export const questrade = (() => {
  return async (options: any) => {
    const qtApi: QtApi = await api(options);

    qtApi.credentials.accountNumber = await _getPrimaryAccountNumber(qtApi);

    const { credentials } = qtApi;
    return {
      credentials,
      get: {
        serverTime: '',
        supported: {
          markets: async () => _getMarkets()(qtApi),
        },
        orders: (startDate?: string, endDate?: string) => async (
          orderStateFilterType?: OrderStateFilterType
        ) => _getOrders(qtApi)(orderStateFilterType)(startDate, endDate),
        current: { accountNumber: async () => credentials.accountNumber },
        credentials: async () => credentials,
        allAccounts: async () => _getAccounts(qtApi),
        account: {
          orders: {
            all: async (startDate?: string, endDate?: string) =>
              _getOrders(qtApi)(OrderStateFilterType.ALL)(startDate, endDate),
            closed: async (startDate?: string, endDate?: string) =>
              _getOrders(qtApi)(OrderStateFilterType.CLOSED)(
                startDate,
                endDate
              ),
            open: async (startDate?: string, endDate?: string) =>
              _getOrders(qtApi)(OrderStateFilterType.OPEN)(startDate, endDate),
          },
          number: async () => credentials.accountNumber,
          activities: (startDate: string, endDate: string) =>
            _getActivities(qtApi)(startDate, endDate),
          balances: async () => _getBalances(qtApi),
          executions: async () => _getExecutions(qtApi),
          positions: async () => _getPositions(qtApi),
          primaryNumber: async () => _getPrimaryAccountNumber(qtApi),
        },
        market: {
          quotes: async (qtSymbol: number[]) =>
            _getMarketsQuotes(qtApi)(qtSymbol),
        },
      },
    };
  };
})();

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

const _getPositions = async (qtApi: QtApi) =>
  accountEndPoinFactory<Promise<IPositions>>('/positions')(qtApi);

const _getBalances = async (qtApi: QtApi) => {
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
const _getExecutions = async (qtApi: QtApi): Promise<IExecution[]> =>
  (await accountEndPoinFactory<Promise<IExecutions>>('/executions')(qtApi))
    .executions;

const _getOrders = (qtApi: QtApi) => (
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
const _getMarkets = (endpoint: string = '/markets') => async (qtApi: QtApi) => {
  console.log(' _getMarkets:endpoint:endpoint', endpoint);
  return endPoinFactory<Promise<IMarkets>>(endpoint)(qtApi);
};

export const _getMarketsQuotes = (qtApi: QtApi) => async (
  qtSymbol: number[]
) => {
  if (!qtSymbol.length) {
    // will error out after calling the api the server will reply the error message ...
    return (await endPoinFactory<Promise<IQuotes>>('/markets/quotes')(qtApi))
      .quotes;
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
  return (await endPoinFactory<Promise<IQuotes>>(endpoint)(qtApi)).quotes;
};

export const _quotesOptions = () =>  _apiPOST(,);

// _getSymbols/:id
// _getSymbols/search
// _getSymbols/:id/options
// _getMarkets
// _getMarkets/quotes/:id
// _getMarkets/quotes/options
// _getMarkets/quotes/strategies
// _getMarkets/candles/:id
