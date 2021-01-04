import axios, { AxiosResponse, AxiosStatic } from 'axios';

import { sideEffects } from '../../default-behaviour';
import {
  AxiosProxyHandler,
  CoreApiConfig,
  Credentials,
  LogErrors,
} from '../../typescript';
import { creatUrlAndDataHashes, getQtUrlPathFromArgs } from '../../utils';
import {
  remainingRequests,
  remaningTimeString,
  requestPerSecondLimiter,
} from './requestPerSecondLimit';

const { echo, infolog, errorlog, tablelog } = sideEffects;

export const _tryToGetData = <R, D>(
  _config: CoreApiConfig<D>,
  credentials?: Credentials,
  proxy?: AxiosProxyHandler,
) => {
  return async (_logError: LogErrors): Promise<R> => {
    try {
      let axiosClient: AxiosStatic = axios;
      if (proxy) {
        axiosClient = proxy;
      }

      const possiblePerSeconds =
        credentials?.remainingRequests?.possiblePerSeconds ?? 21;
      let response: AxiosResponse;
      if (possiblePerSeconds <= 20) {
        //
        const requestLimiter = requestPerSecondLimiter(possiblePerSeconds);
        response = await requestLimiter(
          async (): Promise<AxiosResponse<R>> => axiosClient(_config),
        );
      } else {
        response = await axiosClient(_config);
      }
      if (response.status !== 200) {
        void echo<unknown>('________________________________________________');
        void echo<unknown>(response.status, response.statusText);
        void echo<unknown>(response.data);
        void tablelog(response.headers);
        void echo<unknown>(
          remaningTimeString(
            credentials?.remainingRequests?.secondsRemaning
              ? credentials.remainingRequests.secondsRemaning
              : 0,
          ),
        );
        void echo<unknown>(response.status, response.statusText);
        void echo<unknown>('________________________________________________');
        void echo<unknown>('++++++++++++++++++++++++++++++++++++++++++++++++');
      } else {
        // void echo(
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
          credentials.configUrl_ = `${_config.url}`.split('questrade.com/')[1];

          credentials.urlTimeUTC = new Date(credentials.response_.headers.date);

          const urlToHash = getQtUrlPathFromArgs(_config);
          const dataToHash = `${JSON.stringify(response.data ?? null)}`;

          // TODO: remove dependencies to nodeJS crypto module making it optional ...
          credentials.hashes = creatUrlAndDataHashes(urlToHash, dataToHash);
        }
      } catch (error_) {
        void errorlog('error_:', error_);

        void infolog(
          "To make tests pass removed 'throw' error messages from code bloc in (Axios) _tryToGetData",
        );

        throw error_;
      }
      return data;
    } catch (error) {
      void errorlog(_logError(error).message);

      throw error;
    }
  };
};
