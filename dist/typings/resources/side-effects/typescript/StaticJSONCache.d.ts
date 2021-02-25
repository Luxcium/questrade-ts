import type JSONCache from 'redis-json';
import type { IOptions } from 'redis-json/types/src/interfaces';
export interface StaticJSONCache {
    new <T>(redisClient: any, options?: IOptions): JSONCache<T>;
}
//# sourceMappingURL=StaticJSONCache.d.ts.map