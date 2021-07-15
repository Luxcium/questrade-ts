import type JSONCache from 'redis-json';
import type { IOptions } from 'redis-json/types/lib/interfaces';

export interface StaticJSONCache {
  new <T>(redisClient: any, options?: IOptions): JSONCache<T>;
}
