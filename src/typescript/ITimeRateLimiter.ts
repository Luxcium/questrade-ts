export interface ITimeRateLimiter {
  readonly timeNow: number;
  readonly timeThen: number;
  readonly secondsRemaning: number;
  readonly minutesRemaning?: number;
  readonly maximumperseconds: number;
  readonly possiblePerSeconds: number;
  readonly remaining: number;
  readonly maximums: [number, number, number];
}
