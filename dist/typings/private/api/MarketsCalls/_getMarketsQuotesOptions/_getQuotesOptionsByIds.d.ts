import type { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import type { IOptionsQuote, Logger } from '../../../../typescript';
export declare const _getQuotesOptionsByIds: (clientPostApi: <D>(postData: D | null) => <R>(endpoint: string, handlerOptions: ProxyHandlerOptions) => () => Promise<R>, errorlog?: Logger) => (optionIds: number[]) => Promise<IOptionsQuote[]>;
//# sourceMappingURL=_getQuotesOptionsByIds.d.ts.map