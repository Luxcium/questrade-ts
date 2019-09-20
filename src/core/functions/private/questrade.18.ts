// tslint:disable: variable-name
import { OrderStateFilterType } from 'questrade-api-enumerations';
import {
  _accountEndPoinFactory,
  _getEndPoinFactory,
  _postEndPoinFactory,
} from '.';
import { _qtApiFactory } from '../../api';
import { QtApi } from '../../libraries';
import {
  AcountNumber,
  IAccount,
  IAccountActivity,
  IAccounts,
  IActivities,
  IBalances,
  ICandles,
  ICurencyBalance,
  IExecution,
  IExecutions,
  IMarkets,
  IOrders,
  IPositions,
  IQuotes,
  Time,
} from '../../types';
// const _qtApi: Promise<QtApi> = _qtApiFactory('options');
// !!
// !! questrade = async (options: any) => {
// !!
export class Questrade {
  public qtApi: Promise<QtApi>;
  public accountsApiCalls = {
    activities: _getActivities(this.qtApi),
    orders: _getOrders(this.qtApi),
    executions: _getExecutions(this.qtApi),
    balances: _getBalances(this.qtApi),
    positions: _getPositions(this.qtApi),
    listAccounts: _getAccounts(this.qtApi),
    time: _getTime(this.qtApi),
  };
  public quotes = {
    strategies: _postGetStrategiesQuotes(this.qtApi),
    options: _postGetOptionsQuotes(this.qtApi),
    fromSymbolID: _getQuotesFromSymbolID(this.qtApi),
  } as any;
  public symbols = {
    search: _getSymbolSearch(this.qtApi),
    options: _getOptionsSymbols(this.qtApi),
    fromSymbolID: _getSymbolFromSymbolID(this.qtApi),
  } as any;
  public marketsApiCalls = {
    candles: _getCandles(this.qtApi),
    list: _getMarkets(this.qtApi),
    quotes: this.quotes,
    symbols: this.symbols,
  } as any;
  constructor(options: any) {
    this.qtApi = _qtApiFactory(options);
  }
}

// Questrade( )
// !!
// !! _postGetStrategiesQuotes = (qtApi: Promise<QtApi>)  => {
// !!
export const _postGetStrategiesQuotes = async (qtApi: Promise<QtApi>) => {
  return _postEndPoinFactory<Promise<any>>('/markets/quotes/strategies')(qtApi);
};

// !!
// !! _getQuotesFromSymbolID = (qtApi: Promise<QtApi>) => async (
// !!
// export //  const _getQuotesFromSymbolID = (qtApi: Promise<QtApi>) => async (
//   symbolID: string
// ) => {
//   return _getEndPoinFactory<Promise<any>>(`/markets/quotes?ids=${symbolID}`)(
//     qtApi
//   );
// };

// !!
// !! _getSymbolSearch = (qtApi: Promise<QtApi>) => async (prefix: string) => {
// !!
export const _getSymbolSearch = (qtApi: Promise<QtApi>) => async (
  prefix: string
) => {
  return _getEndPoinFactory<Promise<any>>(`/symbols/search?prefix=${prefix}`)(
    qtApi
  );
};

// !!
// !! _getOptionsSymbols = (qtApi: Promise<QtApi>) => async (
// !!
export const _getOptionsSymbols = (qtApi: Promise<QtApi>) => async (
  symbolID: string
) => {
  return _getEndPoinFactory<Promise<any>>(`/symbols/${symbolID}/options`)(
    qtApi
  );
};

// !!
// !! _postGetOptionsQuotes = (qtApi: Promise<QtApi>)  => {
// !!
export const _postGetOptionsQuotes = async (qtApi: Promise<QtApi>) => {
  return _postEndPoinFactory<Promise<any>>('/markets/quotes/options')(qtApi);
};

// !!
// !! _getSymbolFromSymbolID = (qtApi: Promise<QtApi>)  => {
// !!
export const _getSymbolFromSymbolID = async (qtApi: Promise<QtApi>) => {
  return _getEndPoinFactory<Promise<any>>('/symbols')(qtApi);
};

