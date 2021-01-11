import {
  ClientProxyHandler,
  Credentials,
  IOptionsQuote,
} from '../../../../typescript';
import { _getMarketsQuotesOptions } from './_getMarketsQuotesOptions';

export const _getQuotesOptionsByIds = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
  errorlog: (error: any) => any = (error: any) => error,
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
