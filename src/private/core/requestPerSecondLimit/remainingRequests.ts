import { AxiosResponse } from 'axios';
import { ITimeRateLimiter } from '../../../typescript/ITimeRateLimiter';

export const remainingRequests = <T>(
  response: AxiosResponse<T>,
  maximumperseconds: number = 20
): ITimeRateLimiter => {
  const limitRemaining = parseInt(response.headers['x-ratelimit-remaining'], 2);
  const timeUntilReset = parseInt(response.headers['x-ratelimit-reset'], 2);

  const timeNow = Math.floor(new Date().getTime() / 1000) + 1;
  const timeThen = Math.floor(timeUntilReset);
  const secondsRemaning = timeUntilReset - timeNow;

  const possiblePerSeconds = Math.floor(
    Math.min(limitRemaining / secondsRemaning, maximumperseconds)
  );
  const maximums: [number, number, number] = [
    limitRemaining,
    possiblePerSeconds,
    maximumperseconds,
  ];

  return {
    timeNow,
    timeThen,
    secondsRemaning,
    maximumperseconds,
    possiblePerSeconds,
    requestsRemaining: limitRemaining,
    maximums,
  };
};