// !!
// !! _getMarketsQuotes = (qtApi: Promise<QtApi>) => async (
// !!
export const _getQuotesFromSymbolID = (qtApi: Promise<QtApi>) => async (
  qtSymbol: number[]
) => {
  if (!qtSymbol.length) {
    return (await _getEndPoinFactory<Promise<IQuotes>>('/markets/quotes')(
      qtApi
    )).quotes;
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
  return (await _getEndPoinFactory<Promise<IQuotes>>(endpoint)(qtApi)).quotes;
};

// !!
// !! _getPositions = (qtApi: Promise<QtApi>)  =>
// !!
export const _getPositions = async (qtApi: Promise<QtApi>) =>
  _accountEndPoinFactory<Promise<IPositions>>('/positions')(qtApi);

// !!
// !! _getTime = (qtApi: Promise<QtApi>) : Promise<string> => {
// !!
export const _getTime = async (qtApi: Promise<QtApi>): Promise<string> => {
  try {
    const { time } = await (await qtApi).get<Time>('/time');
    return time;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

// !!
// !! _getExecutions = (qtApi: Promise<QtApi>) : Promise<
// !!
export const _getExecutions = async (
  qtApi: Promise<QtApi>
): Promise<IExecution[]> =>
  (await _accountEndPoinFactory<Promise<IExecutions>>('/executions')(qtApi))
    .executions;

// !!
// !! _getOrders = (qtApi: Promise<QtApi>) => (
// !!
export const _getOrders = (qtApi: Promise<QtApi>) => (
  orderStateFilterType?: OrderStateFilterType
) => (startDate?: string) => async (endDate?: string): Promise<IOrders> => {
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
  )(qtApi);
};

// !!
// !! _getActivities = (qtApi: Promise<QtApi>) => (startDate: string) => (
// !!
export const _getActivities = (qtApi: Promise<QtApi>) => (
  startDate: string
) => async (endDate: string): Promise<IAccountActivity[]> => {
  return (await _accountEndPoinFactory<Promise<IActivities>>(
    `/activities?startTime=${new Date(
      startDate
    ).toISOString()}&endTime=${new Date(endDate).toISOString()}`
  )(qtApi)).activities;
};

// !!
// !! _getBalances = (qtApi: Promise<QtApi>)  => {
// !!
export const _getBalances = async (qtApi: Promise<QtApi>) => {
  let {
    perCurrencyBalances,
    combinedBalances,
    sodPerCurrencyBalances,
    sodCombinedBalances,
  } = (await _accountEndPoinFactory<IBalances>('/balances')(qtApi)) as any;
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

// !!
// !! _getAccounts = (qtApi: Promise<QtApi>) : Promise<IAccount[]> => {
// !!
export const _getAccounts = async (
  qtApi: Promise<QtApi>
): Promise<IAccount[]> => {
  try {
    const { accounts } = await (await qtApi).get<IAccounts>('/accounts');
    return accounts;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

// !!
// !! _getPrimaryAccountNumber = (qtApi: Promise<QtApi>) : Promise<
// !!
export const _getPrimaryAccountNumber = async (
  qtApi: Promise<QtApi>
): Promise<AcountNumber> => {
  const accounts = await _getAccounts(qtApi);
  if (accounts.length < 1) {
    throw new Error('No account number found');
  }

  if (accounts.length === 1) {
    return accounts[0].number;
  }

  const primary = accounts.filter(account => account.isPrimary);
  if (primary.length > 0) {
    return primary[0].number;
  }

  return accounts[0].number;
};

const BALANCES = (qtApi: Promise<QtApi>) => {
  const combinedCADCurrent = async () =>
    (await _getBalances(qtApi)).combinedBalances.CAD;
  const combinedUSDCurrent = async () =>
    (await _getBalances(qtApi)).combinedBalances.USD;
  const CADCurrent = async () =>
    (await _getBalances(qtApi)).perCurrencyBalances.CAD;

  const USDCurrent = async () =>
    (await _getBalances(qtApi)).perCurrencyBalances.USD;
  const combinedCADStartOfDay = async () =>
    (await _getBalances(qtApi)).sodCombinedBalances.CAD;
  const combinedUSDStartOfDay = async () =>
    (await _getBalances(qtApi)).sodCombinedBalances.USD;
  const CADStartOfDay = async () =>
    (await _getBalances(qtApi)).sodPerCurrencyBalances.CAD;
  const USDStartOfDay = async () =>
    (await _getBalances(qtApi)).sodPerCurrencyBalances.USD;

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

// !!
// !! _accounts = (qtApi: QtApi) => ({
// !!
export const _accounts = (qtApi: Promise<QtApi>) => ({
  get: {
    PrimaryAccountNumber: _getPrimaryAccountNumber(qtApi),
    BALANCES: BALANCES(qtApi),
    ORDERS: {
      all: {
        from: (startDate?: string) => ({
          to: (endDate?: string) =>
            _getOrders(qtApi)(OrderStateFilterType.ALL)(startDate)(endDate),
        }),
      },
      closed: {
        from: (startDate?: string) => ({
          to: (endDate?: string) =>
            _getOrders(qtApi)(OrderStateFilterType.CLOSED)(startDate)(endDate),
        }),
      },
      open: {
        from: (startDate?: string) => ({
          to: (endDate?: string) =>
            _getOrders(qtApi)(OrderStateFilterType.OPEN)(startDate)(endDate),
        }),
      },
    },
  },
});

// !!
// !! _getCandles = (qtApi: QtApi) => (startDate: string) => (
// !!
export const _getCandles = (qtApi: Promise<QtApi>) => (startDate: string) => (
  interval: string = 'OneDay'
) => (endDate: string) => async (symbolID: string): Promise<ICandles> => {
  return _getEndPoinFactory<ICandles>(
    `/markets/candles/${symbolID}?startTime=${startDate}&endTime=${endDate}&interval=${interval}`
  )(qtApi);
};

// !!
// !! _getMarkets = (qtApi: QtApi)  => {
// !!
export const _getMarkets = async (qtApi: Promise<QtApi>) => {
  return _getEndPoinFactory<Promise<IMarkets>>('/markets')(qtApi);
};
