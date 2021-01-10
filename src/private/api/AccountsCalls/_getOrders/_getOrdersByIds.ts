import { errorlog } from '../../../../resources/side-effects';
import {
  ClientProxyHandler,
  Credentials,
  IOrder,
  IOrders,
} from '../../../../typescript';
import { _clientAccountGetApi } from '../../../routes';

// const { errorlog } = sideEffects;

// + _getOrderByIds
/** _getOrders */
export const _getOrdersByIds = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
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
