/* eslint-disable sort-keys */
import type { Document, Model } from 'mongoose';
import { model, Schema } from 'mongoose';
import { Currency } from 'questrade-api-enumerations';

const symbolSearchResultSchema = new Schema<
  Document<ISymbolSearchResult>,
  Model<Document<ISymbolSearchResult>>,
  undefined
>({
  count: Number,
  currency: Currency,
  description: String,
  isQuotable: Boolean,
  isTradable: Boolean,
  listingExchange: String,
  securityType: String,
  symbol: String,
  symbolId: Number,
});

// SymbolSearchResult
export const SymbolSearchResult = model(
  'SymbolSearchResult',
  symbolSearchResultSchema,
);

export interface ISymbolSearchResult {
  symbol: string;
  symbolId: number;
  description: string;
  securityType: string;
  listingExchange: string;
  isTradable: boolean;
  isQuotable: boolean;
  currency: Currency;
  count?: number;
  all?: ISymbolSearchResult[];
}
