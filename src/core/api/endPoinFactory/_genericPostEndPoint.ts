import { ApiPost } from '../../libraries';

export const _genericPostEndPoint = (post: ApiPost) => <T, P = any>(
  endpoint: string
) => <D = P>(data: D) => post<T>(endpoint)<D>(data);
