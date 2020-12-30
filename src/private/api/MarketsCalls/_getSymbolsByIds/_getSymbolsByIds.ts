import { Credentials, ISymbol, ISymbols } from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

// + _getSymbolsByIDs
/** _getSymbolFromSymbolID */
export const _getSymbolsByIds = (credentials: Credentials) => async (
  stockId: number[]
): Promise<ISymbol[]> => {
  try {
    return (
      await _axiosGetApi(credentials)<ISymbols>(
        `/symbols?ids=${stockId.join()}`
      )()
    ).symbolList;
  } catch (error) {
    console.error(error);
    return [];
  }
};
