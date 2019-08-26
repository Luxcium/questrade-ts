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
  USD = 'US dollar',
  /** Canadian dollar. */
  CAD = 'Canadian dollar',
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
  CASH = 'CASH',
  /** Margin account. */
  MARGIN = 'MARGIN',
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
  INDIVIDUAL = 'INDIVIDUAL',

  /** Account held jointly by several individuals (e.g., spouses). */
  JOINT = 'JOINT',

  /** Non-individual account held by an informal trust. */
  INFORMAL_TRUST = 'INFORMAL_TRUST',

  /** Non-individual account held by a corporation. */
  CORPORATION = 'CORPORATION',

  /** Non-individual account held by an investment club. */
  INVESTMENT_CLUB = 'INVESTMENT_CLUB',

  /** Non-individual account held by a formal trust. */
  FORMAL_TRUST = 'FORMAL_TRUST',

  /** Non-individual account held by a partnership. */
  PARTNERSHIP = 'PARTNERSHIP',

  /** Non-individual account held by a sole proprietorship. */
  SOLE_PROPRIETORSHIP = 'SOLE_PROPRIETORSHIP',

  /** Account held by a family. */
  FAMILY = 'FAMILY',

  /** Non-individual account held by a joint and informal trust. */
  JOINT_AND_INFORMAL_TRUST = 'JOINT_AND_INFORMAL_TRUST',

  /** Non-individual account held by an institution. */
  INSTITUTION = 'INSTITUTION',
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
  ACTIVE = 'ACTIVE',
  /** Suspended (Closed) */
  SUSPENDED_CLOSED = 'SUSPENDED_CLOSED',
  /** Suspended (View Only) */
  SUSPENDED_VIEW_ONLY = 'SUSPENDED_VIEW_ONLY',
  /** Liquidate Only */
  LIQUIDATE_ONLY = 'LIQUIDATE_ONLY',
  /** Closed */
  CLOSED = 'CLOSED',
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
  UP = 'UP',
  /** Designates a downtick. */
  DOWN = 'DOWN',
  /** Designates a tick that took place at the same price as a previous one. */
  EQUAL = 'EQUAL',
}

/*
% Enumerations

  #Currency: '',
  #ListingExchange: '',
  #AccountType: '',
  #ClientAccountType: '',
  #AccountStatus: '',
  #TickType: '',
  OptionType: '',
  OptionDurationType: '',
  OptionExerciseType: '',
  SecurityType: '',
  OrderStateFilterType: '',
  OrderAction: '',
  OrderSide: '',
  OrderType: '',
  OrderTimeInForce: '',
  OrderState: '',
  HistoricalDataGranularity: '',
  OrderClass: '',
  StrategyTypes: '',

*/

export const enums = {
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
  /** NOT IMPLEMENTED YET */
  OptionType: 'NOT IMPLEMENTED YET',
  /** NOT IMPLEMENTED YET */
  OptionDurationType: 'NOT IMPLEMENTED YET',
  /** NOT IMPLEMENTED YET */
  OptionExerciseType: 'NOT IMPLEMENTED YET',
  /** NOT IMPLEMENTED YET */
  SecurityType: 'NOT IMPLEMENTED YET',
  /** NOT IMPLEMENTED YET */
  OrderStateFilterType: 'NOT IMPLEMENTED YET',
  /** NOT IMPLEMENTED YET */
  OrderAction: 'NOT IMPLEMENTED YET',
  /** NOT IMPLEMENTED YET */
  OrderSide: 'NOT IMPLEMENTED YET',
  /** NOT IMPLEMENTED YET */
  OrderType: 'NOT IMPLEMENTED YET',
  /** NOT IMPLEMENTED YET */
  OrderTimeInForce: 'NOT IMPLEMENTED YET',
  /** NOT IMPLEMENTED YET */
  OrderState: 'NOT IMPLEMENTED YET',
  /** NOT IMPLEMENTED YET */
  HistoricalDataGranularity: 'NOT IMPLEMENTED YET',
  /** NOT IMPLEMENTED YET */
  OrderClass: 'NOT IMPLEMENTED YET',
  /** NOT IMPLEMENTED YET */
  StrategyTypes: 'NOT IMPLEMENTED YET',
};
