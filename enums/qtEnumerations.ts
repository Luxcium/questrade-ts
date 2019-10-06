// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License. See end of file for license information.

/** Specifies all supported currency codes. */
/*
Currency
The following table specifies all supported currency codes.

Type	Description
USD	US dollar.
CAD	Canadian dollar.
*/
export enum Currency {
  /** US dollar. */
  USD = 'USD',
  /** Canadian dollar. */
  CAD = 'CAD',
}

/** Specifies all supported listing exchanges. */
/*
Listing Exchange
The following table specifies all supported listing exchanges.

Type	Description
TSX	Toronto Stock Exchange.
TSXV	Toronto Venture Exchange.
CNSX	Canadian National Stock Exchange.
MX	Montreal Exchange.
NASDAQ	NASDAQ.
NYSE	New York Stock Exchange.
NYSEAM	NYSE AMERICAN
ARCA	NYSE Arca.
OPRA	Option Reporting Authority.
PinkSheets	Pink Sheets.
OTCBB	OTC Bulletin Board.
*/
export enum ListingExchange {
  /** Toronto Stock Exchange. */
  TSX = 'TSX',
  /** Toronto Venture Exchange. */
  TSXV = 'TSXV',
  /** Canadian National Stock Exchange. */
  CNSX = 'CNSX',
  /** Montreal Exchange. */
  MX = 'MX',
  /** NASDAQ. */
  NASDAQ = 'NASDAQ',
  /** New York Stock Exchange. */
  NYSE = 'NYSE',
  /** NYSE AMERICAN */
  NYSEAM = 'NYSEAM',
  /** NYSE Arca. */
  ARCA = 'ARCA',
  /** Option Reporting Authority. */
  OPRA = 'OPRA',
  /** Pink Sheets. */
  PinkSheets = 'PinkSheets',
  /** OTC Bulletin Board. */
  OTCBB = 'OTCBB',
}

/** Specifies all supported user account types. */
/*
The following table specifies all supported user account types.

Type	Description
Cash	Cash account.
Margin	Margin account.
TFSA	Tax Free Savings Account.
RRSP	Registered Retirement Savings Plan.
SRRSP	Spousal RRSP.
LRRSP	Locked-In RRSP.
LIRA	Locked-In Retirement Account.
LIF	Life Income Fund.
RIF	Retirement Income Fund.
SRIF	Spousal RIF.
LRIF	Locked-In RIF.
RRIF	Registered RIF.
PRIF	Prescribed RIF.
RESP	Individual Registered Education Savings Plan.
FRESP	Family RESP. */
export enum AccountType {
  /** Cash account. */
  CASH = 'Cash',
  /** Margin account. */
  MARGIN = 'Margin',
  /** Tax Free Savings Account. */
  TFSA = 'TFSA',
  /** Registered Retirement Savings Plan. */
  RRSP = 'RRSP',
  /** Spousal RRSP. */
  SRRSP = 'SRRSP',
  /** Locked-In RRSP. */
  LRRSP = 'LRRSP',
  /** Locked-In Retirement Account. */
  LIRA = 'LIRA',
  /** Life Income Fund. */
  LIF = 'LIF',
  /** Retirement Income Fund. */
  RIF = 'RIF',
  /** Spousal RIF. */
  SRIF = 'SRIF',
  /** Locked-In RIF. */
  LRIF = 'LRIF',
  /** Registered RIF. */
  RRIF = 'RRIF',
  /** Prescribed RIF. */
  PRIF = 'PRIF',
  /** Individual Registered Education Savings Plan. */
  RESP = 'RESP',
  /** Family RESP. */
  FRESP = 'FRESP',
}

