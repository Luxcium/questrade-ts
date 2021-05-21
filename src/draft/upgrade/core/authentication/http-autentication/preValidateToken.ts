import { ApiOptions } from '../../../../../typescript';

// type Token = { token: SeedToken | KeyFile | GetToken };

export function preValidateToken({ token }: ApiOptions): string {
  return typeof token === 'function'
    ? token()
    : typeof token === 'string'
    ? token
    : 'ERROR';
}
