import { ITimeRateLimiter } from '../../../typescript/ITimeRateLimiter';
import { remaningTimeString } from './remaningTimeString';

export const logRemanings = ({
  timeNow,
  timeThen,
  secondsRemaning,
  maximumperseconds,
  possiblePerSeconds,
  requestsRemaining,
  maximums,
}: ITimeRateLimiter) => {
  console.log();
  console.log('time remaning', remaningTimeString(secondsRemaning));
  console.log('time now', timeNow);
  console.log('time then', timeThen);
  console.log('time remaining until reset', secondsRemaning, '(sec)');
  console.log();
  console.log('requsts remaning', requestsRemaining);
  console.log();
  console.log('Requests per seconds possible', possiblePerSeconds);
  console.log(
    '[maximum total in remaining period, maximum per second]',
    maximums,
    maximumperseconds
  );
};
