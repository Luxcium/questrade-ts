import { CoreApiConfig, Credentials } from '../../../typescript';

export function _coreApiConfig<D>(
  credentials: Credentials,
  VERB: string,
  endpoint: string,
  postData: D | null
): CoreApiConfig<D> {
  const url: string = credentials.apiUrl + endpoint;
  const method: 'get' | 'post' = VERB.toLowerCase() as 'get' | 'post';
  const Authorization: string = `Bearer ${credentials.accessToken}`;
  const location: string = credentials.accountNumber;
  const data: D | null = postData;
  const headers = { Authorization, location };
  const config = { url, method, headers, data };
  return config;
}
