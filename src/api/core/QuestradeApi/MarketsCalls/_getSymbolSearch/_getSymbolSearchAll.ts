import { AxiosStatic, default as axios } from 'axios';
import { _axiosGetApi } from '../../..';
import { ISymbols } from '../../../../typescript';
import { Credentials } from '../../../typescript';
// + _getSymbolSearchAll
/** _getSymbolSearch */
export const _getSymbolSearchAll = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (prefix: string, offset: number = 0) => {
  return (await _axiosGetApi(_axios)(credentials)<ISymbols>(
    `/symbols/search?prefix=${prefix}&offset=${offset}`
  )()).symbols;
};
