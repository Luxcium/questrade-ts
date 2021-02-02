import { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import {
  Credentials,
  IAccount,
  IAccounts,
  ITime,
  Logger,
  ProxyFactory_,
} from '../../../../typescript';
import { _clientGetApi } from '../../../routes';

export async function callTimeOut(
  proxy: ProxyFactory_ | undefined,
  credentials: Credentials,
  callback: (acct: () => Promise<IAccounts>) => void,
  ms: number,
  args: any[],
) {
  const getEndpoint = _clientGetApi(credentials, proxy);

  setTimeout(
    (args_: any[]) => {
      callback(
        getEndpoint<IAccounts>(`/accounts`, {
          noCaching: true,
        }),
      );
      return void args_;
    },
    ms,
    args,
  );
}

export function nameIT(
  proxy: ProxyFactory_ | undefined,
  credentials: Credentials,
) {
  const getEndpoint = _clientGetApi(credentials, proxy);

  const accounts = async () =>
    getEndpoint<IAccounts>(`/accounts`, {
      noCaching: true,
    })();

  const time = async () =>
    new Date(
      (await getEndpoint<ITime>('/time/?', { noCaching: true })()).time,
    );

  return async () => ({ accounts: await accounts(), time: await time() });
}
// +!! _getAccounts
/*
 _getAccounts
*/
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

import { Credentials, ProxyFactory_ } from '../../../typescript';
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
