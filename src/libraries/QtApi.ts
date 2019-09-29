import { AcountNumberString } from '../libraries';
import { ApiAccountGet, ApiGet } from './';
import { ApiPost } from './ApiPost';
import { Credentials } from './Credentials';

export interface QtApi {
  get: ApiGet;
  post: ApiPost;
  accountGet: ApiAccountGet;
  credentials: Credentials;
  accountNumber: string;
  getPrimaryAccountNumber: () => Promise<AcountNumberString>;
}
