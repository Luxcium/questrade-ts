import { ISymbolInfos } from './ISymbolInfos';

export interface ICandleWithInfos {
  matrixDiff?: number[][];
  matrixRatio?: number[][];
  close?: number | undefined;
  end?: string | Date | undefined;
  granularity?: string | undefined;
  high?: number | undefined;
  low?: number | undefined;
  open?: number | undefined;
  start?: string | Date | undefined;
  valid: boolean;
  candleStick?: number[];
  epochMiliStart?: number;
  epochMiliEnd?: number;
  symbolID?: number | undefined;
  symbolInfos?: ISymbolInfos;
  volume?: number | undefined;
  VWAP?: number | undefined;
}
