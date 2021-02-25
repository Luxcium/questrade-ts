import type { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import type { IAccount, Logger } from '../../../../typescript';
/** _getAccounts */
export declare function _getAccounts(getAccounts: <R>(endpoint: string, handlerOptions: ProxyHandlerOptions) => () => Promise<R>, errorlog?: Logger): () => Promise<IAccount[]>;
//# sourceMappingURL=_getAccounts.d.ts.map