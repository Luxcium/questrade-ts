// tslint:disable: variable-name
import { OrderStateFilterType } from 'questrade-api-enumerations';
import { QtApi } from '../../../libraries';
import { _balances, _getOrders, _getPrimaryAccountNumber } from './';
export const _accounts = (qtApi: Promise<QtApi>) => ({
  get: {
    PrimaryAccountNumber: _getPrimaryAccountNumber(qtApi),
    BALANCES: _balances(qtApi),
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
