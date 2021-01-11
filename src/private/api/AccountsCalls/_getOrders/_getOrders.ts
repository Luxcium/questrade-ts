import { IOrder, IOrders, Logger } from '../../../../typescript';
import { endpointFormatDateTool } from '../../../../utils';

// + _getOrders
/** _getOrders */
export const _getOrders = (
  clientAccountGetApi: <R>(accountEndpoint: string) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => (stateFilter: string = 'All') => (startDate: string) => async (
  endDate: string,
): Promise<IOrder[]> => {
  try {
    const orders = await clientAccountGetApi<IOrders>(
      `/orders?${endpointFormatDateTool(
        startDate,
        endDate,
      )}&stateFilter=${stateFilter}`,
    )();
    return orders.orders;
  } catch (error) {
    void errorlog(error);

    return [];
  }
};
