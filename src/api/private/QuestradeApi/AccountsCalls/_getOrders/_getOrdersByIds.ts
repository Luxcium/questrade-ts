import { AxiosStatic, default as axios } from 'axios';
import { Credentials, IOrder, IOrders } from '../../../../../typescript';
import { _axiosAccountGetApi } from '../../../core/AxiosRequestApiFactory';
// + _getOrderByIds
/** _getOrders */
export const _getOrdersByIds = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (orderId: number[]): Promise<IOrder[]> => {
  //
  return (await _axiosAccountGetApi(_axios)(credentials)<IOrders>(
    `/orders?ids=${orderId.join(',')}`
  )()).orders;
};
