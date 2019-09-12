import { ApiGet, ApiGetAccount } from './';
import { Credentials } from './Credentials';

export interface QtApi {
  get: ApiGet;
  getAccount: ApiGetAccount;
  credentials: Credentials;
  accountNumber: string;
}
