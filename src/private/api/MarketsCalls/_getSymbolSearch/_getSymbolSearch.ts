import { Credentials, ISymbolSearchResult } from '../../../../typescript';
import { _getSymbolSearchAll } from './_getSymbolSearchAll';

// + _getSymbolSearch
/** _getSymbolSearch */
export const _getSymbolSearch = (credentials: Credentials) => async (
  prefix: string,
  offset = 0
): Promise<ISymbolSearchResult> => {
  const symbols = await _getSymbolSearchAll(credentials)(prefix, offset);
  const count = symbols.length;
  const result = symbols[0];
  result.count = count;
  return result;
};
