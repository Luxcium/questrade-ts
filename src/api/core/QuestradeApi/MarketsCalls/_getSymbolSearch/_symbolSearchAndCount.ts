import { AxiosStatic, default as axios } from 'axios';
import { _getSymbolSearch, _getSymbolSearchCount } from '.';
import { Credentials } from '../../../typescript';
import { SymbolSearchAndCount } from './typescript';

export const _symbolSearchAndCount = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => {
  const symbolSearch: any = _getSymbolSearch(_axios)(credentials);
  symbolSearch.count = _getSymbolSearchCount(_axios)(credentials);
  return symbolSearch as SymbolSearchAndCount;
};
