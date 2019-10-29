import { Credentials } from '../../typescript';
import { remainingRequests } from './requestPerSecondLimit';
import { _coreApiConfig } from './_coreApiConfig';
import { _logErrors } from './_logErrors';
import { _tryToGetData } from './_tryToGetData_AXIOS';

export const _coreApiFunction = (credentials: Credentials) => {
  //
  return (VERB: 'GET' | 'POST') => {
    //
    return <D>(postData: D | null) => {
      //
      return <R>(endpoint: string) => {
        //
        return async (): Promise<R> => {
          //

          const configBuilder = _coreApiConfig<D>(credentials);
          // ->
          const getEndPoint = configBuilder(VERB);
          // ->
          const endPoint = getEndPoint(endpoint);
          // ->
          const getDataConfig = endPoint(postData);
          // ->
          const axiosDataGetter = _tryToGetData<R, D>(
            getDataConfig,
            credentials
          );
          // ->
          const response = axiosDataGetter(_logErrors);
          //
          credentials.remainingRequests = remainingRequests(await response);
          //
          return (await response).data; // from _tryToGetData...
        };
      };
    };
  };
};
