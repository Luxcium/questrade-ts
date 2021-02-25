import type { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import type { Credentials, IAccount, IAccounts, Logger, ProxyFactory_ } from '../../../../typescript';
import type { ApiCallQ_ } from '../../../core/next-rate-limiter/queue';
export declare function callTimeOut(proxy: ProxyFactory_ | null, apiCallQ: ApiCallQ_, credentials: Credentials, callback: (acct: () => Promise<IAccounts>) => void): Promise<void>;
export declare function _getAccounts(getAccounts: <R>(endpoint: string, handlerOptions: ProxyHandlerOptions) => () => Promise<R>, errorlog?: Logger): () => Promise<IAccount[]>;
export declare const _getServerTime: (clientGetApi: <R>(endpoint: string, handlerOptions: ProxyHandlerOptions) => () => Promise<R>) => () => Promise<Date>;
//# sourceMappingURL=_getAccountsandTime.d.ts.map