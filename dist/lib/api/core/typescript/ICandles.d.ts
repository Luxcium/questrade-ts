import { DateTime } from './Types';
export interface ICandles {
    candles: ICandle[];
}
export interface ICandle {
    start?: DateTime;
    end?: DateTime;
    open?: number;
    high?: number;
    low?: number;
    close?: number;
    volume?: number;
    VWAP?: number;
}
//# sourceMappingURL=ICandles.d.ts.map