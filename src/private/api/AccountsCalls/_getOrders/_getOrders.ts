import { Credentials, IOrder, IOrders } from '../../../../typescript';
import { endpointFormatDateTool } from '../../../../utils';
import { _axiosAccountGetApi } from '../../../routes';

// + _getOrders
/** _getOrders */
export const _getOrders = (credentials: Credentials) => (
  stateFilter: string = 'All'
) => (startDate: string) => async (endDate: string): Promise<IOrder[]> => {
  try {
    return (
      await _axiosAccountGetApi(credentials)<IOrders>(
        `/orders?${endpointFormatDateTool(
          startDate,
          endDate
        )}stateFilter=${stateFilter}`
      )()
    ).orders;
  } catch (error: any) {
    console.error(error.message);
    return [];
  }
};
