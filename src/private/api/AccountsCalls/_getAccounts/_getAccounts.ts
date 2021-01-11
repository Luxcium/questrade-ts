import { IAccount, IAccounts, Logger } from '../../../../typescript';

// +!! _getAccounts
/** _getAccounts */
export function _getAccounts(
  getAccounts: <R>(endpoint: string) => () => Promise<R>,
  errorlog: Logger = (error: any) => error /*Logger */,
) {
  return async (): Promise<IAccount[]> => {
    try {
      const accounts = getAccounts<IAccounts>('/accounts');
      const data = await accounts();
      // -
      return data.accounts;
      // -
    } catch (error) {
      // -
      void errorlog(error.message);
      return [];
    }
  };
}
