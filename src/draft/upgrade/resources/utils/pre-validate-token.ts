import { ApiOptions } from '../../../../typescript';

export function preValidateToken({ token }: ApiOptions): string {
  return typeof token === 'function'
    ? token()
    : typeof token === 'string'
    ? token
    : 'ERROR';
}
