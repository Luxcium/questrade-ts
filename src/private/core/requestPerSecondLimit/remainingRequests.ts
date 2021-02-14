import { ClientResponse } from '../../../resources/side-effects/types';

const { ceil, floor, max, min } = Math;

export const remainingRequests = <T>(
  response: ClientResponse<T>,
  maximumperseconds: number = 20,
) => {
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
};
