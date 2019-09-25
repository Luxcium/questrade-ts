import { validateoAuthCredentials } from '..';
import { _oAuth } from '../../core/api';

export const _credentialsFactory = async (options: any) => {
  return validateoAuthCredentials(await _oAuth(options));
};
