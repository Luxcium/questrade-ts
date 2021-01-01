import { Credentials, IProxy, ISymbol, ISymbols } from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

// + _getSymbolsByIDs
/** _getSymbolFromSymbolID */
export const _getSymbolsByIds = (
  credentials: Credentials,
  proxy?: IProxy
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
