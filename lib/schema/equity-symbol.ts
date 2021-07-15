/* eslint-disable sort-keys */
import type { Document, Model } from 'mongoose';
import mongoose from 'mongoose';
import { Currency } from 'questrade-api-enumerations';

const equitySymbolSchema = new mongoose.Schema<IEquitySymbolDocument>({
  count: Number,
  currency: String,
  description: String,
  isQuotable: Boolean,
  isTradable: Boolean,
  listingExchange: String,
  securityType: String,
  serverTime: Date,
  symbol: String,
  symbolId: Number,
});

export const EquitySymbolModel: Model<IEquitySymbolDocument> = mongoose.model(
  'EquitySymbol',
  equitySymbolSchema,
);

export interface IEquitySymbolDocument extends Document {
  // all?: IEquitySymbolDocument[];
  // count?: number;
  currency: Currency;
  description: string;
  isQuotable: boolean;
  isTradable: boolean;
  listingExchange: string;
  securityType: string;
  serverTime: Date;
  symbol: string;
  symbolId: number;
}
