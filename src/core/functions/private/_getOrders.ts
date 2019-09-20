// tslint:disable: variable-name
import { OrderStateFilterType } from 'questrade-api-enumerations';
import { _accountEndPoinFactory } from '.';
import { QtApi } from '../../libraries';
import { IOrders } from '../../types';
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
