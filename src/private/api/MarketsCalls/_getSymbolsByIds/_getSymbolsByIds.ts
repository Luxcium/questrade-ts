// import { errorlog } from '../../../../resources/side-effects';
import {
  ClientProxyHandler,
  Credentials,
  ISymbol,
  ISymbols,
} from '../../../../typescript';
import { _clientGetApi } from '../../../routes';

// + _getSymbolsByIDs
/** _getSymbolFromSymbolID */
export const _getSymbolsByIds = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
  errorlog: (error: any) => any = (error: any) => error,
) => async (stockId: number[]): Promise<ISymbol[]> => {
  try {
    return (
      await _clientGetApi(
        credentials,
        proxy,
      )<ISymbols>(`/symbols?ids=${stockId.join()}`)()
    ).symbols;
  } catch (error) {
    void errorlog(error);

    return [];
  }
};
