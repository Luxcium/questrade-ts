import { ClientPromise, ClientRequestConfig, ClientStatic } from '../types';

export function client<R>(
  config: ClientRequestConfig | string,
  axioLikeClient: ClientStatic,
): ClientPromise<R> {
  if (typeof config !== 'string') {
    return axioLikeClient(config);
  }

  return axioLikeClient(config);
}
