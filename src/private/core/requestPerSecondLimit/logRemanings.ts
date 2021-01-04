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
  console.log(); // TODO: List the side effects
  console.log('time remaning', remaningTimeString(secondsRemaning)); // TODO: List the side effects
  console.log('time now', timeNow); // TODO: List the side effects
  console.log('time then', timeThen); // TODO: List the side effects
  console.log('time remaining until reset', secondsRemaning, '(sec)'); // TODO: List the side effects
  console.log(); // TODO: List the side effects
  console.log('requsts remaning', requestsRemaining); // TODO: List the side effects
  console.log(); // TODO: List the side effects
  console.log('Requests per seconds possible', possiblePerSeconds); // TODO: List the side effects
  console.log(
    '[maximum total in remaining period, maximum per second]',
    maximums,
    maximumperseconds,
  ); // TODO: List the side effects
};
