import axios, { AxiosStatic } from 'axios';
import { CoreApiConfig, LogErrors } from '../../../../../typescript';
import { logErrors } from '../../../../utils';

export const _tryToGetData = <R, D>(_axios: AxiosStatic = axios) => {
  return (_config: CoreApiConfig<D>) => {
    return async (_logError: LogErrors = logErrors): Promise<R> => {
      console.log(_config);

      try {
        const res = await _axios(_config);
        const data: void | R = res.data;
        if (!data) {
          throw _logError(new Error("Can't retrive data from call to API"));
        }
        // console.log(JSON.stringify(data));
        console.log(data);
        return data;
      } catch (error) {
        throw _logError(error);
      }
    };
  };
};
