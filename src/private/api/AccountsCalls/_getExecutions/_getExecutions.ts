import { Credentials, IExecution, IExecutions } from '../../../../typescript';
import { endpointFormatDateTool } from '../../../../utils';
import { _axiosAccountGetApi } from '../../../routes';

// + _getExecutions
/** _getExecutions */
export const _getExecutions =
  (credentials: Credentials) =>
  (startDate: string) =>
  async (endDate: string): Promise<IExecution[]> => {
    try {
      //
      return (
        await _axiosAccountGetApi(credentials)<IExecutions>(
          `/executions?${endpointFormatDateTool(startDate, endDate)}`
        )()
      ).executions;
    } catch (error: any) {
      console.error(error.message);
      return [];
    }
  };