/** Specifies all supported account client types. */
/*
Client Account Type
The following table specifies all supported account client types.

Type	Description
Individual	Account held by an individual.
Joint	Account held jointly by several individuals (e.g., spouses).
Informal Trust	Non-individual account held by an informal trust.
Corporation	Non-individual account held by a corporation.
Investment Club	Non-individual account held by an investment club.
Formal Trust	Non-individual account held by a formal trust.
Partnership	Non-individual account held by a partnership.
Sole Proprietorship	Non-individual account held by a sole proprietorship.
Family	Account held by a family.
Joint and Informal Trust	Non-individual account held by
a joint and informal trust.

Institution	Non-individual account held by an institution.
*/
export enum ClientAccountType {
  /** Account held by an individual. */
  INDIVIDUAL = 'Individual',
  /** Account held jointly by several individuals (e.g., spouses). */
  JOINT = 'Joint',
  /** Non-individual account held by an informal trust. */
  INFORMAL_TRUST = 'Informal Trust',
  /** Non-individual account held by a corporation. */
  CORPORATION = 'Corporation',
  /** Non-individual account held by an investment club. */
  INVESTMENT_CLUB = 'Investment Club',
  /** Non-individual account held by a formal trust. */
  FORMAL_TRUST = 'Formal Trust',
  /** Non-individual account held by a partnership. */
  PARTNERSHIP = 'Partnership',
  /** Non-individual account held by a sole proprietorship. */
  SOLE_PROPRIETORSHIP = 'Sole Proprietorship',
  /** Account held by a family. */
  FAMILY = 'Family',
  /** Non-individual account held by a joint and informal trust. */
  JOINT_AND_INFORMAL_TRUST = 'Joint and Informal Trust',
  /** Non-individual account held by an institution. */
  INSTITUTION = 'Institution',
}

/** Specifies all supported account status values. */
/*
Account Status
The following table specifies all supported account status values.

Type
Active
Suspended (Closed)
Suspended (View Only)
Liquidate Only
Closed
*/
export enum AccountStatus {
  /** Active */
  ACTIVE = 'Active',
  /** Suspended (Closed) */
  SUSPENDED_CLOSED = 'Suspended (Closed)',
  /** Suspended (View Only) */
  SUSPENDED_VIEW_ONLY = 'Suspended (View Only)',
  /** Liquidate Only */
  LIQUIDATE_ONLY = 'Liquidate Only',
  /** Closed */
  CLOSED = 'Closed',
}

/** Specifies all supported market data tick types. */
/*
Tick Type
The following table specifies all supported market data tick types.

Type	Description
Up	Designates an uptick.
Down	Designates a downtick.
Equal	Designates a tick that took place at the same price as a previous one.
*/
export enum TickType {
  /** Designates an uptick. */
  UP = 'Up',
  /** Designates a downtick. */
  DOWN = 'Down',
  /** Designates a tick that took place at the same price as a previous one. */
  EQUAL = 'Equal',
}

/** Specifies all supported option types. */
/*
Option Type
The following table specifies all supported option types.

Type	Description
Call	Call option.
Put	Put option.
*/

export enum OptionType {
  /** Call option. */
  CALL = 'Call',
  /** Put option. */
  PUT = 'Put',
}

/** Specifies all supported option duration types. */
/*
Option Duration Type
The following table specifies all supported option duration types.

Type	Description
Weekly	Weekly expiry cycle.
Monthly	Monthly expiry cycle.
Quarterly	Quarterly expiry cycle.
LEAP	Long-term Equity Appreciation contracts.
*/
export enum OptionDurationType {
  /** Weekly expiry cycle. */
  WEEKLY = 'Weekly',
  /** Monthly expiry cycle. */
  MONTHLY = 'Monthly',
  /** Quarterly expiry cycle. */
  QUARTERLY = 'Quarterly',
  /** Long-term Equity Appreciation contracts. */
  LEAP = 'LEAP',
}

/** Specifies all supported option exercise types. */
/*
Option Exercise Type
The following table specifies all supported option exercise types.

Type	Description
American	American option.
European	European option.
*/
export enum OptionExerciseType {
  /** American option. */
  AMERICAN = 'American',
  /** European option. */
  EUROPEAN = 'European',
}

/** Specifies all supported security types. */
/*
Security Type
The following table specifies all supported security types.

Type	Description
Stock	Common and preferred equities, ETFs, ETNs, units, ADRs, etc.
Option	Equity and index options.
Bond	Debentures, notes, bonds, both corporate and government.
Right	Equity or bond rights and warrants.
Gold	Physical gold (coins, wafers, bars).
MutualFund	Canadian or US mutual funds.
Index	Stock indices (e.g., Dow Jones).
*/
export enum SecurityType {
  /** Common and preferred equities, ETFs, ETNs, units, ADRs, etc. */
  STOCK = 'Stock',
  /** Equity and index options. */
  OPTION = 'Option',
  /** Debentures, notes, bonds, both corporate and government. */
  BOND = 'Bond',
  /** Equity or bond rights and warrants. */
  RIGHT = 'Right',
  /** Physical gold (coins, wafers, bars). */
  GOLD = 'Gold',
  /** Canadian or US mutual funds. */
  MUTUALFUND = 'MutualFund',
  /** Stock indices (e.g., Dow Jones). */
  INDEX = 'Index',
}

