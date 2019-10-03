import { _axiosGetApi } from '../../..';
import { ISymbols } from '../../../../typescript';
import { Credentials } from '../../../typescript';

// + _getSymbolsByIDs
/** _getSymbolFromSymbolID */
export const _getSymbolsByIds = (credentials: Credentials) => async (
  symbolId: number[]
) => _axiosGetApi(credentials)<ISymbols>(`/symbols?ids=${symbolId.join()}`)();
