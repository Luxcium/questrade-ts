// tslint:disable: variable-name
import { _postEndPoinFactory } from '.';
import { QtApi } from '../../../libraries';

export const _postGetStrategiesQuotes = (qtApi: QtApi) => async (data: any) => {
  return _postEndPoinFactory<Promise<any>>('/markets/quotes/strategies')(qtApi)(
    data
  );
};
