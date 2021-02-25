import type { ClientRequestConfig, ClientResponse } from '../../../resources/side-effects/types';
interface IQNode<T extends QNodesValue> {
    value: T;
    next: IQNode<T> | null;
}
declare type QNodes<T extends QNodesValue = QNodesValue> = IQNode<T> | null;
interface QNodesValue {
    config: ClientRequestConfig;
    fn: <R>(config: ClientRequestConfig) => Promise<ClientResponse<R>>;
    cb?: any;
}
/** fCFS Queue (first-come, first-served) */
export declare class ApiCallQ_<T extends QNodesValue = QNodesValue> {
    protected maxPerSecondes: number;
    protected maxPerHour: number;
    protected timeOfSet: number;
    protected broke: boolean;
    protected current: QNodes<T>;
    protected first: QNodes<T>;
    protected isCalled: boolean;
    protected last: QNodes<T>;
    protected xRemaining: number;
    protected xResetTime: number;
    protected size: number;
    protected set remaining(xRemaining: any);
    protected get remaining(): any;
    protected set resetTime(xResetTime: any);
    protected get resetTime(): any;
    protected get isBroken(): boolean;
    protected get isNotBroken(): boolean;
    protected get isNotCalled(): boolean;
    protected get isEmpty(): boolean;
    protected get isNotEmpty(): boolean;
    protected get isCallable(): boolean;
    static get new(): ApiCallQ_<QNodesValue>;
    protected get positiveTimeOffset(): number;
    constructor(maxPerSecondes?: number, maxPerHour?: number, timeOfSet?: number);
    protected get requestLimit(): number;
    protected callToPopQueue(): void;
    addToQueue<R = any>(value: T): Promise<ClientResponse<R>>;
    protected enQueue(val: T): number;
    protected deQueue(): this | null;
}
export declare const myQueueu: ApiCallQ_<QNodesValue>;
export {};
//# sourceMappingURL=queue.d.ts.map