/** Specifies all supported order state filter types. */
/*
Order State Filter Type
The following table specifies all supported order state filter types.

Type	Description
All	Includes all orders, regardless of their state.
Open	Includes only orders that are still open.
Closed	Includes only orders that are already closed.
*/
export enum OrderStateFilterType {
  /** Retrieve all orders, regardless of their state. */
  ALL = 'All',
  /** Retrieve only orders that are still open. */
  OPEN = 'Open',
  /** Retrieve only orders that are already closed. */
  CLOSED = 'Closed',
}

/** Specifies all supported order side values. */
/*
Order Action
The following table specifies all supported order side values.

Type	Description
Buy	Designates an order to purchase a security.
Sell	Designates an order to dispose a security.
*/
export enum OrderAction {
  /** Designates an order to purchase a security. */
  BUY = 'Buy',
  /** Designates an order to dispose a security. */
  SELL = 'Sell',
}

/** Specifies all supported client order side values. */
/*
Order Side
The following table specifies all supported client order side values.

Type	Description
Buy	Buy
Sell	Sell
Short	Sell short.
Cov	Cover the short.
BTO	Buy-To-Open.
STC	Sell-To-Close.
STO	Sell-To-Open.
BTC	Buy-To-Close.
*/

export enum OrderSide {
  /** Buy */
  BUY = 'Buy',
  /** Sell */
  SELL = 'Sell',
  /** Sell short. */
  SHORT = 'Short',
  /** Cover the short. */
  COV = 'Cov',
  /** Buy-To-Open. */
  BTO = 'BTO',
  /** Sell-To-Close. */
  STC = 'STC',
  /** Sell-To-Open. */
  STO = 'STO',
  /** Buy-To-Close. */
  BTC = 'BTC',
}

/** Specifies all supported order types. */
/*
Order Type
The following table specifies all supported order types.

Type
Market
Limit
Stop
StopLimit
TrailStopInPercentage
TrailStopInDollar
TrailStopLimitInPercentage
TrailStopLimitInDollar
LimitOnOpen
LimitOnClose
*/
export enum OrderType {
  /** Market */
  MARKET = 'Market',
  /** Limit */
  LIMIT = 'Limit',
  /** Stop */
  STOP = 'Stop',
  /** StopLimit */
  STOP_LIMIT = 'StopLimit',
  /** Trail Stop In Percentage */
  TRAIL_STOPIN_PERCENTAGE = 'TrailStopInPercentage',
  /** Trail Stop In Dollar */
  TRAIL_STOP_IN_DOLLAR = 'TrailStopInDollar',
  /** Trail Stop Limit In Percentage */
  TRAIL_STOP_LIMIT_IN_PERCENTAGE = 'TrailStopLimitInPercentage',
  /** Trail Stop Limit In Dollar */
  TRAIL_STOP_LIMIT_IN_DOLLAR = 'TrailStopLimitInDollar',
  /** Limit On Open */
  LIMIT_ON_OPEN = 'LimitOnOpen',
  /** Limit On Close */
  LIMIT_ON_CLOSE = 'LimitOnClose',
}

/** Specifies all supported order Time-In-Force instructions. */
/*
Order Time-In-Force
The following table specifies all supported order Time-In-Force instructions.

Type
Day
GoodTillCanceled
GoodTillExtendedDay
GoodTillDate
ImmediateOrCancel
FillOrKill
*/
export enum OrderTimeInForce {
  /** Day */
  DAY = 'Day',
  /** Good Till Canceled */
  GOOD_TILL_CANCELED = 'GoodTillCanceled',
  /** Good Till Extended Day */
  GOOD_TILL_EXTENDED_DAY = 'GoodTillExtendedDay',
  /** Good Till Date */
  GOOD_TILL_DATE = 'GoodTillDate',
  /** Immediate Or Cancel */
  IMMEDIATE_OR_CANCEL = 'ImmediateOrCancel',
  /** Fill Or Kill */
  FILL_OR_KILL = 'FillOrKill',
}

