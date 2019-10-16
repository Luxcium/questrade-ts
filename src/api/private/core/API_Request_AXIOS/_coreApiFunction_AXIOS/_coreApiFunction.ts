import { Credentials } from '../../../../../typescript';
import { logErrors } from '../../../../utils';
import { _coreApiConfig } from './_coreApiConfig';
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
          const endPoint = getEndPoint(endpoint);
          const getDataConfig = endPoint(postData);

          const axiosDataGetter = _tryToGetData<R, D>(getDataConfig);
          // ->
          const data = axiosDataGetter(logErrors);

          return data; // from _tryToGetData...
        };
      };
    };
  };
};
