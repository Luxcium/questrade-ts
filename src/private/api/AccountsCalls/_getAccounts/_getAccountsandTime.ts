import { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import {
  Credentials,
  IAccount,
  IAccounts,
  ITime,
  Logger,
  ProxyFactory_,
} from '../../../../typescript';
import { ApiCallQ_ } from '../../../core/next-rate-limiter/queue';
import { _clientGetApi } from '../../../routes';

export async function callTimeOut(
  proxy: ProxyFactory_ | null,
  apiCallQ: ApiCallQ_,
  credentials: Credentials,
  callback: (acct: () => Promise<IAccounts>) => void,
) {
  const getEndpoint = _clientGetApi(credentials, apiCallQ, proxy);

  setTimeout(() => {
    callback(
      getEndpoint<IAccounts>('/accounts', {
        noCaching: true,
      }),
    );
  }, 500);
}
// Export async function callTimeOut(
//   Proxy: ProxyFactory_ | undefined,
//   Credentials: Credentials,
//   Callback: (acct: () => Promise<IAccounts>) => void,
//   Ms: number,
//   Args: any[],
// ) {
//

//   SetTimeout(
//     (args_: any[]) => {
//
//       Return void args_;
//     },
//     Ms,
//     Args,
//   );
// }

// Export async function nameIT(
//   Proxy: ProxyFactory_ | undefined,
//   Credentials: Credentials,
// ) {
//   Return _clientGetApi(credentials, proxy);
// }
// Const accounts = async () =>
//   GetEndpoint<IAccounts>(`/accounts`, {
//     NoCaching: true,
//   })();

// Const time = async () =>
//   New Date(
//     (await getEndpoint<ITime>('/time/?', { noCaching: true })()).time,
//   );

// Return async () => ({ accounts: await accounts(), time: await time() });
// +!! _getAccounts
/*
 _getAccounts
*/
export function _getAccounts(
  getAccounts: <R>(
    endpoint: string,
    handlerOptions: ProxyHandlerOptions,
  ) => () => Promise<R>,
  errorlog: Logger = (error: any) => error /* Logger */,
) {
  return async (): Promise<IAccount[]> => {
    try {
      const accounts = getAccounts<IAccounts>('/accounts', { noCaching: true });
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

/*
_getTime
*/

// +!! _getServerTime
export const _getServerTime = (
  clientGetApi: <R>(
    endpoint: string,
    handlerOptions: ProxyHandlerOptions,
  ) => () => Promise<R>,
) => async (): Promise<Date> =>
  new Date(
    (await clientGetApi<ITime>('/time/?', { noCaching: true })()).time,
  );

//  */

/*

Import { Credentials, ProxyFactory_ } from '../../../typescript';
import { _coreApiFunction } from '../../core/end-point-connector/_coreApiFunction';

// # _clientGetApi !!!
/**
 * YOU PROVIDE: credentials and endpoint string with <R> return type,
 * THEN YOU GET: ( )=> Promise<R>
 * /
export const _clientGetApi = (
  credentials: Credentials,
  proxy?: ProxyFactory_,
) => _coreApiFunction(credentials, proxy)('GET')(null);


*/
