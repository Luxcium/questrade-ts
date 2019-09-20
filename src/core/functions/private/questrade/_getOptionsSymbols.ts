// tslint:disable: variable-name
import { _getEndPoinFactory } from '.';
import { QtApi } from '../../../libraries';
export const _getOptionsSymbols = (qtApi: Promise<QtApi>) => async (
  symbolID: string
) => {
  return _getEndPoinFactory<Promise<any>>(`/symbols/${symbolID}/options`)(
    qtApi
  );
};
