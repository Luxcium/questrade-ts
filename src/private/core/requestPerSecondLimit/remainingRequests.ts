import { AxiosResponse } from 'axios';
import { ITimeRateLimiter } from '../../../typescript/ITimeRateLimiter';

export const remainingRequests = <T>(
  response: AxiosResponse<T>,
  maximumperseconds: number = 20
): ITimeRateLimiter => {
  const requestsRemaining = parseInt(response.headers['x-ratelimit-remaining']);
  const timeUntilReset = parseInt(response.headers['x-ratelimit-reset']);

  const timeNow = Math.floor(new Date().getTime() / 1000) + 1;
  const timeThen = Math.floor(timeUntilReset);
  const secondsRemaning = timeUntilReset - timeNow;

  const possiblePerSeconds = Math.floor(
    Math.min(requestsRemaining / secondsRemaning, maximumperseconds)
  );
  const maximums: [number, number, number] = [
    requestsRemaining,
    possiblePerSeconds,
    maximumperseconds,
  ];

  return {
    timeNow,
    timeThen,
    secondsRemaning,
    maximumperseconds,
    possiblePerSeconds,
    requestsRemaining,
    maximums,
  };
};
