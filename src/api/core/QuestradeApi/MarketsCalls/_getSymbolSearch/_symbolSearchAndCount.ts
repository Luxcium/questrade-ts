import { _getSymbolSearch, _getSymbolSearchCount } from '.';
import { Credentials } from '../../../typescript';
import { SymbolSearchAndCount } from './typescript';

export const _symbolSearchAndCount = (credentials: Credentials) => {
  const symbolSearch: any = _getSymbolSearch(credentials);
  symbolSearch.count = _getSymbolSearchCount(credentials);
  return symbolSearch as SymbolSearchAndCount;
};
