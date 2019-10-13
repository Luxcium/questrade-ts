import axios, { AxiosStatic } from 'axios';
import { Credentials } from '../../../../../typescript';
import { void0 } from '../../../../utils';
import { _coreApiConfig } from './_coreApiConfig';
import { _tryToGetData } from './_tryToGetData_AXIOS';

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
            return _tryToGetData<R, D>(
              //
              _axios,
              _coreApiConfig<D>(credentials, VERB, endpoint, postData)
            );
          };
        };
      };
    };
  };
};
