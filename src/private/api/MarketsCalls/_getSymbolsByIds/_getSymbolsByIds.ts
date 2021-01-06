import { sideEffects } from '../../../../resources/side-effects/default-behaviour';
import {
  ClientProxyHandler,
  Credentials,
  ISymbol,
  ISymbols,
} from '../../../../typescript';
import { _clientGetApi } from '../../../routes';

const { errorlog } = sideEffects;

// + _getSymbolsByIDs
/** _getSymbolFromSymbolID */
export const _getSymbolsByIds = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
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
