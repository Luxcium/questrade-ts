// import { errorlog } from '../../../../resources/side-effects';
import { IExecution, IExecutions, Logger } from '../../../../typescript';
import { urlEncodeDateTool } from '../../../../utils';

// + _getExecutions
/** _getExecutions */
export const _getExecutions = (
  clientAccountGetApi: <R>(endpoint: string) => () => Promise<R>,

  errorlog: Logger = (...error: any[]) => error,
) => (startDate: string) => async (endDate: string): Promise<IExecution[]> => {
  try {
    const executions = await clientAccountGetApi<IExecutions>(
      `/executions?${urlEncodeDateTool(startDate, endDate)}`,
    )();

    return executions.executions;
  } catch (error) {
    void errorlog(error);

    return [];
  }
};
