import axios from 'axios';

import type { ClientStatic } from '../types';

export function getHttpClient(
  axiosLikeClient: ClientStatic = axios,
): ClientStatic {
  return axiosLikeClient;
}
