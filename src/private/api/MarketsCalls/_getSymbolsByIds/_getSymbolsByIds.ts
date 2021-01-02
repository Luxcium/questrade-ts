import {
  AxiosProxyHandler,
  Credentials,
  ISymbol,
  ISymbols,
} from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

// + _getSymbolsByIDs
/** _getSymbolFromSymbolID */
export const _getSymbolsByIds = (
  credentials: Credentials,
  proxy?: AxiosProxyHandler
) => async (stockId: number[]): Promise<ISymbol[]> => {
  try {
    return (
      await _axiosGetApi(
        credentials,
        proxy
      )<ISymbols>(`/symbols?ids=${stockId.join()}`)()
    ).symbols;
  } catch (error) {
    console.error(error);
    return [];
  }
};
