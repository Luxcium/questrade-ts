import { ClientResponse } from '../../../resources/side-effects/types';
import { ITimeRateLimiter } from '../../../typescript/ITimeRateLimiter';

export function remainingRequests<T>(
  response: ClientResponse<T>,
  maximumperseconds: number = 20,
): ITimeRateLimiter {
  const { ceil, floor, max, min } = Math;
  const remaining = Number(response.headers['x-ratelimit-remaining']);
  const timeUntilReset = Number(response.headers['x-ratelimit-reset']);
  const timeNow = ceil(new Date().getTime() / 1000);
  const timeThen = floor(timeUntilReset);
  const secondsRemaning = timeThen - timeNow;
  const minutesRemaning = ceil((timeThen - timeNow) / 60);
  const possiblePerSeconds = floor(
    max(min(remaining / secondsRemaning, maximumperseconds), -1),
  );
  const maximums: [number, number, number] = [
    remaining,
    possiblePerSeconds,
    maximumperseconds,
  ];

  return {
    maximumperseconds,
    maximums,
    minutesRemaning,
    possiblePerSeconds,
    remaining,
    secondsRemaning,
    timeNow,
    timeThen,
  };
}
