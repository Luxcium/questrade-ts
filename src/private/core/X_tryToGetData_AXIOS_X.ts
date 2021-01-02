import axios, { AxiosResponse } from 'axios';
import crypto from 'crypto';

import {
  AxiosProxyHandler,
  CoreApiConfig,
  Credentials,
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
  proxy?: AxiosProxyHandler
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
          const BASE64: crypto.BinaryToTextEncoding = 'base64';
          const HEX: crypto.BinaryToTextEncoding = 'hex';

          credentials.remainingRequests = remainingRequests(response);

          credentials.config_ = _config;
          credentials.response_ = response;
          credentials.configUrl_ = `${_config.url}`.split('questrade.com/')[1];

          credentials.urlTimeUTC = new Date(credentials.response_.headers.date);

          const urlToHash = credentials.configUrl_;
          const dataToHash = JSON.stringify(data);
          credentials.urlHashHex = crypto
            .createHash('sha256')
            .update(urlToHash)
            .digest(HEX);
          credentials.urlHash64 = crypto
            .createHash('sha256')
            .update(urlToHash)
            .digest(BASE64);
          credentials.dataHashHex = crypto
            .createHash('sha256')
            .update(dataToHash)
            .digest(HEX);
          credentials.dataHash64 = crypto
            .createHash('sha256')
            .update(dataToHash)
            .digest(BASE64);
        }
      } catch (error_) {
        console.error('error_:', error_);
        throw error_;
        // 14_984 / 1733;
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
