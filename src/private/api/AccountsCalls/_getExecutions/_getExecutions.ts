import { sideEffects } from '../../../../default-behaviour';
import {
  AxiosProxyHandler,
  Credentials,
  IExecution,
  IExecutions,
} from '../../../../typescript';
import { endpointFormatDateTool } from '../../../../utils';
import { _axiosAccountGetApi } from '../../../routes';

const { errorlog } = sideEffects;

// + _getExecutions
/** _getExecutions */
export const _getExecutions = (
  credentials: Credentials,
  proxy?: AxiosProxyHandler,
) => (startDate: string) => async (endDate: string): Promise<IExecution[]> => {
  try {
    const executions = await _axiosAccountGetApi(
      credentials,
      proxy,
    )<IExecutions>(
      `/executions?${endpointFormatDateTool(startDate, endDate)}`,
    )();
    return executions.executions;
  } catch (error) {
    void errorlog(error);

    return [];
  }
};
