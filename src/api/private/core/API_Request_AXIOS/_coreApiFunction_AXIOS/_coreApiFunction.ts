import { Credentials } from '../../../../../typescript';
import { _coreApiConfig } from './_coreApiConfig';
import { _tryToGetData } from './_tryToGetData_AXIOS';

export const _coreApiFunction = (credentials: Credentials) => {
  //
  return (VERB: 'GET' | 'POST' = 'GET') => {
    //
    return <D>(postData: D | null = null) => {
      //
      return <R>(endpoint: string) => {
        //
        return async (): Promise<R> => {
          //

          const configBuilder = _coreApiConfig<D>(credentials);
          // ->
          const getEndPoint = configBuilder(VERB);
          const endPoint = getEndPoint(endpoint);
          const getDataConfig = endPoint(postData);

          const axiosDataGetter = _tryToGetData<R, D>();
          // ->
          const dataGet = axiosDataGetter(getDataConfig);
          const data = dataGet();

          return data; // from _tryToGetData...
        };
      };
    };
  };
};
