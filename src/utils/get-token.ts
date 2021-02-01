import { ApiOptions } from '../typescript';

export function preValidateToken(apiOptions: ApiOptions): string {
  return typeof apiOptions.token === 'function'
    ? apiOptions.token()
    : typeof apiOptions.token === 'string'
    ? apiOptions.token
    : 'ERROR';
}
