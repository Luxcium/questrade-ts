export interface IOptionChains {
  optionChain: IOptionChain[];
}

export interface IOptionChain {
  expiryDate: string;
  description: string;
  listingExchange: string;
  optionExerciseType: string;
  chainPerRoot: IChainPerRoot[];
}

export interface IChainPerRoot {
  root: string;
}
export interface IChainPerStrike {
  strikePrice: number;
  callSymbolId: number;
  putSymbolId: number;
}
export interface IChainPerStrikePrice {
  chainPerStrike: IChainPerStrike[];
  multiplier: number;
  chainPerStrikePrice: IChainPerStrike[];
}
