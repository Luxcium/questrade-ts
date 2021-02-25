import type { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import type { ISymbolSearchResult, Logger } from '../../../../typescript';
/** _getSymbolSearch */
export declare const _getSymbolSearchAll: (clientGetApi: <R>(endpoint: string, handlerOptions: ProxyHandlerOptions) => () => Promise<R>, errorlog?: Logger) => (prefix: string, offset?: number) => Promise<ISymbolSearchResult[]>;
//# sourceMappingURL=_getSymbolSearchAll.d.ts.map