import { ApiGet, ApiPost, QtApi } from '../../../libraries';

export const _genericEndPoint = (get: ApiGet) => <T>(endpoint: string) =>
  get<T>(endpoint);

export const _genericPostEndPoint = (post: ApiPost) => <T, P = any>(
  endpoint: string
) => <D = P>(data: D) => post<T>(endpoint)<D>(data);

export const _accountEndPoinFactory = <T>(endpoint: string) => async (
  qtApi: Promise<QtApi>
) => _genericEndPoint((await qtApi).accountGet)<T>(endpoint);

export const _getEndPoinFactory = <T>(endpoint: string) => async (
  qtApi: Promise<QtApi>
) => _genericEndPoint((await qtApi).get)<T>(endpoint);

export const _postEndPoinFactory = <T, D = any>(endpoint: string) => (
  qtApi: Promise<QtApi>
) => async (data: D) =>
  _genericPostEndPoint((await qtApi).post)<T>(endpoint)<D>(data);
