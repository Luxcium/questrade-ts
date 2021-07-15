import {
  Currency,
  OptionDurationType,
  OptionExerciseType,
  OptionType,
  SecurityType,
} from 'questrade-api-enumerations';

// export interface IEquitySymbols {
// readonly   symbols: IEquitySymbol[];
// }
// export interface IEquitySymbol {
// readonly   symbol: string;
// readonly   symbolId: number;
// readonly   description: string;
// readonly   securityType: SecurityType;
// readonly   listingExchange: ListingExchange;
// readonly   isQuotable: boolean;
// readonly   isTradable: boolean;
// readonly   currency: Currency;
// readonly   prevDayClosePrice: number;
// readonly   highPrice52: number;
// readonly   lowPrice52: number;
// readonly   averageVol3Months: number;
// readonly   averageVol20Days: number;
// readonly   outstandingShares: number;
// readonly   eps: number;
// readonly   pe: number;
// readonly   dividend: number;
// readonly   yield: number;
// readonly   exDate: string;
// readonly   marketCap: number;
// readonly   tradeUnit: number;
// readonly   optionType: OptionType;
// readonly   optionDurationType: OptionDurationType;
// readonly   optionRoot: string;
// readonly   optionContractDeliverables: string;
// readonly   optionExerciseType: OptionExerciseType;
// readonly   optionExpiryDate: string;
// readonly   dividendDate: string;
// readonly   optionStrikePrice: number;
// readonly   hasOptions: boolean;
// readonly   minTicks: MinTick[];
// readonly   industrySector: string;
// readonly   industryGroup: string;
// readonly   industrySubgroup: string;
// }

export interface IStockSymbols {
  readonly symbols: IStockSymbol[];
}
export interface IStockSymbol {
  readonly symbol?: string;
  readonly symbolId?: number;
  readonly tradeUnit: number;
  readonly prevDayClosePrice?: number;
  readonly highPrice52?: number;
  readonly lowPrice52?: number;
  readonly averageVol3Months?: number;
  readonly averageVol20Days?: number;
  readonly outstandingShares?: number;
  readonly eps?: number;
  readonly pe?: number;
  readonly dividend?: number;
  readonly yield?: number;
  readonly exDate?: Date | string;
  readonly marketCap?: number;
  readonly optionType?: OptionType | null;
  readonly optionDurationType?: OptionDurationType | null;
  readonly optionRoot?: string;
  readonly optionContractDeliverables?: string | OptionContractDeliverables;
  readonly underlyings?: string | [];
  readonly UnderlyingMultiplierPair?: string | [];
  readonly multiplier?: number;
  readonly underlyingSymbol?: string;
  readonly underlyingSymbolId?: string;
  readonly cashInLieu?: number;
  readonly optionExerciseType?: OptionExerciseType | null;
  readonly listingExchange?: string | [];
  readonly description?: string;
  readonly securityType?: SecurityType;
  readonly dividendDate?: Date | string;
  readonly optionExpiryDate: string | null;
  readonly optionStrikePrice?: number | null;
  readonly isTradable?: boolean;
  readonly isQuotable?: boolean;
  readonly hasOptions?: boolean;
  readonly currency?: Currency;
  readonly minTicks?: string | MinTick[];
  readonly MinTickData?: string | [];
  readonly pivot?: number;
  readonly minTick?: number;
  readonly industrySector?: string;
  readonly industryGroup?: string;
  readonly industrySubGroup?: string;
  readonly industrySubgroup: string;
  readonly count?: number;
}
export interface MinTick {
  readonly pivot: number;
  readonly minTick: number;
}

export interface OptionContractDeliverables {
  readonly underlyings: [];
  readonly cashInLieu: number;
}
