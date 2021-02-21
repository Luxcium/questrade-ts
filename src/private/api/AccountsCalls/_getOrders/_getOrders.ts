import type { IOrder, IOrders, Logger } from '../../../../typescript';
import { urlEncode, urlEncodeDateTool } from '../../../../utils';

// + _getOrders
/** _getOrders */
export const _getOrders = (
  clientAccountGetApi: <R>(accountEndpoint: string) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => (stateFilter = 'All') => (startDate: string) => async (
  endDate: string,
): Promise<IOrder[]> => {
  try {
    const orders = await clientAccountGetApi<IOrders>(
      `/orders?${urlEncodeDateTool(startDate, endDate)}&stateFilter=${urlEncode(
        stateFilter,
      )}`,
    )();

    return orders.orders;
  } catch (error) {
    void errorlog(error);

    return [];
  }
};
