import type { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import type { ISymbolSearchResult, Logger } from '../../../../typescript';
/** _getSymbolSearch */
export declare const _getSymbolSearch: (clientGetApi: <R>(endpoint: string, handlerOptions: ProxyHandlerOptions) => () => Promise<R>, errorlog?: Logger) => (prefix: string, offset?: number) => Promise<ISymbolSearchResult[]>;
//# sourceMappingURL=_getSymbolSearch.d.ts.map