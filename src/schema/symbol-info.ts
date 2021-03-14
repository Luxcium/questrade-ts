/* eslint-disable sort-keys */
import type { Document, Model } from 'mongoose';
import mongoose from 'mongoose';
import { Currency } from 'questrade-api-enumerations';

import { ISymbolInfo } from '../typescript';

const symbolInfoSchema = new mongoose.Schema<ISymbolInfoDocument>({
  _id: Number,
  currency: String,
  description: String,
  listingExchange: String,
  securityType: String,
  serverTime: Date,
  symbolID: Number,
  symbolName: String,
  valid: Boolean,
});

export const SymbolInfo: Model<ISymbolInfoDocument> = mongoose.model(
  'SymbolInfo',
  symbolInfoSchema,
);

export interface ISymbolInfoDocument extends Document, ISymbolInfo {
  currency: Currency;
  description: string;
  listingExchange: string;
  securityType: string;
  serverTime: Date;
  symbolID: number;
  symbolName: string;
  valid: boolean;
}
