// tslint:disable: variable-name
import { OrderStateFilterType } from 'questrade-api-enumerations';
import { _accountEndPoinFactory } from '.';
import { QtApi } from '../../../libraries';
import { IOrders } from '../../../types';
export const _getOrders = (qtApi: QtApi) => (startDate: string) => (
  endDate: string
) => async (
  orderStateFilterType: OrderStateFilterType = OrderStateFilterType.ALL
): Promise<IOrders> => {
  console.log('1qtApi', qtApi);

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
  console.log('2qtApi', qtApi);
  return _accountEndPoinFactory<Promise<IOrders>>(
    `/orders?${stateFilter}&${requstRange}`
  )(qtApi);
};
