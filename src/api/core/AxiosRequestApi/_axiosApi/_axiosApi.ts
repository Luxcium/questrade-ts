import { AxiosResponse, AxiosStatic, default as axios } from 'axios';
import { logError, void0 } from '../../../../utils';
import { Credentials } from '../../typescript';

/**
 * PROVIDE: credentials, VERB string, postData with D data type (or null)
 * and endpoint string with R return type, THEN GET: a Promise<R>
 */
// Deprecated _axiosApi
void0((_axios: AxiosStatic = axios) => {
  //
  return (credentials: Credentials) => {
    //
    return <D = any>(postData: D | null = null, VERB: string = 'GET') => {
      //
      return async <R>(endpoint: string): Promise<R> => {
        //
        const url = credentials.apiUrl + endpoint;
        const method = VERB.toLowerCase() as 'get' | 'post';
        const Authorization = `Bearer ${credentials.accessToken}`;
        const location = credentials.accountNumber;
        const data = postData;
        const headers = { Authorization, location };
        const config = { url, method, headers, data };
        //
        try {
          //
          const response = (await _axios(config)) as AxiosResponse<R>;
          if (!response.data) {
            //
            throw logError(new Error("Can't retrive data from call to API"));
          }
          //
          return response.data;
          //
        } catch (error) {
          //
          throw logError(error);
          //
        }
      };
    };
  };
});
