/* eslint-disable sort-keys */
import type { Document, Model } from 'mongoose';
import mongoose from 'mongoose';
import { Currency } from 'questrade-api-enumerations';

const symbolSearchResultSchema = new mongoose.Schema<ISymbolResultDocument>({
  count: Number,
  currency: String,
  description: String,
  isQuotable: Boolean,
  isTradable: Boolean,
  listingExchange: String,
  securityType: String,
  symbol: String,
  symbolId: Number,
});

// SymbolSearchResult
export const SymbolSearchResult: Model<ISymbolResultDocument> = mongoose.model(
  'SymbolSearchResult',
  symbolSearchResultSchema,
);

export interface ISymbolResultDocument extends Document {
  symbol: string;
  symbolId: number;
  description: string;
  securityType: string;
  listingExchange: string;
  isTradable: boolean;
  isQuotable: boolean;
  currency: Currency;
  count?: number;
  all?: ISymbolResultDocument[];
}
