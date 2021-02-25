import Redis from 'ioredis';
import type { Credentials, ProxyFactory_ } from '../../../../../typescript';
import type { ClientStatic, ProxyHandlerOptions } from '../../../types';
import { ProxyHandlerAbstractClass } from '../../core/reflexion-logger-proxy-handler-abstarct-class';
export declare type IoRedis = Redis.Redis;
export declare type CachedResponse = any;
declare class RedisQtApiProxyHandlerClass<T extends Function = ClientStatic> extends ProxyHandlerAbstractClass<T> implements ProxyHandler<T> {
    protected handlerOptions: ProxyHandlerOptions;
    constructor(handlerOptions: ProxyHandlerOptions);
    protected proxy: {
        class: string;
        extends: string;
        implements: string;
        proxy: string;
    };
    apply(target: T, thisArg: any, argArray?: any): Promise<any>;
}
export { RedisQtApiProxyHandlerClass };
export declare function redisProxyHandler(mainProxyHandlerOptions?: ProxyHandlerOptions): (credentials?: Credentials | undefined) => ProxyFactory_;
//# sourceMappingURL=redis-client-proxy-handler-class.d.ts.map