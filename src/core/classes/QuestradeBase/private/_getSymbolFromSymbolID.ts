// tslint:disable: variable-name
import { _getEndPoinFactory } from '.';
import { QtApi } from '../../../libraries';

export const _getSymbolFromSymbolID = async (qtApi: Promise<QtApi>) => {
  return _getEndPoinFactory<Promise<any>>('/symbols')(qtApi);
};
