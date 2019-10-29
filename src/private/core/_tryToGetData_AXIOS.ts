import axios from 'axios';
import { CoreApiConfig, LogErrors } from '../../typescript';
// import { requestPerSecondLimit } from './requestPerSecondLimit';
export const _tryToGetData = <R, D>(_config: CoreApiConfig<D>) => {
  return async (_logError: LogErrors): Promise<R> => {
    console.log('in axios 1');
    try {
      // requestPerSecondLimit(1)(() => axios(_config));
      // const requesLimiter = requestPerSecondLimit(5);
      // const response = requesLimiter(() => axios(_config));
      const response = await axios(_config);
      // console.log('response', response());
      const { data } = response; // await response();
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
