import axios, { AxiosResponse } from 'axios';
import crypto from 'crypto';

import {
  CoreApiConfig,
  Credentials,
  IProxy,
  LogErrors,
} from '../../typescript';
import {
  remainingRequests,
  remaningTimeString,
  requestPerSecondLimiter,
} from './requestPerSecondLimit';

export const _tryToGetData = <R, D>(
  _config: CoreApiConfig<D>,
  credentials?: Credentials,
  proxy?: IProxy
) => {
  return async (_logError: LogErrors): Promise<R> => {
    try {
      const possiblePerSeconds =
        credentials?.remainingRequests?.possiblePerSeconds ?? 21;
      let response: AxiosResponse;
      if (possiblePerSeconds <= 20) {
        //
        // TODO: use proxy
        void proxy;
        const requestLimiter = requestPerSecondLimiter(possiblePerSeconds);
        response = await requestLimiter(
          async (): Promise<AxiosResponse<R>> => axios(_config)
        );
      } else {
        response = await axios(_config);
      }
      if (response.status !== 200) {
        console.log('________________________________________________');
        console.log(response.status, response.statusText);
        console.log(response.data);
        console.table(response.headers);
        console.log(
          remaningTimeString(
            credentials?.remainingRequests?.secondsRemaning
              ? credentials.remainingRequests.secondsRemaning
              : 0
          )
        );
        console.log(response.status, response.statusText);
        console.log('________________________________________________');
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++');
      } else {
        // console.log(
        //   remaningTimeString(
        //     credentials?.remainingRequests?.secondsRemaning
        //       /? credentials.remainingRequests.secondsRemaning
        //       : 0
        //   )
        // );
      }
      const { data } = response;
      if (!data) {
        throw _logError(new Error("Can't retrive data from call to API"));
      }
      try {
        if (credentials) {
          credentials.remainingRequests = remainingRequests(response);
          credentials.config_ = _config;
          credentials.response_ = response;

          const BASE64: crypto.BinaryToTextEncoding = 'base64';
          const HEX: crypto.BinaryToTextEncoding = 'hex';

          const stringToHash = _config.url;
          credentials.urlHashHex = crypto
            .createHash('sha256')
            .update(stringToHash)
            .digest(HEX);
          credentials.urlHash64 = crypto
            .createHash('sha256')
            .update(stringToHash)
            .digest(BASE64);

          credentials.urlTime = new Date(credentials.response_.headers.date);
        }
      } catch (error_) {
        console.error('error_:', error_);
        throw error_;

        // console.error(
        //   "To make tests pass removed 'throw' error messages from code bloc"
        // );
      }
      return data;
    } catch (error) {
      console.error(_logError(error).message);
      throw error;
    }
  };
};
