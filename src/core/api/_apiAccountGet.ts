import { Credentials, RawApiAccountGet } from '../libraries';
import { qtApi } from './';
export const _apiAccountGet: RawApiAccountGet = (credentials: Credentials) =>
  qtApi(credentials);
