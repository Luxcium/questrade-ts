import { _apiAccountGet, _oAuth, _rawApiGet, _rawApiPost } from '.';
import { Credentials } from '../libraries';

export const _questradeApi = async (
  options: any,
  cb?: (error: any, credentials: Credentials | null) => Credentials | null
) => {
  const credentials: Credentials = (await _oAuth(options, cb)) as Credentials;

  /**
   * apiGet as get  will be exported out to serve s the main apiGet method of
   * connection
   */
  const get = <T>(endpoint: string) => _rawApiGet(credentials)<T>(endpoint);

  /**
   * apiPost as post  will be exported out to serve
   * the main apiPost method of connection
   */
  const post = <T, P = any>(endpoint: string, postData: P) =>
    _rawApiPost(credentials)<T, P>(endpoint, postData);
  /**
   *  get the requests requiring account number
   *  to transact with tge api server
   */
  const accountGet = <T>(endpoint: string) =>
    _apiAccountGet(credentials)<T>(
      `/accounts/${credentials.accountNumber}${endpoint}`
    );
  /**
   * accountNumber return the curently selected account number from
   * the credentials
   */
  const accountNumber = credentials.accountNumber;

  return {
    get,
    post,
    accountGet,
    credentials,
    accountNumber,
  };
};
