import { IOptionsQuotes } from '../../../../../../typings';

export interface IQuotesOptionsByIds {
  byIds?: (optionIds: number[]) => Promise<IOptionsQuotes>;
}

export type QuotesOptions = (filters: _Filters) => Promise<IOptionsQuotes>;

export type QuotesOptionsbyFilterAndIds = IQuotesOptionsByIds & QuotesOptions;

export type OptionsPostData = OptionsIdArray | FiltersArray;
export interface OptionsIdArray {
  optionIds: number[];
}

export interface FiltersArray {
  filters: _Filters[];
}

// tslint:disable-next-line: class-name
export interface _Filters {
  underlyingId?: number;
  expiryDate?: string;
  optionType?: string | undefined | null;
  minstrikePrice?: number | undefined | null;
  maxstrikePrice?: number | undefined | null;
}
