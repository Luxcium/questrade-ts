/* eslint-disable sort-keys */
import type { Document, Model } from 'mongoose';
import mongoose from 'mongoose';
import { Currency } from 'questrade-api-enumerations';

const equitySymbolSchema = new mongoose.Schema<IEquitySymbolDocumentModel>({
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

export const EquitySymbolDocumentModel: Model<IEquitySymbolDocumentModel> = mongoose.model(
  'EquitySymbol',
  equitySymbolSchema,
);

export interface IEquitySymbolDocumentModel extends Document {
  symbol: string;
  symbolId: number;
  description: string;
  securityType: string;
  listingExchange: string;
  isTradable: boolean;
  isQuotable: boolean;
  currency: Currency;
  count?: number;
  all?: IEquitySymbolDocumentModel[];
}
