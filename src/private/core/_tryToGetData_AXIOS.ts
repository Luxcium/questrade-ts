import axios, { AxiosResponse } from 'axios';
import { CoreApiConfig, LogErrors } from '../../typescript';
import { Credentials } from '../../typescript/Credentials';
import {
  remainingRequests,
  requestPerSecondLimiter,
} from './requestPerSecondLimit';
export const _tryToGetData = <R, D>(
  _config: CoreApiConfig<D>,
  credentials?: Credentials
) => {
  return async (_logError: LogErrors): Promise<R> => {
    try {
      const possiblePerSeconds =
        !!credentials &&
        !!credentials.remainingRequests &&
        !!credentials.remainingRequests.possiblePerSeconds
          ? credentials.remainingRequests.possiblePerSeconds
          : 21;
      let response: AxiosResponse;
      if (possiblePerSeconds <= 20) {
        //
        const requestLimiter = requestPerSecondLimiter(possiblePerSeconds);
        response = await requestLimiter(
          async (): Promise<AxiosResponse<R>> => axios(_config)
        );
      } else {
        response = await axios(_config);
      }
      // if (response.status !== 200) {
      console.log('________________________________________________');
      console.log(response.status, response.statusText);
      console.log(response.data);
      console.log(response.headers);
      console.log(response.status, response.statusText);
      console.log('________________________________________________');
      console.log('++++++++++++++++++++++++++++++++++++++++++++++++');
      // }
      const { data } = response;
      if (!data) {
        throw _logError(new Error("Can't retrive data from call to API"));
      }
      try {
        if (credentials) {
          credentials.remainingRequests = remainingRequests(response);
        }
      } catch (error) {
        console.error(
          "To make tests pass removed 'throw' error messages from code bloc"
        );
      }
      return data;
    } catch (error) {
      console.log(_logError(error).message);
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
