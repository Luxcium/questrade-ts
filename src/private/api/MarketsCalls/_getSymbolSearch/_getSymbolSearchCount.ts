import {
  AxiosProxyHandler,
  Credentials,
  ISymbols,
} from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

// + _getSymbolSearchCount
/** _getSymbolSearch */
export const _getSymbolSearchCount = (
  credentials: Credentials,
  proxy?: AxiosProxyHandler
) => async (prefix: string): Promise<number> => {
  try {
    const endpoint = `/symbols/search?prefix=${prefix}`;
    const getSymbols = _axiosGetApi(credentials, proxy)<ISymbols>(endpoint);
    const symbols = await getSymbols();

    return symbols.symbols.length;
  } catch (error) {
    console.error(error);
    return Number.NaN;
  }
};
