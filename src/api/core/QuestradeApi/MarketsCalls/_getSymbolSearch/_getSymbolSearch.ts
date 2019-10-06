import { AxiosStatic, default as axios } from 'axios';
import { _getSymbolSearchAll } from '.';
import { Credentials } from '../../../typescript';
import { ISymbolSearchResult } from './typescript';

// + _getSymbolSearch
/** _getSymbolSearch */
export const _getSymbolSearch = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (
  prefix: string,
  offset: number = 0
): Promise<ISymbolSearchResult> => {
  const symbols = await _getSymbolSearchAll(_axios)(credentials)(
    prefix,
    offset
  );
  const count = symbols.length;
  const result = symbols[0];
  result.count = count;
  return result;
};
