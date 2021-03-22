import {
  OrderClass,
  OrderSide,
  OrderState,
  OrderTimeInForce,
  OrderType,
  StrategyTypes,
} from 'questrade-api-enumerations';

export interface IOrders {
  readonly orders: IOrder[];
}
export interface IOrder {
  readonly id?: string | number;
  readonly symbol?: string;
  readonly stockId?: string | number;
  readonly totalQuantity?: number;
  readonly openQuantity?: number;
  readonly filledQuantity?: number;
  readonly canceledQuantity?: number;
  readonly side?: OrderSide;
  readonly orderType?: OrderType;
  readonly limitPrice?: number | null;
  readonly stopPrice?: number | null;
  readonly isAllOrNone?: boolean;
  readonly isAnonymous?: boolean;
  readonly icebergQuantity?: number | null;
  readonly minQuantity?: number | null;
  readonly avgExecPrice?: number | null;
  readonly lastExecPrice?: number | null;
  readonly source?: string;
  readonly timeInForce?: OrderTimeInForce;
  readonly gtdDate?: Date | string | null;
  readonly state?: OrderState;
  readonly clientReasonStr?: string;
  readonly chainId?: string | number;
  readonly creationTime?: Date | string;
  readonly updateTime?: Date | string;
  readonly notes?: string;
  readonly primaryRoute?: string;
  readonly secondaryRoute?: string;
  readonly orderRoute?: string;
  readonly venueHoldingOrder?: string;
  readonly commissionCharged?: number;
  readonly exchangeOrderId?: string | number | string;
  readonly isSignificantShareHolder?: boolean;
  readonly isInsider?: boolean;
  readonly isLimitOffsetInDollar?: boolean;
  readonly userId?: string | number;
  readonly placementCommission?: number | null;
  readonly legs?: [];
  readonly OrderLeg?: string;
  readonly strategyType?: StrategyTypes | 'SingleLeg';
  readonly triggerStopPrice?: number | null;
  readonly orderGroupId?: string | number;
  readonly orderClass?: OrderClass | null;
  readonly rejectionReason?: string;
  readonly comissionCharged?: number;
  readonly isCrossZero?: boolean;
}
