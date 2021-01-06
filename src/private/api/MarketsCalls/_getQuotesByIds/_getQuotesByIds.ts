import { sideEffects } from '../../../../resources/side-effects/default-behaviour';
import {
  ClientProxyHandler,
  Credentials,
  IQuote,
  IQuotes,
} from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

const { errorlog } = sideEffects;

// + _getQuotesByID
/** _getQuotesFromSymbolID */
export const _getQuotesByIds = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
) => async (ids: number[]): Promise<IQuote[]> => {
  try {
    return (
      await _axiosGetApi(
        credentials,
        proxy,
      )<IQuotes>(`/markets/quotes?ids=${ids.join(',')}`)()
    ).quotes;
  } catch (error) {
    void errorlog(error);

    return [];
  }
};
