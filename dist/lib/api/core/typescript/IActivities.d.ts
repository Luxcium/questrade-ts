import { Currency } from 'questrade-api-enumerations';
declare type DateTime = Date | string;
export interface IActivities {
    activities: IAccountActivity[];
}
export interface IAccountActivity {
    tradeDate: DateTime;
    transactionDate: DateTime;
    settlementDate: DateTime;
    action: string;
    symbol: string;
    symbolId: string | number;
    description: string;
    currency: Currency;
    quantity: number;
    price: number;
    grossAmount: number;
    commission: number;
    netAmount: number;
    type: string;
}
export {};
//# sourceMappingURL=IActivities.d.ts.map