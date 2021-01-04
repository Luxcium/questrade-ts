import { sideEffects } from '../../../../default-behaviour';
import {
  AxiosProxyHandler,
  Credentials,
  IOrder,
  IOrders,
} from '../../../../typescript';
import { endpointFormatDateTool } from '../../../../utils';
import { _axiosAccountGetApi } from '../../../routes';

const { errorlog } = sideEffects;

// + _getOrders
/** _getOrders */
export const _getOrders = (
  credentials: Credentials,
  proxy?: AxiosProxyHandler,
) => (stateFilter: string = 'All') => (startDate: string) => async (
  endDate: string,
): Promise<IOrder[]> => {
  try {
    const orders = await _axiosAccountGetApi(
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
