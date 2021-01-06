import { ClientProxyHandler, Credentials } from '../../typescript';
import { _coreApiConfig } from './_coreApiConfig';
import { _logErrors } from './_logErrors';
import { _tryToGetData } from './XX-try-to-get-data-from-http-client-XX';

export const _coreApiFunction = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
) => {
  // ~~>
  return (VERB: 'GET' | 'POST') => {
    // ~~>
    return <D>(postData: D | null) => {
      // ~~>
      return <R>(endpoint: string) => {
        // ~~>
        return async (): Promise<R> => {
          // ->
          const configBuilder = _coreApiConfig(credentials);
          // ->
          const getEndPoint = configBuilder(VERB);
          // ->
          const endPoint = getEndPoint(endpoint);
          // ->
          const getDataConfig = endPoint(postData);
          // ->
          const clientDataGetter = _tryToGetData<R>(
            getDataConfig,
            credentials,
            proxy,
          );
          // ->
          const data = clientDataGetter(_logErrors);
          // ~~>
          return data; // from _tryToGetData...
        };
      };
    };
  };
};
