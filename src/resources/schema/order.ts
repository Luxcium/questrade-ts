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
  id?: string | number;
  symbol?: string;
  stockId?: string | number;
  totalQuantity?: number;
  openQuantity?: number;
  filledQuantity?: number;
  canceledQuantity?: number;
  side?: OrderSide;
  orderType?: OrderType;
  limitPrice?: number | null;
  stopPrice?: number | null;
  isAllOrNone?: boolean;
  isAnonymous?: boolean;
  icebergQuantity?: number | null;
  minQuantity?: number | null;
  avgExecPrice?: number | null;
  lastExecPrice?: number | null;
  source?: string;
  timeInForce?: OrderTimeInForce;
  gtdDate?: Date | string | null;
  state?: OrderState;
  clientReasonStr?: string;
  chainId?: string | number;
  creationTime?: Date | string;
  updateTime?: Date | string;
  notes?: string;
  primaryRoute?: string;
  secondaryRoute?: string;
  orderRoute?: string;
  venueHoldingOrder?: string;
  commissionCharged?: number;
  exchangeOrderId?: string | number | string;
  isSignificantShareHolder?: boolean;
  isInsider?: boolean;
  isLimitOffsetInDollar?: boolean;
  userId?: string | number;
  placementCommission?: number | null;
  legs?: [];
  OrderLeg?: string;
  strategyType?: StrategyTypes | 'SingleLeg';
  triggerStopPrice?: number | null;
  orderGroupId?: string | number;
  orderClass?: OrderClass | null;
  rejectionReason?: string;
  comissionCharged?: number;
  isCrossZero?: boolean;
}
