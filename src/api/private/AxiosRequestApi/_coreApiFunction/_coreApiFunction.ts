import axios, { AxiosStatic } from 'axios';
import { void0 } from '../../../../utils';
import { Credentials } from '../../typescript';
import { _coreApiConfig, _tryToGetData } from './';

export const _coreApiFunction = (_axios: AxiosStatic = axios) => {
  //
  void0(_axios);
  return (credentials: Credentials) => {
    //
    return (VERB: 'GET' | 'POST' = 'GET') => {
      //
      return <D>(postData: D | null = null) => {
        //
        return <R>(endpoint: string) => {
          //
          return async (): Promise<R> => {
            //
            return _tryToGetData<R>(
              //
              _coreApiConfig<D>(credentials, VERB, endpoint, postData)
            );
          };
        };
      };
    };
  };
};
