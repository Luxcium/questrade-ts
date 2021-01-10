import { errorlog } from '../../../../resources/side-effects';
import {
  ClientProxyHandler,
  Credentials,
  IExecution,
  IExecutions,
} from '../../../../typescript';
import { endpointFormatDateTool } from '../../../../utils';
import { _clientAccountGetApi } from '../../../routes';

// const { errorlog } = sideEffects;

// + _getExecutions
/** _getExecutions */
export const _getExecutions = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
) => (startDate: string) => async (endDate: string): Promise<IExecution[]> => {
  try {
    const executions = await _clientAccountGetApi(
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
