import type { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import type { IMarket, Logger } from '../../../../typescript';
/** _getMarkets */
export declare const _getMarkets: (clientGetApi: <R>(endpoint: string, handlerOptions: ProxyHandlerOptions) => () => Promise<R>, errorlog?: Logger) => () => Promise<IMarket[]>;
//# sourceMappingURL=_getMarkets.d.ts.map