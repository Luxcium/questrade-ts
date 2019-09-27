import { Credentials, RawApiAccountGet } from '../../libraries';
import { _rawApiGet } from './';

export const _apiAccountGet: RawApiAccountGet = (credentials: Credentials) =>
  _rawApiGet(credentials);
