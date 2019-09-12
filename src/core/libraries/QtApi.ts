import { ApiAccountGet, ApiGet } from './';
import { Credentials } from './Credentials';

export interface QtApi {
  get: ApiGet;
  accountGet: ApiAccountGet;
  credentials: Credentials;
  accountNumber: string;
}
