import { AxiosStatic, default as axios } from 'axios';
import {
  Credentials,
  IExecution,
  IExecutions,
} from '../../../../../typescript';
import { endpointFormatDateTool } from '../../../../utils';
import { _axiosAccountGetApi } from '../../../core/AxiosRequestApiFactory';

// + _getExecutions
/** _getExecutions */
export const _getExecutions = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => (startDate: string) => async (endDate: string): Promise<IExecution[]> => {
  //
  return (await _axiosAccountGetApi(_axios)(credentials)<IExecutions>(
    `/executions?${endpointFormatDateTool(startDate, endDate)}`
  )()).executions;
};
