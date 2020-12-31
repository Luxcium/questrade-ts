import {
  OrderClass,
  OrderSide,
  OrderState,
  OrderTimeInForce,
  OrderType,
  StrategyTypes,
} from 'questrade-api-enumerations';

export interface IOrders {
  orders: IOrder[];
}
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
