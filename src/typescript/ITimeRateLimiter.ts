export interface ITimeRateLimiter {
  timeNow: number;
  timeThen: number;
  secondsRemaning: number;
  minutesRemaning?: number;
  maximumperseconds: number;
  possiblePerSeconds: number;
  requestsRemaining: number;
  maximums: [number, number, number];
}
