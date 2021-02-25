import type { ProxyHandlerOptions } from '../../types';
export declare abstract class ProxyHandlerAbstractClass<T extends Function = any> implements ProxyHandler<T> {
    protected handlerOptions: ProxyHandlerOptions;
    constructor(handlerOptions: ProxyHandlerOptions);
    getPrototypeOf(target: T): object | null;
    setPrototypeOf(target: T, v: any): boolean;
    isExtensible(target: T): boolean;
    preventExtensions(target: T): boolean;
    getOwnPropertyDescriptor(target: T, p: PropertyKey): PropertyDescriptor | undefined;
    has(target: T, p: PropertyKey): boolean;
    get(target: T, p: PropertyKey, receiver: any): any;
    set(target: T, p: PropertyKey, value: any, receiver: any): boolean;
    deleteProperty(target: T, p: PropertyKey): boolean;
    defineProperty(target: T, p: PropertyKey, attributes: PropertyDescriptor): boolean;
    ownKeys(target: T): (string | number | symbol)[];
    apply(target: T, thisArg: any, argArray?: any): any;
    construct(target: T, argArray: any, newTarget: any): object;
}
//# sourceMappingURL=reflexion-logger-proxy-handler-abstarct-class.d.ts.map