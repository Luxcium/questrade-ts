import axios, { AxiosResponse, AxiosStatic } from 'axios';
import { CoreApiConfig, LogErrors } from '../../../../../typescript';
import { logErrors } from '../../../../utils';

export const _tryToGetData = <R, D>(_axios: AxiosStatic = axios) => {
  return (_config: CoreApiConfig<D>) => {
    return async (_logError: LogErrors = logErrors): Promise<R> => {
      try {
        const data: void | R = await _axios(_config)
          .then((res: AxiosResponse<R>) => {
            const rData = res.data;
            console.log(rData);
            return rData;
          })
          .catch(error => console.log(error));
        if (!data) {
          throw _logError(new Error("Can't retrive data from call to API"));
        }
        console.log(data);
        return data;
      } catch (error) {
        throw _logError(error);
      }
    };
  };
};
