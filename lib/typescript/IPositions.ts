export interface IPosition {
  readonly symbol: string;
  readonly symbolId: number;
  readonly openQuantity: number;
  readonly closedQuantity: number;
  readonly currentMarketValue: number;
  readonly currentPrice: number;
  readonly averageEntryPrice: number;
  readonly dayPnl: number;
  readonly closedPnl: number;
  readonly openPnl: number;
  readonly totalCost: number;
  readonly isRealTime: boolean;
  readonly isUnderReorg: boolean;
}

export interface IPositions {
  readonly positions: IPosition[];
}
