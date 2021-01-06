import { sideEffects } from '../../../../resources/side-effects/default-behaviour';
import {
  AxiosProxyHandler,
  Credentials,
  IOptionsQuote,
} from '../../../../typescript';
import { _getMarketsQuotesOptions } from './_getMarketsQuotesOptions';

const { errorlog } = sideEffects;

export const _getQuotesOptionsByIds = (
  credentials: Credentials,
  proxy?: AxiosProxyHandler,
) => async (optionIds: number[]): Promise<IOptionsQuote[]> => {
  try {
    return _getMarketsQuotesOptions(credentials, proxy)(
      optionIds,
      0,
      '',
      null,
      0,
      0,
    );
  } catch (error) {
    void errorlog(error);

    return [];
  }
};
