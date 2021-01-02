import { AxiosProxyHandler, Credentials } from '../../typescript';
import { _coreApiConfig } from './_coreApiConfig';
import { _logErrors } from './_logErrors';
import { _tryToGetData } from './X_tryToGetData_AXIOS_X';

export const _coreApiFunction = (
  credentials: Credentials,
  proxy?: AxiosProxyHandler
) => {
  //
  return (VERB: 'GET' | 'POST') => {
    //
    return <D>(postData: D | null) => {
      //
      return <R>(endpoint: string) => {
        //
        return async (): Promise<R> => {
          //

          const configBuilder = _coreApiConfig<D>(credentials, proxy);
          // ->
          const getEndPoint = configBuilder(VERB);
          const endPoint = getEndPoint(endpoint);
          const getDataConfig = endPoint(postData);

          const axiosDataGetter = _tryToGetData<R, D>(
            getDataConfig,
            credentials,
            proxy
          );
          // ->
          const data = axiosDataGetter(_logErrors);

          return data; // from _tryToGetData...
        };
      };
    };
  };
};
