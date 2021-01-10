import axios from 'axios';

import { ClientStatic } from '../types';

export function getHttpClient(
  axiosLikeClient: ClientStatic = axios,
): ClientStatic {
  return axiosLikeClient;
}
