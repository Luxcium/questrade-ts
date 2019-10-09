import { IOptionsQuotes } from '..';

export interface IQuotesOptionsByIds {
  byIds?: (optionIds: number[]) => Promise<IOptionsQuotes>;
}

export type QuotesOptions = (
  filters: OptionsFilters
) => Promise<IOptionsQuotes>;

export type QuotesOptionsbyFilterAndIds = IQuotesOptionsByIds & QuotesOptions;

export type OptionsPostData = OptionsIdArray | FiltersArray;
export interface OptionsIdArray {
  optionIds: number[];
}

export interface FiltersArray {
  filters: OptionsFilters[];
}

// tslint:disable-next-line: class-name
export interface OptionsFilters {
  underlyingId?: number;
  expiryDate?: string;
  optionType?: string | undefined | null;
  minstrikePrice?: number | undefined | null;
  maxstrikePrice?: number | undefined | null;
}
