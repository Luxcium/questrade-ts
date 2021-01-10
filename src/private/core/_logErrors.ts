import { sideEffects } from '../../resources/side-effects';

const { errorlog } = sideEffects;

export const _logErrors = (error: Error, message: string = '') => {
  void errorlog('Error:', error.message, '\n', message);
  return error;
};
