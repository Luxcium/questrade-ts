import type { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import type { ISymbol, Logger } from '../../../../typescript';
/** _getSymbolFromSymbolID */
export declare const _getSymbolsByIds: (clientGetApi: <R>(endpoint: string, handlerOptions: ProxyHandlerOptions) => () => Promise<R>, errorlog?: Logger) => (stockId: number[]) => Promise<ISymbol[]>;
//# sourceMappingURL=_getSymbolsByIds.d.ts.map