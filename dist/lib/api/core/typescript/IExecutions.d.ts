import { OrderSide } from 'questrade-api-enumerations';
export declare type DateTime = Date | string;
export interface IExecutions {
    executions: IExecution[];
}
export interface IExecution {
    symbol: string;
    symbolId: number;
    quantity: number;
    side: OrderSide;
    price: number;
    id: number;
    orderId: number;
    orderChainId: number;
    exchangeExecId: string;
    timestamp: DateTime;
    notes: string;
    venue: string;
    totalCost: number;
    orderPlacementCommission: number;
    commission: number;
    executionFee: number;
    secFee: number;
    canadianExecutionFee: number;
    parentId: number;
}
//# sourceMappingURL=IExecutions.d.ts.map