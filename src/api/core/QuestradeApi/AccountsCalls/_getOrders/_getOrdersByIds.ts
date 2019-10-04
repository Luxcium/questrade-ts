import { AxiosStatic, default as axios } from 'axios';
import { _axiosAccountGetApi } from '../../..';
import { IOrders } from '../../../../typescript';
import { Credentials } from '../../../typescript';
// + _getOrderByIds
/** _getOrders */
export const _getOrdersByIds = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (orderId: number[]) => {
  //
  return (await _axiosAccountGetApi(_axios)(credentials)<IOrders>(
    `/orders?ids=${orderId.join(',')}`
  )()).orders;
};
