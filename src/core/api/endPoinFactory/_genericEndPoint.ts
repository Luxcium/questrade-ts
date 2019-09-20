import { ApiGet } from '../../libraries';

export const _genericEndPoint = (get: ApiGet) => <T>(endpoint: string) =>
  get<T>(endpoint);
