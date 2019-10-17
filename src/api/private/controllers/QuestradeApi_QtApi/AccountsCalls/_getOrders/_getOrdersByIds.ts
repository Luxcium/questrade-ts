import { Credentials, IOrder, IOrders } from '../../../../../../typescript';
import { _axiosAccountGetApi } from '../../../../core';
// + _getOrderByIds
/** _getOrders */
export const _getOrdersByIds = (credentials: Credentials) => async (
  orderId: number[]
): Promise<IOrder[]> => {
  //
  return (await _axiosAccountGetApi(credentials)<IOrders>(
    `/orders?ids=${orderId.join(',')}`
  )()).orders;
};
