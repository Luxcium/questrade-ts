import { Credentials } from '../../typescript';
export function _coreApiConfig(
  credentials: Credentials,
  VERB: any,
  endpoint: string,
  postData: any
): any {
  const url: string = credentials.apiUrl + endpoint;
  const method: 'get' | 'post' = VERB.toLowerCase() as 'get' | 'post';
  const Authorization: string = `Bearer ${credentials.accessToken}`;
  const location: string = credentials.accountNumber;
  const data: any | null = postData;
  const headers = { Authorization, location };
  const config = { url, method, headers, data };
  return config;
}
