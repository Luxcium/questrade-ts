// tslint:disable: variable-name
import { _getEndPoinFactory } from '.';
import { QtApi } from '../../../libraries';

export const _getSymbolFromSymbolID = (qtApi: QtApi) => async (
  symbolID: any
) => {
  return _getEndPoinFactory<Promise<any>>(`/symbols/${symbolID}`)(qtApi);
};
