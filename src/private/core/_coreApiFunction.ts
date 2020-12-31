import { Credentials } from '../../typescript';
import { _coreApiConfig } from './_coreApiConfig';
import { _logErrors } from './_logErrors';
import { _tryToGetAxiosData } from './_tryToGetData_AXIOS';

export const _coreApiFunction = (credentials: Credentials) => {
  // ~~>
  return (VERB: 'GET' | 'POST') => {
    // ~~>
    return <D>(postData: D | null) => {
      // ~~>
      return <R>(endpoint: string) => {
        // ~~>
        return async (): Promise<R> => {
          //-->
          const configBuilder = _coreApiConfig<D>(credentials);
          //-->
          const getEndPoint = configBuilder(VERB);
          //-->
          const endPoint = getEndPoint(endpoint);
          //-->
          const dataConfig = endPoint(postData);
          //-->
          const dataGetter = _tryToGetAxiosData<R, D>(dataConfig, credentials);
          //-->
          const data = dataGetter(_logErrors);
          // ~~>
          return data; // from _tryToGetData...
        };
      };
    };
  };
};