/** Specifies all supported order states. */
/*
Order State
The following table specifies all supported order states.

Type
Failed
Pending
Accepted
Rejected
CancelPending
Canceled
PartialCanceled
Partial
Executed
ReplacePending
Replaced
Stopped
Suspended
Expired
Queued
Triggered
Activated
PendingRiskReview
ContingentOrder
*/
export enum OrderState {
  /** Type */
  TYPE = 'Type',
  /** Failed */
  FAILED = 'Failed',
  /** Pending */
  PENDING = 'Pending',
  /** Accepted */
  ACCEPTED = 'Accepted',
  /** Rejected */
  REJECTED = 'Rejected',
  /** Cancel Pending */
  CANCEL_PENDING = 'CancelPending',
  /** Canceled */
  CANCELED = 'Canceled',
  /** Partial Canceled */
  PARTIAL_CANCELED = 'PartialCanceled',
  /** Partial */
  PARTIAL = 'Partial',
  /** Executed */
  EXECUTED = 'Executed',
  /** Replace Pending */
  REPLACE_PENDING = 'ReplacePending',
  /** Replaced */
  REPLACED = 'Replaced',
  /** Stopped */
  STOPPED = 'Stopped',
  /** Suspended */
  SUSPENDED = 'Suspended',
  /** Expired */
  EXPIRED = 'Expired',
  /** Queued */
  QUEUED = 'Queued',
  /** Triggered */
  TRIGGERED = 'Triggered',
  /** Activated */
  ACTIVATED = 'Activated',
  /** Pending Risk Review */
  PENDING_RISK_REVIEW = 'PendingRiskReview',
  /** Contingent Order */
  CONTINGENT_ORDER = 'ContingentOrder',
}

/** Specifies all supported order execution status values. */
/*
Historical Data Granularity
The following table specifies all supported order execution status values.

Type	Description
OneMinute	One candlestick per 1 minute.
TwoMinutes	One candlestick per 2 minutes.
ThreeMinutes	One candlestick per 3 minutes.
FourMinutes	One candlestick per 4 minutes.
FiveMinutes	One candlestick per 5 minutes.
TenMinutes	One candlestick per 10 minutes.
FifteenMinutes	One candlestick per 15 minutes.
TwentyMinutes	One candlestick per 20 minutes.
HalfHour	One candlestick per 30 minutes.
OneHour	One candlestick per 1 hour.
TwoHours	One candlestick per 2 hours.
FourHours	One candlestick per 4 hours.
OneDay	One candlestick per 1 day.
OneWeek	One candlestick per 1 week.
OneMonth	One candlestick per 1 month.
OneYear	One candlestick per 1 year.
*/
export enum HistoricalDataGranularity {
  /** One candlestick per 1 minute. */
  ONEMINUTE = 'OneMinute',
  /** One candlestick per 2 minutes. */
  TWOMINUTES = 'TwoMinutes',
  /** One candlestick per 3 minutes. */
  THREEMINUTES = 'ThreeMinutes',
  /** One candlestick per 4 minutes. */
  FOURMINUTES = 'FourMinutes',
  /** One candlestick per 5 minutes. */
  FIVEMINUTES = 'FiveMinutes',
  /** One candlestick per 10 minutes. */
  TENMINUTES = 'TenMinutes',
  /** One candlestick per 15 minutes. */
  FIFTEENMINUTES = 'FifteenMinutes',
  /** One candlestick per 20 minutes. */
  TWENTYMINUTES = 'TwentyMinutes',
  /** One candlestick per 30 minutes. */
  HALFHOUR = 'HalfHour',
  /** One candlestick per 1 hour. */
  ONEHOUR = 'OneHour',
  /** One candlestick per 2 hours. */
  TWOHOURS = 'TwoHours',
  /** One candlestick per 4 hours. */
  FOURHOURS = 'FourHours',
  /** One candlestick per 1 day. */
  ONEDAY = 'OneDay',
  /** One candlestick per 1 week. */
  ONEWEEK = 'OneWeek',
  /** One candlestick per 1 month. */
  ONEMONTH = 'OneMonth',
  /** One candlestick per 1 year. */
  ONEYEAR = 'OneYear',
}

