import { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import { IOptionsQuote, Logger } from '../../../../typescript';
import { _getMarketsQuotesOptions } from './_getMarketsQuotesOptions';

export const _getQuotesOptionsByIds = (
  clientPostApi: <D>(
    postData: D | null,
  ) => <R>(
    endpoint: string,
    handlerOptions: ProxyHandlerOptions,
  ) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => async (optionIds: number[]): Promise<IOptionsQuote[]> => {
  try {
    return _getMarketsQuotesOptions(clientPostApi)(
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
