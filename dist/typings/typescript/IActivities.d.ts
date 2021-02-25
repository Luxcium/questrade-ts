import { Currency } from 'questrade-api-enumerations';
export interface IActivities {
    /** array of activity records */
    activities: IAccountActivity[];
}
export interface IAccountActivity {
    /** trade date */
    tradeDate: Date | string;
    /** transaction date */
    transactionDate: Date | string;
    /** settlement date */
    settlementDate: Date | string;
    /** activity action */
    action: string;
    /** symbol name */
    symbol: string;
    /** symbol ID */
    stockId: string | number;
    /** description */
    description: string;
    /** enumeration Currency */
    currency: Currency;
    /** the quantity */
    quantity: number;
    /** the price */
    price: number;
    /** gross amount */
    grossAmount: number;
    /** the commission */
    commission: number;
    /** net Amount */
    netAmount: number;
    /** activity Type */
    type: string;
}
//# sourceMappingURL=IActivities.d.ts.map