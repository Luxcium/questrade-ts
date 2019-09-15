import { Credentials, RawApiGet, RawApiPost } from '../libraries';
import { axiosApi, oAuth, _apiAccountGet } from './';

export const questradeApi = async (
  options: any,
  cb?: (error: any, credentials: Credentials | null) => Credentials | null
) => {
  const credentials: Credentials = (await oAuth(options, cb)) as Credentials;

  /**
   *  RawApiGet need to get credentials
   * to be ready to be used
   */
  const rawApiGet: RawApiGet = (crendentials: Credentials) => {
    return <T>(endpoint: string) =>
      axiosApi(crendentials)('GET', null)<T>(endpoint);
  };

  /**
   * RawApiPost need to get credentials
   *  to be ready to be used
   */
  const rawApiPost: RawApiPost = (crendentials: Credentials) => {
    return <T, P = any>(endpoint: string, postData: P) =>
      axiosApi(crendentials)<P>('POST', postData)<T>(endpoint);
  };

  /**
   * apiGet as get  will be exported out to serve s the main apiGet method of
   * connection
   */
  const get = <T>(endpoint: string) => rawApiGet(credentials)<T>(endpoint);

  /**
   *  apiPost as post  will be exported out to serve s the main apiPost method *  of connection
   */
  const post = <T, P = any>(endpoint: string, postData: P) =>
    rawApiPost(credentials)<T, P>(endpoint, postData);
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

//  export  questradeApi()
