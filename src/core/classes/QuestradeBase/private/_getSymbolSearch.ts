// tslint:disable: variable-name
import { _getEndPoinFactory } from '.';
import { QtApi } from '../../../libraries';
export const _getSymbolSearch = (qtApi: Promise<QtApi>) => async (
  prefix: string
) => {
  return _getEndPoinFactory<Promise<any>>(`/symbols/search?prefix=${prefix}`)(
    qtApi
  );
};
