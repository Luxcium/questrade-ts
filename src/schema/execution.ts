/* eslint-disable sort-keys */
import type { Document, Model } from 'mongoose';
import mongoose from 'mongoose';
import { OrderSide } from 'questrade-api-enumerations';

const executionSchema = new mongoose.Schema<IExecutionDocument>({
  canadianExecutionFee: Number,
  commission: Number,
  exchangeExecId: String,
  executionFee: Number,
  id: Number,
  legId: Number,
  notes: String,
  orderChainId: Number,
  orderId: Number,
  orderPlacementCommission: Number,
  parentId: Number,
  price: Number,
  quantity: Number,
  secFee: Number,
  serverTime: Date,
  side: String,
  symbol: String,
  symbolId: Number,
  timestamp: Date,
  totalCost: Number,
  venue: String,
});

export const Execution: Model<IExecutionDocument> = mongoose.model(
  'Execution',
  executionSchema,
);
export interface IExecutionDocument extends Document {
  /** execution symbol. */
  symbol: string;
  /** internal symbol identifier */
  symbolId: number;
  /** execution quantity. */
  quantity: number;

  /**
   * client side of the order to which execution belongs.
   * See Client Order Side section for all allowed values.
   */
  side: OrderSide;
  /**
   * execution price.
   */
  price: number;
  /** internal identifier of the execution. */
  id: number;
  /** internal identifier of the order to which the execution belongs. */
  orderId: number;
  /**
   * internal identifier of the order chain to
   * which the execution belongs.
   */
  orderChainId: number;
  /** identifier of the execution at the market where it originated. */
  exchangeExecId: string;
  /** execution timestamp. */
  timestamp: Date | string;
  /** manual notes that may have been entered by Trade Desk staff */
  notes: string;
  /** trading venue where execution originated. */
  venue: string;
  /** execution cost (price x quantity). */
  totalCost: number;
  /** questrade commission for orders placed with Trade Desk. */
  orderPlacementCommission: number;
  /** questrade commission. */
  commission: number;
  /** liquidity fee charged by execution venue. */
  executionFee: number;
  /** sEC fee charged on all sales of US securities. */
  secFee: number;
  /** additional execution fee charged by TSX (if applicable). */
  serverTime: Date;
  canadianExecutionFee: number;
  /** internal identifierof the parent order. */
  parentId: number;
  legId?: number;
}
