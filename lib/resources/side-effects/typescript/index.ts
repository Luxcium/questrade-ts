import Redis from 'ioredis';

export type {
  CachedApiResponse,
  Cancel,
  Canceler,
  CancelStatic,
  CancelToken,
  CancelTokenSource,
  CancelTokenStatic,
  ClientError,
  ClientInstance,
  ClientInterceptorManager,
  ClientPromise,
  ClientRequestConfig,
  ClientResponse,
  ClientStatic,
  ClientTransformer,
  StaticJSONCache,
} from './client';
export type { ProxyHandlerOptions } from './proxy/proxy-handler-options';
export type IoRedis = Redis.Redis;
