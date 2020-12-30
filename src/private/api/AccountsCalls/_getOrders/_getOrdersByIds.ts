import { Credentials, IOrder, IOrders } from '../../../../typescript';
import { _axiosAccountGetApi } from '../../../routes';
// + _getOrderByIds
/** _getOrders */
export const _getOrdersByIds = (credentials: Credentials) => async (
  orderId: number[]
): Promise<IOrder[]> => {
  try {
    //
    return (
      await _axiosAccountGetApi(credentials)<IOrders>(
        `/orders?ids=${orderId.join(',')}`
      )()
    ).orderList;
  } catch (error) {
    console.error(error);
    return [];
  }
};
