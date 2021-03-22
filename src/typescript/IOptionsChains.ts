export interface IOptionChains {
  readonly optionChain: IOptionChain[];
}

export interface IOptionChain {
  readonly expiryDate: string;
  readonly description: string;
  readonly listingExchange: string;
  readonly optionExerciseType: string;
  readonly chainPerRoot: IChainPerRoot[];
}

export interface IChainPerRoot {
  readonly root: string;
}
export interface IChainPerStrike {
  readonly strikePrice: number;
  readonly callSymbolId: number;
  readonly putSymbolId: number;
}
export interface IChainPerStrikePrice {
  readonly chainPerStrike: IChainPerStrike[];
  readonly multiplier: number;
  readonly chainPerStrikePrice: IChainPerStrike[];
}
