"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_TS = void 0;
exports.API_TS = 'api.ts';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3ByaXZhdGUvYXBpL2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFYSxRQUFBLE1BQU0sR0FBRyxRQUFRLENBQUM7QUFJL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTBJRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgSUFjY291bnRBY3Rpdml0eSwgSUFjdGl2aXRpZXMgfSBmcm9tICcuLi8uLi90eXBlc2NyaXB0JztcblxuZXhwb3J0IGNvbnN0IEFQSV9UUyA9ICdhcGkudHMnO1xuXG4vLyBHRVQgYWNjb3VudHMvOmlkL2FjdGl2aXRpZXNcbmV4cG9ydCB0eXBlIHsgSUFjY291bnRBY3Rpdml0eSwgSUFjdGl2aXRpZXMgfTtcbi8qXG4gMy0gdGltZVxuICMgQUNDT1VOVFMvOmlkL1xuIDMtIGFjdGl2aXRpZXNcbiAzLSBvcmRlcnNbLzpvcmRlcklkXVxuIDMtIGV4ZWN1dGlvbnNcbiAzLSBiYWxhbmNlc1xuIDMtIHBvc2l0aW9uc1xuICMgTUFSS0VUUy9cbiAzLSBjYW5kbGVzLzppZFxuIDMtIHF1b3Rlcy9zdHJhdGVnaWVzXG4gMy0gcXVvdGVzL29wdGlvbnNcbiAzLSBxdW90ZXMvOmlkXG4gMy0gbWFya2V0c1xuICMgU1lNQk9MUy9cbiAzLSBzeW1ib2xzLzppZC9vcHRpb25zXG4gMy0gc3ltYm9scy9zZWFyY2hcbiAzLSBzeW1ib2xzLzppZFxuXG5zZXJ2ZXJUaW1lXG5cbmFjY291bnRzXG5hY3Rpdml0aWVzXG5vcmRlcnNcbm9yZGVyc0J5SWRzXG5leGVjdXRpb25zXG5iYWxhbmNlc1xucG9zaXRpb25zXG5cbmNhbmRsZXNcbnF1b3Rlc1N0cmF0ZWdpZXNcbnF1b3Rlc09wdGlvbnNCeUlkc1xucXVvdGVzT3B0aW9uc0ZpbHRlclxucXVvdGVzQnlJZHNcbm1hcmtldHNcblxuc3ltYm9sU2VhcmNoXG5zeW1ib2xTZWFyY2hBbGxcbnN5bWJvbFNlYXJjaENvdW50XG5zeW1ib2xzQnlJZHNcbm9wdGlvbnNCeUlkXG5cbi8vIEdFVCBhY2NvdW50cy86aWQvYWN0aXZpdGllc1xuZXhwb3J0IGludGVyZmFjZSBJQWN0aXZpdGllcyB7XG4gIGFjdGl2aXRpZXM6IElBY2NvdW50QWN0aXZpdHlbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSUFjY291bnRBY3Rpdml0eSB7XG4gIHRyYWRlRGF0ZTogRGF0ZSB8IHN0cmluZztcbiAgdHJhbnNhY3Rpb25EYXRlOiBEYXRlIHwgc3RyaW5nO1xuICBzZXR0bGVtZW50RGF0ZTogRGF0ZSB8IHN0cmluZztcbiAgYWN0aW9uOiBzdHJpbmc7XG4gIHN5bWJvbDogc3RyaW5nO1xuICAvLyAvKiogc3ltYm9sIElEICotL1xuICBzdG9ja0lkOiBzdHJpbmcgfCBudW1iZXI7XG4gIC8vIC8qKiBkZXNjcmlwdGlvbiAqLS9cbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgLy8gLyoqIGVudW1lcmF0aW9uIEN1cnJlbmN5ICotL1xuICBjdXJyZW5jeTogQ3VycmVuY3k7XG4gIC8vIC8qKiB0aGUgcXVhbnRpdHkgKi0vXG4gIHF1YW50aXR5OiBudW1iZXI7XG4gIC8vIC8qKiB0aGUgcHJpY2UgKi0vXG4gIHByaWNlOiBudW1iZXI7XG4gIC8vIC8qKiBncm9zcyBhbW91bnQgKi0vXG4gIGdyb3NzQW1vdW50OiBudW1iZXI7XG4gIC8vIC8qKiB0aGUgY29tbWlzc2lvbiAqLS9cbiAgY29tbWlzc2lvbjogbnVtYmVyO1xuICAvLyAvKiogbmV0IEFtb3VudCAqLS9cbiAgbmV0QW1vdW50OiBudW1iZXI7XG4gIC8vIC8qKiBhY3Rpdml0eSBUeXBlICotL1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbkdFVCBhY2NvdW50cy86aWQvb3JkZXJzWy86b3JkZXJJZF1cbmV4cG9ydCBpbnRlcmZhY2UgSU9yZGVycyB7XG4gIG9yZGVyczogSU9yZGVyW107XG59XG5leHBvcnQgaW50ZXJmYWNlIElPcmRlciB7XG4gIGlkPzogc3RyaW5nIHwgbnVtYmVyO1xuICBzeW1ib2w/OiBzdHJpbmc7XG4gIHN0b2NrSWQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRvdGFsUXVhbnRpdHk/OiBudW1iZXI7XG4gIG9wZW5RdWFudGl0eT86IG51bWJlcjtcbiAgZmlsbGVkUXVhbnRpdHk/OiBudW1iZXI7XG4gIGNhbmNlbGVkUXVhbnRpdHk/OiBudW1iZXI7XG4gIHNpZGU/OiBPcmRlclNpZGU7XG4gIG9yZGVyVHlwZT86IE9yZGVyVHlwZTtcbiAgbGltaXRQcmljZT86IG51bWJlciB8IG51bGw7XG4gIHN0b3BQcmljZT86IG51bWJlciB8IG51bGw7XG4gIGlzQWxsT3JOb25lPzogYm9vbGVhbjtcbiAgaXNBbm9ueW1vdXM/OiBib29sZWFuO1xuICBpY2ViZXJnUXVhbnRpdHk/OiBudW1iZXIgfCBudWxsO1xuICBtaW5RdWFudGl0eT86IG51bWJlciB8IG51bGw7XG4gIGF2Z0V4ZWNQcmljZT86IG51bWJlciB8IG51bGw7XG4gIGxhc3RFeGVjUHJpY2U/OiBudW1iZXIgfCBudWxsO1xuICBzb3VyY2U/OiBzdHJpbmc7XG4gIHRpbWVJbkZvcmNlPzogT3JkZXJUaW1lSW5Gb3JjZTtcbiAgZ3RkRGF0ZT86IERhdGUgfCBzdHJpbmcgfCBudWxsO1xuICBzdGF0ZT86IE9yZGVyU3RhdGU7XG4gIGNsaWVudFJlYXNvblN0cj86IHN0cmluZztcbiAgY2hhaW5JZD86IHN0cmluZyB8IG51bWJlcjtcbiAgY3JlYXRpb25UaW1lPzogRGF0ZSB8IHN0cmluZztcbiAgdXBkYXRlVGltZT86IERhdGUgfCBzdHJpbmc7XG4gIG5vdGVzPzogc3RyaW5nO1xuICBwcmltYXJ5Um91dGU/OiBzdHJpbmc7XG4gIHNlY29uZGFyeVJvdXRlPzogc3RyaW5nO1xuICBvcmRlclJvdXRlPzogc3RyaW5nO1xuICB2ZW51ZUhvbGRpbmdPcmRlcj86IHN0cmluZztcbiAgY29tbWlzc2lvbkNoYXJnZWQ/OiBudW1iZXI7XG4gIGV4Y2hhbmdlT3JkZXJJZD86IHN0cmluZyB8IG51bWJlciB8IHN0cmluZztcbiAgaXNTaWduaWZpY2FudFNoYXJlSG9sZGVyPzogYm9vbGVhbjtcbiAgaXNJbnNpZGVyPzogYm9vbGVhbjtcbiAgaXNMaW1pdE9mZnNldEluRG9sbGFyPzogYm9vbGVhbjtcbiAgdXNlcklkPzogc3RyaW5nIHwgbnVtYmVyO1xuICBwbGFjZW1lbnRDb21taXNzaW9uPzogbnVtYmVyIHwgbnVsbDtcbiAgbGVncz86IFtdO1xuICBPcmRlckxlZz86IHN0cmluZztcbiAgc3RyYXRlZ3lUeXBlPzogU3RyYXRlZ3lUeXBlcyB8ICdTaW5nbGVMZWcnO1xuICB0cmlnZ2VyU3RvcFByaWNlPzogbnVtYmVyIHwgbnVsbDtcbiAgb3JkZXJHcm91cElkPzogc3RyaW5nIHwgbnVtYmVyO1xuICBvcmRlckNsYXNzPzogT3JkZXJDbGFzcyB8IG51bGw7XG4gIHJlamVjdGlvblJlYXNvbj86IHN0cmluZztcbiAgY29taXNzaW9uQ2hhcmdlZD86IG51bWJlcjtcbiAgaXNDcm9zc1plcm8/OiBib29sZWFuO1xufVxuXG5HRVQgYWNjb3VudHMvOmlkL2V4ZWN1dGlvbnNcbkdFVCBhY2NvdW50cy86aWQvYmFsYW5jZXNcbkdFVCBhY2NvdW50cy86aWQvcG9zaXRpb25zXG5HRVQgYWNjb3VudHMvOmlkL3Bvc2l0aW9uc1xuR0VUIHRpbWVcbkdFVCBtYXJrZXRzL2NhbmRsZXMvOmlkXG5HRVQgbWFya2V0cy9xdW90ZXMvc3RyYXRlZ2llc1xuR0VUIG1hcmtldHMvcXVvdGVzL29wdGlvbnNcbkdFVCBtYXJrZXRzL3F1b3Rlcy86aWRcbkdFVCBtYXJrZXRzXG5HRVQgc3ltYm9scy86aWQvb3B0aW9uc1xuR0VUIHN5bWJvbHMvc2VhcmNoXG5HRVQgc3ltYm9scy86aWRcbiovXG4iXX0=