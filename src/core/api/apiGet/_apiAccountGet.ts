import { Credentials, RawApiAccountGet } from '../../libraries';
import { _apiGet } from './_apiGet';
export const _apiAccountGet: RawApiAccountGet = (credentials: Credentials) =>
  _apiGet(credentials);
