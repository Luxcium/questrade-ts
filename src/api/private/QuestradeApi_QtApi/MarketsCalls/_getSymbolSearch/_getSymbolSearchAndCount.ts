import { AxiosStatic, default as axios } from 'axios';
import { Credentials, SymbolSearchAndCount } from '../../../../../typescript';
import { _getSymbolSearchCount } from '../../MarketsCalls';
import { _getSymbolSearch } from './_getSymbolSearch';

export const _getSymbolSearchAndCount = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
): SymbolSearchAndCount => {
  const symbolSearch: SymbolSearchAndCount = _getSymbolSearch(_axios)(
    credentials
  );
  symbolSearch.count = _getSymbolSearchCount(_axios)(credentials);
  return symbolSearch as SymbolSearchAndCount;
};
