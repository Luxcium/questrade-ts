import { Credentials } from '../../..';
import { errorlog, infolog } from '../../../resources/side-effects';
import {
  ClientRequestConfig,
  ClientResponse,
} from '../../../resources/side-effects/types';
import { getQtUrlPathFromArgs, getUrlAndDataHashes } from '../../../utils';
import { remainingRequests } from '../requestPerSecondLimit';

function _updateCredentials(
  _config: ClientRequestConfig,
  response: ClientResponse,
  credentials?: Credentials,
) {
  try {
    if (credentials) {
      // INFO: CREDENTIALS UPTADE  Block Start *********************************

      credentials.remainingRequests = remainingRequests(response);

      credentials.config_ = _config;
      credentials.response_ = response;
      credentials.configUrl_ = `${_config.url}`.split('questrade.com/')[1];

      credentials.urlTimeUTC = new Date(
        credentials?.response_?.headers?.date ?? null,
      );

      const urlToHash = getQtUrlPathFromArgs(_config);
      const dataToHash = `${JSON.stringify(response.data ?? null)}`;

      // XXX: make dependencies to nodeJS crypto module optional ***************
      credentials.hashes = getUrlAndDataHashes(urlToHash, dataToHash);
    }
  } catch (error_) {
    void errorlog('error_:', error_);
    void infolog(
      "To pass tests remove 'throw' error in _httpDataEndPointConnector",
    );

    throw error_;
  }
}
export { _updateCredentials };
