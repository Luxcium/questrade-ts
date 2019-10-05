import { AxiosStatic, default as axios } from 'axios';
import { _axiosGetApi } from '../../..';
import { ISymbols } from '../../../../typescript';
import { Credentials } from '../../../typescript';

// + _getSymbolsByIDs
/** _getSymbolFromSymbolID */
export const _getSymbolsByIds = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (symbolId: number[]): Promise<ISymbols> =>
  _axiosGetApi(_axios)(credentials)<ISymbols>(
    `/symbols?ids=${symbolId.join()}`
  )();
