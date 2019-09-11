import { ApiGet } from './ApiGet';
import { Credentials } from './Credentials';
export interface QtApi {
  get: ApiGet;
  credentials: Credentials;
}
