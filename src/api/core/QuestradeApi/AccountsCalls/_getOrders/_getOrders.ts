import { AxiosStatic, default as axios } from 'axios';
import { _axiosAccountGetApi } from '../../..';
import { endpointFormatDateTool } from '../../../../../utils';
import { IOrders } from '../../../../typescript';
import { Credentials } from '../../../typescript';

// + _getOrders
/** _getOrders */
export const _getOrders = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => (startDate: string) => (endDate: string) => async (
  stateFilter: string = 'All'
) => {
  return (await _axiosAccountGetApi(_axios)(credentials)<IOrders>(
    `/orders?${endpointFormatDateTool(
      startDate,
      endDate
    )}stateFilter=${stateFilter}`
  )()).orders;
};
