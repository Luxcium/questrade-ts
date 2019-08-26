# Questrade API Enumerations

Questrade API TypeScript Enumerations (Unofficial)

[Refer to Questrade API TypeScript Enumerations for more informations](https://wwwquestradecom/api/documentation/restoperations/enumerations/enumerations)

> **Open a GitHub issue for any problems**

## Currency

### The following table specifies all supported currency codes

- Type Description
- USD US dollar
- CAD Canadian dollar
- Listing Exchange

### The following table specifies all supported listing exchanges

- Type Description
- TSX Toronto Stock Exchange
- TSXV Toronto Venture Exchange
- CNSX Canadian National Stock Exchange
- MX Montreal Exchange
- NASDAQ NASDAQ
- NYSE New York Stock Exchange
- NYSEAM NYSE AMERICAN
- ARCA NYSE Arca
- OPRA Option Reporting Authority
- PinkSheets Pink Sheets
- OTCBB OTC Bulletin Board

## Account Type

### The following table specifies all supported user account types

- Type Description
- Cash Cash account
- Margin Margin account
- TFSA Tax Free Savings Account
- RRSP Registered Retirement Savings Plan
- SRRSP Spousal RRSP
- LRRSP Locked In RRSP
- LIRA Locked In Retirement Account
- LIF Life Income Fund
- RIF Retirement Income Fund
- SRIF Spousal RIF
- LRIF Locked In RIF
- RRIF Registered RIF
- PRIF Prescribed RIF
- RESP Individual Registered Education Savings Plan
- FRESP Family RESP

## Client Account Type

### The following table specifies all supported account client types

- Type Description
- Individual Account held by an individual
- Joint Account held jointly by several individuals (eg, spouses)
- Informal Trust Non individual account held by an informal trust
- Corporation Non individual account held by a corporation
- Investment Club Non individual account held by an investment club
- Formal Trust Non individual account held by a formal trust
- Partnership Non individual account held by a partnership
- Sole Proprietorship Non individual account held by a sole proprietorship
- Family Account held by a family
- Joint and Informal Trust Non individual account held by a joint and informal trust
- Institution Non individual account held by an institution

## Account Status

### The following table specifies a supported account status values

- Type
- Active
- Suspended (Closed)
- Suspended (View Only)
- Liquidate Only
- Closed
- Tick Type

### The following table specifies all supported market data tick types

- Type Description
- Up Designates an uptick
- Down Designates a downtick
- Equal Designates a tick that took place at the same price as a previous one

## Option Type

### The following table specifies all supported option types

- Type Description
- Call Call option
- Put Put option
- Option Duration Type

### The following table specifies all supported option duration types

- Type Description
- Weekly Weekly expiry cycle
- Monthly Monthly expiry cycle
- Quarterly Quarterly expiry cycle
- LEAP Long term Equity Appreciation contracts

## Option Exercise Type

### The following table specifies all supported option exercise types

- Type Description
- American American option
- European European option

## Security Type

### The following table specifies all supported security types

- Type Description
- Stock Common and preferred equities, ETFs, ETNs, units, ADRs, etc
- Option Equity and index options
- Bond Debentures, notes, bonds, both corporate and government
- Right Equity or bond rights and warrants
- Gold Physical gold (coins, wafers, bars)
- MutualFund Canadian or US mutual funds
- Index Stock indices (eg, Dow Jones)

## Order State Filter Type

### The following table specifies all supported order state filter types

- Type Description
- All Includes all orders, regardless of their state
- Open Includes only orders that are still open
- Closed Includes only orders that are already closed

## Order Action

### The following table specifies all supported order side values

- Type Description
- Buy Designates an order to purchase a security
- Sell Designates an order to dispose a security

## Order Side

### The following table specifies all supported client order side values

- Buy Buy
- Sell Sell
- Short Sell short
- Cov Cover the short
- BTO Buy To Open
- STC Sell To Close
- STO Sell To Open
- BTC Buy To Close

## Order Type

### The following table specifies a supported order types

- Market
- Limit
- Stop
- StopLimit
- TrailStopInPercentage
- TrailStopInDollar
- TrailStopLimitInPercentage
- TrailStopLimitInDollar
- LimitOnOpen
- LimitOnClose

## Order Time In Force

### The following table specifies a supported order Time In Force instructions

- Day
- GoodTillCanceled
- GoodTillExtendedDay
- GoodTillDate
- ImmediateOrCancel
- FillOrKill

## Order State

### The following table specifies a supported order states

- Failed
- Pending
- Accepted
- Rejected
- CancelPending
- Canceled
- PartialCanceled
- Partial
- Executed
- ReplacePending
- Replaced
- Stopped
- Suspended
- Expired
- Queued
- Triggered
- Activated
- PendingRiskReview
- ContingentOrder

## Historical Data Granularity

### The following table specifies all supported order execution status values

- OneMinute One candlestick per 1 minute
- TwoMinutes One candlestick per 2 minutes
- ThreeMinutes One candlestick per 3 minutes
- FourMinutes One candlestick per 4 minutes
- FiveMinutes One candlestick per 5 minutes
- TenMinutes One candlestick per 10 minutes
- FifteenMinutes One candlestick per 15 minutes
- TwentyMinutes One candlestick per 20 minutes
- HalfHour One candlestick per 30 minutes
- OneHour One candlestick per 1 hour
- TwoHours One candlestick per 2 hours
- FourHours One candlestick per 4 hours
- OneDay One candlestick per 1 day
- OneWeek One candlestick per 1 week
- OneMonth One candlestick per 1 month
- OneYear One candlestick per 1 year

## Order Class

### The following table specifies all supported bracket order components

- Primary Primary order
- Limit Profit exit order
- StopLoss Loss exit order

## Strategy Types

### The following types of strategies a supported for multi leg strategy orders

- CoveredCall Covered Call
- MarriedPuts Married Put
- VerticalCallSpread Vertical Call
- VerticalPutSpread Vertical Put
- CalendarCallSpread Calendar Call
- CalendarPutSpread Calendar Put
- DiagonalCallSpread Diagonal Call
- DiagonalPutSpread Diagonal Put
- Collar Collar
- Straddle Straddle
- Strangle Strangle
- ButterflyCall Butterfly Call
- ButterflyPut Butterfly Put
- IronButterfly Iron Butterfly
- CondorCall Condor
- Custom Custom, or user defined
