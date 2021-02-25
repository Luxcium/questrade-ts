import type { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import type { IOptionChain, Logger } from '../../../../typescript';
/** _getOptionsSymbols */
export declare const _getOptionsById: (clientGetApi: <R>(endpoint: string, handlerOptions: ProxyHandlerOptions) => () => Promise<R>, errorlog?: Logger) => (symbolID: number) => Promise<IOptionChain[]>;
//# sourceMappingURL=_getOptionsById.d.ts.map