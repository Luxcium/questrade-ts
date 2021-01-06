import { sideEffects } from '../../../../resources/side-effects/default-behaviour';
import {
  AxiosProxyHandler,
  Credentials,
  ISymbol,
  ISymbols,
} from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

const { errorlog } = sideEffects;

// + _getSymbolsByIDs
/** _getSymbolFromSymbolID */
export const _getSymbolsByIds = (
  credentials: Credentials,
  proxy?: AxiosProxyHandler,
) => async (stockId: number[]): Promise<ISymbol[]> => {
  try {
    return (
      await _axiosGetApi(
        credentials,
        proxy,
      )<ISymbols>(`/symbols?ids=${stockId.join()}`)()
    ).symbols;
  } catch (error) {
    void errorlog(error);

    return [];
  }
};
