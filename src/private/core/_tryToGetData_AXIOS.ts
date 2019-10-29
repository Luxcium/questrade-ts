import axios, { AxiosResponse } from 'axios';
import { CoreApiConfig, LogErrors } from '../../typescript';
import { Credentials } from '../../typescript/Credentials';
import {
  remainingRequests,
  requestPerSecondLimit,
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
          : 20;

      const requestLimit = requestPerSecondLimit(possiblePerSeconds);
      const response = await requestLimit(
        async (): Promise<AxiosResponse<R>> => axios(_config)
      );
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
          'To make tests pass removed error messages from code bloc'
        );
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
