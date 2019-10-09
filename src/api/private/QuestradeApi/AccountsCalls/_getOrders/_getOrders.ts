import { AxiosStatic, default as axios } from 'axios';
import { _axiosAccountGetApi } from '../../..';
import { IOrder, IOrders } from '../../../../typings';
import { endpointFormatDateTool } from '../../../../utils';
import { Credentials } from '../../../typescript';

// + _getOrders
/** _getOrders */
export const _getOrders = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => (stateFilter: string = 'All') => (startDate: string) => async (
  endDate: string
): Promise<IOrder[]> => {
  return (await _axiosAccountGetApi(_axios)(credentials)<IOrders>(
    `/orders?${endpointFormatDateTool(
      startDate,
      endDate
    )}stateFilter=${stateFilter}`
  )()).orders;
};
