// tslint:disable: variable-name
import { _getOrders } from '.';
import { QtApi } from '../../../libraries';
import { OrderStateFilterType } from '../../../types';
import { _getBalances } from '../_Accounts/_getBalances';

const BALANCES = (qtApi: QtApi) => {
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
