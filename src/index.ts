import { _redeemToken } from './public';
import { QuestradeAPIOptions } from './types';

export { getMyToken } from './get-token';
export const introspect = { onOff: false };

export function redeemToken(refreshToken: QuestradeAPIOptions) {
  return _redeemToken(refreshToken);
}
