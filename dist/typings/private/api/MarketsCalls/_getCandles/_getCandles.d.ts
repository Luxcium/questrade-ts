import { HistoricalDataGranularity } from 'questrade-api-enumerations';
import type { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import type { ICandle, Logger } from '../../../../typescript';
/** _getCandles */
export declare const _getCandles: (clientGetApi: <R>(endpoint: string, handlerOptions: ProxyHandlerOptions) => () => Promise<R>, errorlog?: Logger) => (symbolID: number) => (interval?: string | HistoricalDataGranularity) => (startDate: string) => (endDate: string) => Promise<ICandle[]>;
//# sourceMappingURL=_getCandles.d.ts.map