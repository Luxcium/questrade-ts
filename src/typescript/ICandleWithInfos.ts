import { Currency } from 'questrade-api-enumerations';

export interface ICandleWithInfos {
  candleStickOCHLV?: number[];
  close?: number | undefined;
  currency?: Currency;
  description?: string;
  end?: string | Date | undefined;
  epochEnd?: number;
  epochStart?: number;
  granularity?: string | undefined;
  high?: number | undefined;
  listingExchange?: string;
  low?: number | undefined;
  // matrixDiff?: number[][];
  // matrixRatio?: number[][];
  open?: number | undefined;
  securityType?: string;
  serverTime?: Date;
  start?: string | Date | undefined;
  symbol?: string;
  symbolId?: number;
  symbolID?: number | undefined;
  symbolName?: string;
  valid: boolean;
  volume?: number | undefined;
  VWAP?: number | undefined;
}
