import {
  OrderClass,
  OrderSide,
  OrderState,
  OrderTimeInForce,
  OrderType,
  StrategyTypes,
} from 'questrade-api-enumerations';
import { DateTime, idType } from '.';

export interface IOrders {
  orders: IOrder[];
}
export interface IOrder {
  id?: idType;
  symbol?: string;
  stockId?: idType;
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
  gtdDate?: DateTime | null;
  state?: OrderState;
  clientReasonStr?: string;
  chainId?: idType;
  creationTime?: DateTime;
  updateTime?: DateTime;
  notes?: string;
  primaryRoute?: string;
  secondaryRoute?: string;
  orderRoute?: string;
  venueHoldingOrder?: string;
  commissionCharged?: number;
  exchangeOrderId?: idType | string;
  isSignificantShareHolder?: boolean;
  isInsider?: boolean;
  isLimitOffsetInDollar?: boolean;
  userId?: idType;
  placementCommission?: number | null;
  legs?: [];
  OrderLeg?: string;
  strategyType?: StrategyTypes | 'SingleLeg';
  triggerStopPrice?: number | null;
  orderGroupId?: idType;
  orderClass?: OrderClass | null;
  rejectionReason?: string;
  comissionCharged?: number;
  isCrossZero?: boolean;
}
