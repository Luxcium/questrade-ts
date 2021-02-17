import type { ITimeRateLimiter } from '../../../typescript/ITimeRateLimiter';
import { remaningTimeString } from './remaningTimeString';

// cONSOLE: using console info is a sideEffect and will be flagged

export const logRemanings = ({
  timeNow,
  timeThen,
  secondsRemaning,
  maximumperseconds,
  possiblePerSeconds,
  remaining,
  maximums,
}: ITimeRateLimiter) => {
  console.info();
  console.info('time remaning', remaningTimeString(secondsRemaning));
  console.info('time now', timeNow);
  console.info('time then', timeThen);
  console.info('time remaining until reset', secondsRemaning, '(sec)');
  console.info();
  console.info('requsts remaning', remaining);
  console.info();
  console.info('Requests per seconds possible', possiblePerSeconds);
  console.info(
    '[maximum total in remaining period, maximum per second]',
    maximums,
    maximumperseconds,
  );
};
