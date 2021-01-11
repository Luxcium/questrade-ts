// import { errorlog } from '../../../../resources/side-effects';
import { IMarket, IMarkets, Logger } from '../../../../typescript';

// + _getMarkets
/** _getMarkets */
export const _getMarkets = (
  clientGetApi: <R>(endpoint: string) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => async (): Promise<IMarket[]> => {
  try {
    return (await clientGetApi<IMarkets>('/markets')()).markets;
  } catch (error) {
    void errorlog(error);
    return [];
  }
};
