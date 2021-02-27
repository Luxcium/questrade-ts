/* eslint-disable sort-keys */
import type { Document, Model } from 'mongoose';
import { model, Schema } from 'mongoose';
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
*/
const orderSchema = new Schema<
  Document<IOrder>,
  Model<Document<IOrder>>,
  undefined
>({
  avgExecPrice: Number,
  canceledQuantity: Number,
  clientReasonStr: String,
  filledQuantity: Number,
  chainId: String,
  gtdDate: Date,
  creationTime: Date,
  icebergQuantity: Number,
  id: String,
  isAllOrNone: Boolean,
  isAnonymous: Boolean,
  lastExecPrice: Number,
  commissionCharged: Number,
  limitPrice: Number,
  exchangeOrderId: String,
  minQuantity: Number,
  isInsider: Boolean,
  openQuantity: Number,
  isLimitOffsetInDollar: Boolean,
  stockId: String,
  OrderLeg: String,
  symbol: String,
  isSignificantShareHolder: Boolean,
  totalQuantity: Number,
  legs: Array,
  orderType: String,
  notes: String,
  side: String,
  comissionCharged: Number,
  isCrossZero: Boolean,
  stopPrice: Number,
  orderClass: String,
  orderGroupId: String,
  orderRoute: String,
  placementCommission: Number,
  primaryRoute: String,
  source: String,
  rejectionReason: String,
  timeInForce: String,
  secondaryRoute: String,
  state: String,
  strategyType: String,
  triggerStopPrice: Number,
  updateTime: Date,
  userId: String,
  venueHoldingOrder: String,
});

export const Order = model('Order', orderSchema);
export interface IOrder {
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
