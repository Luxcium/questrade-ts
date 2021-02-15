import { errorlog, infolog } from '../../../resources/side-effects';
import {
  ClientRequestConfig,
  ClientResponse,
} from '../../../resources/side-effects/types';
import { Credentials } from '../../../typescript';
import { remainingRequests } from '../requestPerSecondLimit';

function _updateCredentials(
  _config: ClientRequestConfig,
  response: ClientResponse,
  credentials?: Credentials,
) {
  try {
    if (credentials) {
      // INFO: CREDENTIALS UPTADE  Block Start *********************************

      // response;
      credentials.config_ = _config;
      credentials.response_ = response;
      credentials.configUrl_ = `${_config.url}`.split('questrade.com/')[1];
      credentials.fromCache = response?.headers?.fromCache ?? false;
      credentials.fromApi = response?.headers?.fromApi ?? true;
      credentials.proxy = response?.headers?.proxy ?? null;
      credentials.urlTimeUTC = new Date(
        credentials?.response_?.headers?.date ?? null,
      );
      let maximumperseconds = 20;

      if (credentials.fromCache === true) {
        maximumperseconds = 21;
      }

      credentials.remainingRequests = remainingRequests(
        response,
        maximumperseconds,
      );
    }
  } catch (error_) {
    void errorlog('error_:', error_.message);
    void infolog(
      "To pass tests remove 'throw' error in _httpDataEndPointConnector",
    );

    throw new Error(error_);
  }
}

export { _updateCredentials };
