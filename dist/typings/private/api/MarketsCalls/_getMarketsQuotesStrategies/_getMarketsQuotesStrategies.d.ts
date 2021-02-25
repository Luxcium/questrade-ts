import type { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import type { IStrategiesQuotes, Logger, StrategyVariantRequest } from '../../../../typescript';
export declare const _getMarketsQuotesStrategies: (clientPostApi: <D>(postData: D | null) => <R>(endpoint: string, handlerOptions: ProxyHandlerOptions) => () => Promise<R>, errorlog?: Logger) => (strategyVariantRequestData: StrategyVariantRequest) => Promise<IStrategiesQuotes>;
//# sourceMappingURL=_getMarketsQuotesStrategies.d.ts.map