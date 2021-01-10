import { _validateToken } from './auth/_validateToken';
import { _writeToken } from './auth/_writeToken';
import { _sideEffects } from './default-behaviour';

export const sideEffects = {
  ..._sideEffects,
  _validateToken,
  _writeToken,
};
