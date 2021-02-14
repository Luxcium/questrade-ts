import { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import { IAccount, IAccounts, Logger } from '../../../../typescript';

// +!! _getAccounts
/** _getAccounts */
export function _getAccounts(
  getAccounts: <R>(
    endpoint: string,
    handlerOptions: ProxyHandlerOptions,
  ) => () => Promise<R>,
  errorlog: Logger = (error: any) => error /*Logger */,
) {
  return async (): Promise<IAccount[]> => {
    try {
      const accounts = getAccounts<IAccounts>(`/accounts`, { noCaching: true });
      const data = await accounts();

      // -
      return data.accounts;
      // -
    } catch (error) {
      // -
      void errorlog(`calling '/accounts' endpoint ${error.message}`);

      return [];
    }
  };
}
