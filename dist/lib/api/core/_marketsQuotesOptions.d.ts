import { Credentials, IOptionsQuotes } from './typescript';
export declare const _getQuotesOptionsByIds: (credentials: Credentials) => (optionIds: number[]) => Promise<IOptionsQuotes>;
export declare const _getQuotesOptionsFilter: (credentials: Credentials) => (filters: _Filters) => Promise<IOptionsQuotes>;
export declare const _getMarketsQuotesOptions: (credentials: Credentials) => (optionIds?: void | number[] | null | undefined, underlyingId?: number | undefined, expiryDate?: string | undefined, optionType?: string | null | undefined, minstrikePrice?: number | null | undefined, maxstrikePrice?: number | null | undefined) => Promise<IOptionsQuotes>;
export declare type OptionsPostData = OptionsIdArray | FiltersArray;
export interface OptionsIdArray {
    optionIds: number[];
}
export interface FiltersArray {
    filters: _Filters[];
}
export interface _Filters {
    underlyingId?: number;
    expiryDate?: string;
    optionType?: string | undefined | null;
    minstrikePrice?: number | undefined | null;
    maxstrikePrice?: number | undefined | null;
}
//# sourceMappingURL=_marketsQuotesOptions.d.ts.map