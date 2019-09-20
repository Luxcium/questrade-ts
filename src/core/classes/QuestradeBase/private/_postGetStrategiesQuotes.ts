// tslint:disable: variable-name
import { _postEndPoinFactory } from '.';
import { QtApi } from '../../../libraries';

export const _postGetStrategiesQuotes = async (qtApi: Promise<QtApi>) => {
  return _postEndPoinFactory<Promise<any>>('/markets/quotes/strategies')(qtApi);
};
