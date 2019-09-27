// tslint:disable: variable-name
import { _accountEndPoinFactory } from '.';
import { QtApi } from '../../../libraries';
import { IExecution, IExecutions } from '../../../types';
export const _getExecutions = (qtApi: QtApi) => async (): Promise<
  IExecution[]
> =>
  (await _accountEndPoinFactory<Promise<IExecutions>>('/executions')(qtApi))
    .executions;
