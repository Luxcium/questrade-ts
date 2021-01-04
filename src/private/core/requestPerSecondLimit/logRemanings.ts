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
  console.log(); // CONSOLE: List the side effects
  console.log('time remaning', remaningTimeString(secondsRemaning)); // CONSOLE: List the side effects
  console.log('time now', timeNow); // CONSOLE: List the side effects
  console.log('time then', timeThen); // CONSOLE: List the side effects
  console.log('time remaining until reset', secondsRemaning, '(sec)'); // CONSOLE: List the side effects
  console.log(); // CONSOLE: List the side effects
  console.log('requsts remaning', requestsRemaining); // CONSOLE: List the side effects
  console.log(); // CONSOLE: List the side effects
  console.log('Requests per seconds possible', possiblePerSeconds); // CONSOLE: List the side effects
  console.log(
    '[maximum total in remaining period, maximum per second]',
    maximums,
    maximumperseconds,
  ); // CONSOLE: List the side effects
};
