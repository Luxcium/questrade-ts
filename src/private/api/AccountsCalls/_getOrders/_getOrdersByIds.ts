import { sideEffects } from '../../../../resources/side-effects/default-behaviour';
import {
  AxiosProxyHandler,
  Credentials,
  IOrder,
  IOrders,
} from '../../../../typescript';
import { _axiosAccountGetApi } from '../../../routes';

const { errorlog } = sideEffects;

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
    void errorlog(error);

    return [];
  }
};
