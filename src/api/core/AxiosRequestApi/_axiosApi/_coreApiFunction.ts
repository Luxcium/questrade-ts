import axios, { AxiosResponse, AxiosStatic } from 'axios';
import { logError } from '../../../../utils';
import { Credentials } from '../../typescript';

export const _coreApiFunction = (_axios: AxiosStatic = axios) => {
  //
  return (credentials: Credentials) => {
    //
    return (VERB: string = 'GET') => {
      //
      return <R>(endpoint: string) => {
        //
        return async <D = any>(postData: D | null = null): Promise<R> => {
          //
          return tryToGetData<R>(
            //
            _coreApiConfig(credentials, VERB, endpoint, postData)
          );
        };
      };
    };
  };
};

function _coreApiConfig(
  credentials: Credentials,
  VERB: any,
  endpoint: string,
  postData: any
): any {
  const url = credentials.apiUrl + endpoint;
  const method = VERB.toLowerCase() as 'get' | 'post';
  const Authorization = `Bearer ${credentials.accessToken}`;
  const location = credentials.accountNumber;
  const data: any | null = postData;
  const headers = { Authorization, location };
  const config = { url, method, headers, data };

  return config;
}

async function tryToGetData<R>(
  _config: any,
  _axios: any = axios,
  _logError: any = logError
): Promise<R> {
  //

  try {
    const response = (await _axios(_config)) as AxiosResponse<R>;
    if (!response.data) {
      throw _logError(new Error("Can't retrive data from call to API"));
    }

    return response.data;
  } catch (error) {
    throw _logError(error);
  }
}
