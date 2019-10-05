import { Credentials } from '../../typescript';
export function _coreApiConfig(
  credentials: Credentials,
  VERB: any,
  endpoint: string,
  postData: any
): any {
  const url = credentials.apiUrl + endpoint;
  const method = VERB.toLowerCase() as 'get' | 'post';
  const Authorization = `Bearer ${credentials.accessToken}`;
  const location = credentials.accountNumber;
  const data: any | null = postData;
  const headers = { Authorization, location };
  const config = { url, method, headers, data };
  return config;
}
