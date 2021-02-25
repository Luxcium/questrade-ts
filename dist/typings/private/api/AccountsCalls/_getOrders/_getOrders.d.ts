import type { IOrder, Logger } from '../../../../typescript';
/** _getOrders */
export declare const _getOrders: (clientAccountGetApi: <R>(accountEndpoint: string) => () => Promise<R>, errorlog?: Logger) => (stateFilter?: string) => (startDate: string) => (endDate: string) => Promise<IOrder[]>;
//# sourceMappingURL=_getOrders.d.ts.map