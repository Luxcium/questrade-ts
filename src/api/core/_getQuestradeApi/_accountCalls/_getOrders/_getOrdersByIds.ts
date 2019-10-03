import { _axiosAccountGetApi } from '../../..';
import { Credentials, IOrders } from '../../../../typescript';

// + _getOrderByIds
/** _getOrders */
export const _getOrdersByIds = (credentials: Credentials) => async (
  orderId: number[]
) =>
  (await _axiosAccountGetApi(credentials)<IOrders>(
    `/orders?ids=${orderId.join(',')}`
  )()).orders;
