import { ITime } from '../../../../typescript';

// +!! _getServerTime
/** _getTime */
export const _getServerTime = (
  clientGetApi: <R>(endpoint: string) => () => Promise<R>,
) => async (): Promise<Date> =>
  new Date((await clientGetApi<ITime>('/time')()).time);
