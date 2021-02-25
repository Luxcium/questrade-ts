import type { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import type { IOptionsQuote } from '../../../../typescript';
export declare const _getMarketsQuotesOptions: (clientPostApi: <D>(postData: D | null) => <R>(endpoint: string, handlerOptions: ProxyHandlerOptions) => () => Promise<R>) => (optionIds: number[] | null, underlyingId: number, expiryDate: string, optionType?: string | null, minstrikePrice?: number | null, maxstrikePrice?: number | null) => Promise<IOptionsQuote[]>;
//# sourceMappingURL=_getMarketsQuotesOptions.d.ts.map