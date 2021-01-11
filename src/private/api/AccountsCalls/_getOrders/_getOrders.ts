import { sideEffects } from '../../../../resources/side-effects';
import {
  ClientProxyHandler,
  Credentials,
  IOrder,
  IOrders,
} from '../../../../typescript';
import { endpointFormatDateTool } from '../../../../utils';
import { _clientAccountGetApi } from '../../../routes/clientAccountGetApi/_clientAccountGetApi';

const { errorlog } = sideEffects;

// + _getOrders
/** _getOrders */
export const _getOrders = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
) => (stateFilter: string = 'All') => (startDate: string) => async (
  endDate: string,
): Promise<IOrder[]> => {
  try {
    const orders = await _clientAccountGetApi(
      credentials,
      proxy,
    )<IOrders>(
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
