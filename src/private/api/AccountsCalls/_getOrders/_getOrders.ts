import { Credentials, IOrder, IOrders, IProxy } from '../../../../typescript';
import { endpointFormatDateTool } from '../../../../utils';
import { _axiosAccountGetApi } from '../../../routes';

// + _getOrders
/** _getOrders */
export const _getOrders = (credentials: Credentials, proxy?: IProxy) => (
  stateFilter: string = 'All'
) => (startDate: string) => async (endDate: string): Promise<IOrder[]> => {
  try {
    const orders = await _axiosAccountGetApi(
      credentials,
      proxy
    )<IOrders>(
      `/orders?${endpointFormatDateTool(
        startDate,
        endDate
      )}&stateFilter=${stateFilter}`
    )();
    return orders.orders;
  } catch (error) {
    console.error(error);
    return [];
  }
};
