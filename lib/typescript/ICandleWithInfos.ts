import { Currency } from 'questrade-api-enumerations';

export interface ICandleWithInfos {
  readonly candleStickOCHLV?: number[];
  readonly close?: number | undefined;
  readonly currency?: Currency;
  readonly description?: string;
  readonly end?: string | Date | undefined;
  readonly epochEnd?: number;
  readonly epochStart?: number;
  readonly granularity?: string | undefined;
  readonly high?: number | undefined;
  readonly listingExchange?: string;
  readonly low?: number | undefined;
  // readonly matrixDiff?: number[][];
  // readonly matrixRatio?: number[][];
  readonly open?: number | undefined;
  readonly securityType?: string;
  readonly serverTime?: Date;
  readonly start?: string | Date | undefined;
  readonly symbol?: string;
  readonly symbolID?: number;
  readonly symbolName?: string;
  readonly valid: boolean;
  readonly volume?: number | undefined;
  readonly VWAP?: number | undefined;
}
