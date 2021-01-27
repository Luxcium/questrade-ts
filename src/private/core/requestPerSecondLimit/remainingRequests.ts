import { ClientResponse } from '../../../resources/side-effects/types';
import { ITimeRateLimiter } from '../../../typescript/ITimeRateLimiter';

export const remainingRequests = <T>(
  response: ClientResponse<T>,
  maximumperseconds: number = 20,
): ITimeRateLimiter => {
  const remainingStr: string = response.headers['x-ratelimit-remaining'];
  const timeUntilResetStr: string = response.headers['x-ratelimit-reset'];
  const remaining = Number.parseInt(remainingStr, 10);
  const timeUntilReset = Number.parseInt(timeUntilResetStr, 10);

  const timeNow = Math.floor(new Date().getTime() / 1000) + 1;
  const timeThen = Math.floor(timeUntilReset);
  const secondsRemaning = timeUntilReset - timeNow;
  const minutesRemaning = Math.ceil((timeUntilReset - timeNow) / 60);
  // const timeNow_ = new Date(timeNow).toTimeString();

  // const timeThen_ = new Date(timeThen).toLocaleTimeString();

  const possiblePerSeconds = Math.floor(
    Math.max(Math.min(remaining / secondsRemaning, maximumperseconds), -1),
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
};
