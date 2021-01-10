import { Credentials, QuestradeAPIOptions } from '../../../types';
import { _validateToken } from '../auth/_validateToken';

export function validateToken(
  options: QuestradeAPIOptions,
): {
  refreshToken: string;
  credentials: Credentials;
} {
  return _validateToken(options);
}
