import { Credentials, IOrder, IOrders, IProxy } from '../../../../typescript';
import { _axiosAccountGetApi } from '../../../routes';
// + _getOrderByIds
/** _getOrders */
export const _getOrdersByIds = (
  credentials: Credentials,
  proxy?: IProxy
) => async (orderId: number[]): Promise<IOrder[]> => {
  try {
    //
    return (
      await _axiosAccountGetApi(
        credentials,
        proxy
      )<IOrders>(`/orders?ids=${orderId.join(',')}`)()
    ).orders;
  } catch (error) {
    console.error(error);
    return [];
  }
};
