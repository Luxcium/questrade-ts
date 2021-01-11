import {
  ClientProxyHandler,
  Credentials,
  IOrder,
  IOrders,
} from '../../../../typescript';
import { _clientAccountGetApi } from '../../../routes/clientAccountGetApi/_clientAccountGetApi';

// + _getOrderByIds
/** _getOrders */
export const _getOrdersByIds = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
  errorlog: (error: any) => any = (error: any) => error,
) => async (orderId: number[]): Promise<IOrder[]> => {
  try {
    //
    return (
      await _clientAccountGetApi(
        credentials,
        proxy,
      )<IOrders>(`/orders?ids=${orderId.join(',')}`)()
    ).orders;
  } catch (error) {
    void errorlog(error);

    return [];
  }
};
