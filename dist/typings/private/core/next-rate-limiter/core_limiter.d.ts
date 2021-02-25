export declare function requestPerSecondLimiter(hz: number): <T>(fn: () => T) => Promise<T>;
export declare function limiter(hertz?: number): boolean;
export declare const nowMiliSeconds: number;
export declare const lastRequestMiliSeconds: number;
//# sourceMappingURL=core_limiter.d.ts.map