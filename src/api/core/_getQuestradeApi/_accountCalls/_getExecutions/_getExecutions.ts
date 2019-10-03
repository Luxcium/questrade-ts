import { _axiosAccountGetApi } from '../../..';
import { endpointFormatDateTool } from '../../../../../utils';
import { Credentials, IExecutions } from '../../../../typescript';

// + _getExecutions
/** _getExecutions */
export const _getExecutions = (credentials: Credentials) => (
  startDate: string
) => async (endDate: string) =>
  (await _axiosAccountGetApi(credentials)<IExecutions>(
    `/executions?${endpointFormatDateTool(startDate, endDate)}`
  )()).executions;
