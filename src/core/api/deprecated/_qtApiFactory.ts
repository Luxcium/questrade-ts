import { _apiAccountGet, _oAuth, _rawApiGet, _rawApiPost } from '.';
import { Credentials, QtApi } from '../../libraries';
import { AcountNumberString, IAccounts } from '../../types';
import { _genericEndPoint } from './endPoinFactory';

export const _qtApiFactory = async (options: any): Promise<QtApi> => {
  const credentials: Credentials | null = await _oAuth(options);
  if (!credentials) {
    console.log('credentials is null or undefined');
    throw new Error('credentials is null or undefined');
  }

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

  const getPrimaryAccountNumber = async (): Promise<AcountNumberString> => {
    const { accounts } = await _genericEndPoint<IAccounts>(get)('/accounts');

    if (accounts.length < 1) {
      throw new Error('No account number found');
    }

    if (accounts.length === 1) {
      return accounts[0].number;
    }

    const primary = accounts.filter((account: any) => account.isPrimary);
    if (primary.length > 0) {
      return primary[0].number;
    }

    return accounts[0].number;
  };
  // qtApi
  credentials.accountNumber = await getPrimaryAccountNumber();

  /**
   * accountNumber return the curently selected account number from
   * the credentials
   */
  const accountNumber = credentials.accountNumber;
  // Will return what is used in the package as qtApi => QtApi
  return {
    accountGet,
    accountNumber,
    credentials,
    get,
    getPrimaryAccountNumber,
    post,
  };
};
