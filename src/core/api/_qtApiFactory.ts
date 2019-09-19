import { _apiAccountGet, _oAuth, _rawApiGet, _rawApiPost } from '.';
import { Credentials, QtApi } from '../libraries';

export const _qtApiFactory = async (
  options: any,
  cb?: (error: any, credentials: Credentials | null) => Credentials | null
): Promise<QtApi> => {
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
  const post = <T, P = any>(endpoint: string) => <D = P>(postData: D) =>
    _rawApiPost(credentials)<T>(endpoint)<D>(postData);
  /**
   *  get the requests requiring account number
   *  to transact with tge api server
   */
  const accountGet = <T>(endpoint: string) =>
    _apiAccountGet(credentials)<T>(
      `/accounts/${credentials.accountNumber}${endpoint}`
    );
  // qtApi
  credentials.accountNumber = '12345678'; // todo get real account number (await getEndPoint(get))('');
  /**
   * accountNumber return the curently selected account number from
   * the credentials
   */
  const accountNumber = credentials.accountNumber;
  // Will return what is used in the package as qtApi => Promise<QtApi>
  return {
    get,
    post,
    accountGet,
    credentials,
    accountNumber,
  };
};
