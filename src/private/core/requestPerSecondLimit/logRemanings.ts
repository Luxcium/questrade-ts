import { sideEffects } from '../../../default-behaviour';
import { ITimeRateLimiter } from '../../../typescript/ITimeRateLimiter';
import { remaningTimeString } from './remaningTimeString';

const { echo } = sideEffects;

export const logRemanings = ({
  timeNow,
  timeThen,
  secondsRemaning,
  maximumperseconds,
  possiblePerSeconds,
  requestsRemaining,
  maximums,
}: ITimeRateLimiter) => {
  void echo<unknown>();
  void echo<unknown>('time remaning', remaningTimeString(secondsRemaning));
  void echo<unknown>('time now', timeNow);
  void echo<unknown>('time then', timeThen);
  void echo<unknown>('time remaining until reset', secondsRemaning, '(sec)');
  void echo<unknown>();
  void echo<unknown>('requsts remaning', requestsRemaining);
  void echo<unknown>();
  void echo<unknown>('Requests per seconds possible', possiblePerSeconds);
  void echo<unknown>(
    '[maximum total in remaining period, maximum per second]',
    maximums,
    maximumperseconds,
  );
};
