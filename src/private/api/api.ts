import type { IAccountActivity, IActivities } from '../../typescript';

export const API_TS = 'api.ts';

// GET accounts/:id/activities
export type { IAccountActivity, IActivities };
/*
 3- time
 # ACCOUNTS/:id/
 3- activities
 3- orders[/:orderId]
 3- executions
 3- balances
 3- positions
 # MARKETS/
 3- candles/:id
 3- quotes/strategies
 3- quotes/options
 3- quotes/:id
 3- markets
 # SYMBOLS/
 3- symbols/:id/options
 3- symbols/search
 3- symbols/:id

serverTime

accounts
activities
orders
ordersByIds
executions
balances
positions

candles
quotesStrategies
quotesOptionsByIds
quotesOptionsFilter
quotesByIds
markets

symbolSearch
symbolSearchAll
symbolSearchCount
symbolsByIds
optionsById

// GET accounts/:id/activities
export interface IActivities {
  activities: IAccountActivity[];
}
export interface IAccountActivity {
  tradeDate: Date | string;
  transactionDate: Date | string;
  settlementDate: Date | string;
  action: string;
  symbol: string;
  // /** symbol ID *-/
  stockId: string | number;
  // /** description *-/
  description: string;
  // /** enumeration Currency *-/
  currency: Currency;
  // /** the quantity *-/
  quantity: number;
  // /** the price *-/
  price: number;
  // /** gross amount *-/
  grossAmount: number;
  // /** the commission *-/
  commission: number;
  // /** net Amount *-/
  netAmount: number;
  // /** activity Type *-/
  type: string;
}

GET accounts/:id/orders[/:orderId]
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

GET accounts/:id/executions
GET accounts/:id/balances
GET accounts/:id/positions
GET accounts/:id/positions
GET time
GET markets/candles/:id
GET markets/quotes/strategies
GET markets/quotes/options
GET markets/quotes/:id
GET markets
GET symbols/:id/options
GET symbols/search
GET symbols/:id
*/
