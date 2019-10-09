import { AxiosStatic, default as axios } from 'axios';
import { Credentials } from '../../../../typescript';
import { _getSymbolSearch, _getSymbolSearchCount } from '../_getSymbolSearch';
import { SymbolSearchAndCount } from './typescript';

export const _symbolSearchAndCount = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
): SymbolSearchAndCount => {
  const symbolSearch: SymbolSearchAndCount = _getSymbolSearch(_axios)(
    credentials
  );
  symbolSearch.count = _getSymbolSearchCount(_axios)(credentials);
  return symbolSearch as SymbolSearchAndCount;
};
