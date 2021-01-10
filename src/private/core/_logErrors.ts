// const { errorlog } = sideEffects;

import { errorlog } from '../../resources/side-effects';

export const _logErrors = (error: Error, message: string = '') => {
  void errorlog('Error:', error.message, '\n', message);
  return error;
};
