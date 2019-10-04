import { AxiosStatic, default as axios } from 'axios';
import { _axiosGetApi } from '../../..';
import { ISymbols } from '../../../../typescript';
import { Credentials } from '../../../typescript';
// + _getSymbolSearchCount
/** _getSymbolSearch */
export const _getSymbolSearchCount = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (prefix: string) => {
  return (await _axiosGetApi(_axios)(credentials)<ISymbols>(
    `/symbols/search?prefix=${prefix}`
  )()).symbols.length;
};
