import { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import { ITime } from '../../../../typescript';

// +!! _getServerTime
/** _getTime */
export const _getServerTime = (
  clientGetApi: <R>(
    endpoint: string,
    handlerOptions: ProxyHandlerOptions,
  ) => () => Promise<R>,
) => async (): Promise<Date> =>
  new Date(
    (await clientGetApi<ITime>('/time', { noCaching: true })()).time,
  );
