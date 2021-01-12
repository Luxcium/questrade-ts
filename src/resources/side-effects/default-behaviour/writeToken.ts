import { Credentials, IRefreshCreds } from '../../../typescript';
import { _writeToken } from '../auth/_writeToken';
import { ClientResponse } from '../types';

export function writeToken(
  credentials: Credentials,
  response: ClientResponse<IRefreshCreds>,
): Credentials {
  return _writeToken(credentials, response);
}
