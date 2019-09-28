// tslint:disable: variable-name
import { _getEndPoinFactory } from '.';
import { QtApi } from '../../../libraries';
import { IMarkets } from '../../../types';
export const _getMarkets = async (qtApi: QtApi) => {
  return _getEndPoinFactory<Promise<IMarkets>>('/markets')(qtApi);
};
