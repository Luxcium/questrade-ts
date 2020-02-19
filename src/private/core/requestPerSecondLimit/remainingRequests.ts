import { AxiosResponse } from 'axios';
import { ITimeRateLimiter } from '../../../typescript/ITimeRateLimiter';

export const remainingRequests = <T>(
  response: AxiosResponse<T>,
  maximumperseconds: number = 19
): ITimeRateLimiter => {
  const remainingStr: string = response.headers['x-ratelimit-remaining'];
  const timeUntilResetStr: string = response.headers['x-ratelimit-reset'];
  const requestsRemaining = parseInt(remainingStr, 10);
  const timeUntilReset = parseInt(timeUntilResetStr, 10);

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