/** Specifies all supported bracket order components. */
/*
Order Class
The following table specifies all supported bracket order components.

Type	Description
Primary	Primary order
Limit	Profit exit order
StopLoss	Loss exit order
*/
export enum OrderClass {
  /** Primary order */
  PRIMARY = 'Primary',
  /** Profit exit order */
  LIMIT = 'Limit',
  /** Loss exit order */
  STOPLOSS = 'StopLoss',
}

/** Supported types of strategies for multi-leg strategy orders. */
/*
Strategy Types
The following types of strategies are supported for multi-leg strategy orders

Type	Description
CoveredCall	Covered Call
MarriedPuts	Married Put
VerticalCallSpread	Vertical Call
VerticalPutSpread	Vertical Put
CalendarCallSpread	Calendar Call
CalendarPutSpread	Calendar Put
DiagonalCallSpread	Diagonal Call
DiagonalPutSpread	Diagonal Put
Collar	Collar
Straddle	Straddle
Strangle	Strangle
ButterflyCall	Butterfly Call
ButterflyPut	Butterfly Put
IronButterfly	Iron Butterfly
CondorCall	Condor
Custom	Custom, or user defined
SingleLeg
*/
export enum StrategyTypes {
  /** Covered Call. */
  COVEREDCALL = 'CoveredCall',
  /** Married Put. */
  MARRIEDPUTS = 'MarriedPuts',
  /** Vertical Call. */
  VERTICALCALLSPREAD = 'VerticalCallSpread',
  /** Vertical Put. */
  VERTICALPUTSPREAD = 'VerticalPutSpread',
  /** Calendar Call. */
  CALENDARCALLSPREAD = 'CalendarCallSpread',
  /** Calendar Put. */
  CALENDARPUTSPREAD = 'CalendarPutSpread',
  /** Diagonal Call. */
  DIAGONALCALLSPREAD = 'DiagonalCallSpread',
  /** Diagonal Put. */
  DIAGONALPUTSPREAD = 'DiagonalPutSpread',
  /** Collar. */
  COLLAR = 'Collar',
  /** Straddle. */
  STRADDLE = 'Straddle',
  /** Strangle. */
  STRANGLE = 'Strangle',
  /** Butterfly Call. */
  BUTTERFLYCALL = 'ButterflyCall',
  /** Butterfly Put. */
  BUTTERFLYPUT = 'ButterflyPut',
  /** Iron Butterfly. */
  IRONBUTTERFLY = 'IronButterfly',
  /** Condor. */
  CONDORCALL = 'CondorCall',
  /** Custom, or user defined. */
  CUSTOM = 'Custom',
  SINGLELEG = 'SingleLeg',
}

/**
 * Specifies all supported Questrade Developer Platform Enumertions Types
 * @see https://www.questrade.com/api/documentation/rest-operations/enumerations/enumerations
 */

export const qtEnumerations = {
  /** Specifies all supported currency codes. */
  Currency,
  /** Specifies all supported listing exchanges. */
  ListingExchange,
  /** Specifies all supported user account types. */
  AccountType,
  /** Specifies all supported account client types. */
  ClientAccountType,
  /** Specifies all supported account status values. */
  AccountStatus,
  /** Specifies all supported market data tick types. */
  TickType,
  /** Specifies all supported option types. */
  OptionType,
  /** Specifies all supported option duration types. */
  OptionDurationType,
  /** Specifies all supported option exercise types. */
  OptionExerciseType,
  /** Specifies all supported security types. */
  SecurityType,
  /** Specifies all supported order state filter types. */
  OrderStateFilterType,
  /** Specifies all supported order side values. */
  OrderAction,
  /** Specifies all supported client order side values. */
  OrderSide,
  /** Specifies all supported order types. */
  OrderType,
  /** Specifies all supported order Time-In-Force instructions. */
  OrderTimeInForce,
  /** Specifies all supported order states. */
  OrderState,
  /** Specifies all supported order execution status values. */
  HistoricalDataGranularity,
  /** Specifies all supported bracket order components. */
  OrderClass,
  /** Supported types of strategies for multi-leg strategy orders. */
  StrategyTypes,
};

/**
 * @license MIT
 *
 * @Copyright (c) 2019
 *
 * @author Benjamin Vincent Kasapoglu (Luxcium)
 *
 * Permission is hereby granted, free of charge, to all person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ALL KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ALL CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 */
