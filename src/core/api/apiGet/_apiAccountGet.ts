import { Credentials, RawApiAccountGet } from '../../libraries';
import { _apiGet } from './';
export const _apiAccountGet: RawApiAccountGet = (credentials: Credentials) =>
  _apiGet(credentials);
