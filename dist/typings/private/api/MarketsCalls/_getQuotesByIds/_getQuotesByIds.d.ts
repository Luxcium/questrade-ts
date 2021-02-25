import type { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import type { IQuote, Logger } from '../../../../typescript';
/** _getQuotesFromSymbolID */
export declare const _getQuotesByIds: (clientGetApi: <R>(endpoint: string, handlerOptions: ProxyHandlerOptions) => () => Promise<R>, errorlog?: Logger) => (ids: number[]) => Promise<IQuote[]>;
//# sourceMappingURL=_getQuotesByIds.d.ts.map