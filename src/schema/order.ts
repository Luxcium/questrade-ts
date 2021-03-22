/* eslint-disable sort-keys */
import type { Document, Model } from 'mongoose';
import mongoose from 'mongoose';
import {
  OrderClass,
  OrderSide,
  OrderState,
  OrderTimeInForce,
  OrderType,
  StrategyTypes,
} from 'questrade-api-enumerations';

/*
The permitted SchemaTypes are:
String
Number
Date
Buffer
Boolean
Mixed
ObjectId
Array
Decimal128
Map
  <Document<IOrder>, Model<Document<IOrder>>, undefined>
*/
const orderSchema = new mongoose.Schema<IOrderDocument>({
  OrderLeg: String,
  avgExecPrice: Number,
  canceledQuantity: Number,
  chainId: String,
  clientReasonStr: String,
  comissionCharged: Number,
  commissionCharged: Number,
  creationTime: Date,
  exchangeOrderId: String,
  filledQuantity: Number,
  gtdDate: Date,
  icebergQuantity: Number,
  id: String,
  isAllOrNone: Boolean,
  isAnonymous: Boolean,
  isCrossZero: Boolean,
  isInsider: Boolean,
  isLimitOffsetInDollar: Boolean,
  isSignificantShareHolder: Boolean,
  lastExecPrice: Number,
  legs: Array,
  limitPrice: Number,
  minQuantity: Number,
  notes: String,
  openQuantity: Number,
  orderClass: String,
  orderGroupId: String,
  orderRoute: String,
  orderType: String,
  placementCommission: Number,
  primaryRoute: String,
  rejectionReason: String,
  secondaryRoute: String,
  serverTime: Date,
  side: String,
  source: String,
  state: String,
  stockId: String,
  stopPrice: Number,
  strategyType: String,
  symbol: String,
  timeInForce: String,
  totalQuantity: Number,
  triggerStopPrice: Number,
  updateTime: Date,
  userId: String,
  venueHoldingOrder: String,
});

export const Order: Model<IOrderDocument> = mongoose.model(
  'Order',
  orderSchema,
);
export interface IOrderDocument extends Document {
  avgExecPrice?: number | null;
  canceledQuantity?: number;
  chainId?: string | number;
  clientReasonStr?: string;
  comissionCharged?: number;
  commissionCharged?: number;
  creationTime?: Date | string;
  exchangeOrderId?: string | number | string;
  filledQuantity?: number;
  gtdDate?: Date | string | null;
  icebergQuantity?: number | null;
  id?: string | number;
  isAllOrNone?: boolean;
  isAnonymous?: boolean;
  isCrossZero?: boolean;
  isInsider?: boolean;
  isLimitOffsetInDollar?: boolean;
  isSignificantShareHolder?: boolean;
  lastExecPrice?: number | null;
  legs?: [];
  limitPrice?: number | null;
  minQuantity?: number | null;
  notes?: string;
  openQuantity?: number;
  orderClass?: OrderClass | null;
  orderGroupId?: string | number;
  OrderLeg?: string;
  orderRoute?: string;
  orderType?: OrderType;
  placementCommission?: number | null;
  primaryRoute?: string;
  rejectionReason?: string;
  secondaryRoute?: string;
  serverTime: Date;
  side?: OrderSide;
  source?: string;
  state?: OrderState;
  stockId?: string | number;
  stopPrice?: number | null;
  strategyType?: StrategyTypes | 'SingleLeg';
  symbol?: string;
  timeInForce?: OrderTimeInForce;
  totalQuantity?: number;
  triggerStopPrice?: number | null;
  updateTime?: Date | string;
  userId?: string | number;
  venueHoldingOrder?: string;
}
