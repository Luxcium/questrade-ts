import { sideEffects } from '../../default-behaviour';

const { errorlog } = sideEffects;

export const _logErrors = (error: Error, message: string = '') => {
  void errorlog('Error:', error.message, '\n', message);
  return error;
};
