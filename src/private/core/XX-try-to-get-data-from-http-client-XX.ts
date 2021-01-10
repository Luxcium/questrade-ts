// import {
//   echo,
//   errorlog,
//   getHttpClient,
//   infolog,
//   tablelog,
// } from '../../resources/side-effects';
import { sideEffects } from '../../resources/side-effects';
import {
  ClientRequestConfig,
  ClientResponse,
  ClientStatic,
} from '../../resources/side-effects/typescript';
import { Credentials, LogErrors } from '../../typescript';
import { creatUrlAndDataHashes, getQtUrlPathFromArgs } from '../../utils';
import {
  remainingRequests,
  remaningTimeString,
  requestPerSecondLimiter,
} from './requestPerSecondLimit';

const { echo, infolog, errorlog, tablelog, getHttpClient } = sideEffects;

export const _tryToGetData = <R>(
  _config: ClientRequestConfig,
  credentials?: Credentials,
  proxy?: ClientStatic,
) => {
  return async (_logError: LogErrors): Promise<R> => {
    try {
      let httpClient: ClientStatic = getHttpClient();
      if (proxy) {
        httpClient = proxy;
      }

      const possiblePerSeconds =
        credentials?.remainingRequests?.possiblePerSeconds ?? 21;
      let response: ClientResponse;
      if (possiblePerSeconds <= 20) {
        //
        const requestLimiter = requestPerSecondLimiter(possiblePerSeconds);
        response = await requestLimiter(
          async (): Promise<ClientResponse<R>> => httpClient(_config),
        );
      } else {
        response = await httpClient(_config);
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
          "To make tests pass removed 'throw' error messages from code bloc in (http client) _tryToGetData",
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
