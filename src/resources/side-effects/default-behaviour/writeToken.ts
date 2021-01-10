import { Credentials, IRefreshCreds } from '../../../types';
import { _writeToken } from '../auth/_writeToken';
import { ClientResponse } from '../types';

export function writeToken(
  credentials: Credentials,
  response: ClientResponse<IRefreshCreds>,
): Credentials {
  return _writeToken(credentials, response);
}
