import axios, { AxiosResponse } from 'axios';
import { CoreApiConfig, LogErrors } from '../../typescript';
import { requestPerSecondLimit } from './requestPerSecondLimit';
export const _tryToGetData = <R, D>(_config: CoreApiConfig<D>) => {
  return async (_logError: LogErrors): Promise<R> => {
    try {
      const requestLimit = requestPerSecondLimit(0.25);
      const response = await requestLimit(
        async (): Promise<AxiosResponse<R>> => axios(_config)
      );
      const { data } = response;
      console.log('data', data);
      if (!data) {
        throw _logError(new Error("Can't retrive data from call to API"));
      }

      return data;
    } catch (error) {
      _logError(error);
      throw error;
    }
  };
};

// logData(response);
// remainingRequests(response);
// logRemanings(remainingRequests(response));

// console.log(':::RESPONSE==>');
// console.dir(res);
// console.log('void 0', void 0);
// console.log('<==RESPONSE:::');
// console.log('DATA:::', data);
// console.log('JSON STRING DATA:::', JSON.stringify(data));

// console.log('CONFIG:::', JSON.stringify(_config));

//  const requester = () =>''
//  requester()
