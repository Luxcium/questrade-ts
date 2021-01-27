export interface ITimeRateLimiter {
  timeNow: number;
  timeThen: number;
  secondsRemaning: number;
  minutesRemaning?: number;
  maximumperseconds: number;
  possiblePerSeconds: number;
  remaining: number;
  maximums: [number, number, number];
}
