// Import { errorlog } from '../../../../resources/side-effects';
import { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import { IMarket, IMarkets, Logger } from '../../../../typescript';

// + _getMarkets
/** _getMarkets */
export const _getMarkets = (
  clientGetApi: <R>(
    endpoint: string,
    handlerOptions: ProxyHandlerOptions,
  ) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => async (): Promise<IMarket[]> => {
  try {
    return (await clientGetApi<IMarkets>('/markets', { noCaching: true })())
      .markets;
  } catch (error) {
    void errorlog(error.message);

    return [];
  }
};
