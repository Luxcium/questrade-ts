import { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import { ITime, Logger } from '../../../../typescript';

// +!! _getServerTime
/** _getTime */
export const _getServerTime = (
  clientGetApi: <R>(
    endpoint: string,
    handlerOptions: ProxyHandlerOptions,
  ) => () => Promise<R>,
  errorlog: Logger = (error: any) => error /* logger */,
) => async (): Promise<Date> => {
  try {
    return new Date(
      (await clientGetApi<ITime>('/time', { noCaching: true })()).time,
    );
  } catch (error) {
    void errorlog(`calling '/time' endpoint ${error.message}`);

    return new Date();
  }
};
