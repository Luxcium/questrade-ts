import { _axiosAccountGetApi } from '../../..';
import { endpointFormatDateTool } from '../../../../../utils';
import { IOrders } from '../../../../typescript';
import { Credentials } from '../../../typescript';

// + _getOrders
/** _getOrders */
export const _getOrders = (credentials: Credentials) => (startDate: string) => (
  endDate: string
) => async (stateFilter: string = 'All') =>
  (await _axiosAccountGetApi(credentials)<IOrders>(
    `/orders?${endpointFormatDateTool(
      startDate,
      endDate
    )}stateFilter=${stateFilter}`
  )()).orders;
