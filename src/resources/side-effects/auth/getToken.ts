import { ApiOptions } from '../../../typescript';

export function getToken(apiOptions: ApiOptions): string {
  return typeof apiOptions.token === 'string'
    ? apiOptions.token
    : apiOptions.token();
}
