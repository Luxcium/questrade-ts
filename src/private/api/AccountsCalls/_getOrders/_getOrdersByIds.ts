import type { IOrder, IOrders, Logger } from '../../../../typescript';
import { urlEncode } from '../../../../utils';

// + _getOrderByIds
/** _getOrders */
export const _getOrdersByIds = (
  clientAccountGetApi: <R>(accountEndpoint: string) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => async (orderId: number[]): Promise<IOrder[]> => {
  try {
    //
    return (
      await clientAccountGetApi<IOrders>(
        `/orders?ids=${urlEncode(orderId.join(','))}`,
      )()
    ).orders;
  } catch (error) {
    void errorlog(error);

    return [];
  }
};
