import { ApiGet } from '../../../libraries';

export const _genericEndPoint = <Type = any>(get: ApiGet) => <T = Type>(
  endpoint: string
) => get<T>(endpoint);
