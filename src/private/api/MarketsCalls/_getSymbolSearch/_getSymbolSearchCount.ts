// import { errorlog } from '../../../../resources/side-effects';
import {
  ClientProxyHandler,
  Credentials,
  ISymbols,
} from '../../../../typescript';
import { _clientGetApi } from '../../../routes';

// + _getSymbolSearchCount
/** _getSymbolSearch */
export const _getSymbolSearchCount = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
  errorlog: (error: any) => any = (error: any) => error,
) => async (prefix: string): Promise<number> => {
  try {
    const endpoint = `/symbols/search?prefix=${prefix}`;
    const getSymbols = _clientGetApi(credentials, proxy)<ISymbols>(endpoint);
    const symbols = await getSymbols();

    return symbols.symbols.length;
  } catch (error) {
    void errorlog(error);

    return Number.NaN;
  }
};
