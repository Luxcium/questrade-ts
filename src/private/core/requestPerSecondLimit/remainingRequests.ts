import { ClientResponse } from '../../../resources/side-effects/types';
import { ITimeRateLimiter } from '../../../typescript/ITimeRateLimiter';

export const remainingRequests = <T>(
  response: ClientResponse<T>,
  maximumperseconds: number = 20,
): ITimeRateLimiter => {
  const remainingStr: string = response.headers['x-ratelimit-remaining'];
  const timeUntilResetStr: string = response.headers['x-ratelimit-reset'];
  const requestsRemaining = Number.parseInt(remainingStr, 10);
  const timeUntilReset = Number.parseInt(timeUntilResetStr, 10);

  const timeNow = Math.floor(new Date().getTime() / 1000) + 1;
  const timeThen = Math.floor(timeUntilReset);
  const secondsRemaning = timeUntilReset - timeNow;
  const minutesRemaning = Math.ceil((timeUntilReset - timeNow) / 60);
  // const timeNow_ = new Date(timeNow).toTimeString();

  // const timeThen_ = new Date(timeThen).toLocaleTimeString();

  const possiblePerSeconds = Math.floor(
    Math.min(requestsRemaining / secondsRemaning, maximumperseconds),
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
    minutesRemaning,
    maximumperseconds,
    possiblePerSeconds,
    requestsRemaining,
    maximums,
  };
};
