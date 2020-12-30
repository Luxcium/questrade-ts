import { Credentials, ISymbols } from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

// + _getSymbolSearchCount
/** _getSymbolSearch */
export const _getSymbolSearchCount = (credentials: Credentials) => async (
  prefix: string
): Promise<number> => {
  try {
    const endpoint = `/symbols/search?prefix=${prefix}`;
    const getSymbols = _axiosGetApi(credentials)<ISymbols>(endpoint );
    const symbols = await getSymbols();

    return symbols.symbolList.length;
  } catch (error) {
    console.error(error);
    return Number.NaN;
  }
};
