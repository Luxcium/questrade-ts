import { Credentials, RawAccountApiGet } from '../../libraries';
import { _apiGet } from './_apiGet';
export const _apiGetAccount: RawAccountApiGet = (credentials: Credentials) =>
  _apiGet(credentials);
