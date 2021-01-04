import {
  AxiosProxyHandler,
  Credentials,
  IOrder,
  IOrders,
} from '../../../../typescript';
import { _axiosAccountGetApi } from '../../../routes';
// + _getOrderByIds
/** _getOrders */
export const _getOrdersByIds = (
  credentials: Credentials,
  proxy?: AxiosProxyHandler,
) => async (orderId: number[]): Promise<IOrder[]> => {
  try {
    //
    return (
      await _axiosAccountGetApi(
        credentials,
        proxy,
      )<IOrders>(`/orders?ids=${orderId.join(',')}`)()
    ).orders;
  } catch (error) {
    console.error(error); // TODO: List the side effects

    return [];
  }
};
