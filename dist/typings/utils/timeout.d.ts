export declare const timeoutPromise: {
    delay(delay: number): {
        fn<T>(fnx: (val: T) => any): {
            value(value: T): Promise<any>;
        };
        value<T_1>(value: T_1): {
            fn(fnx: (val: T_1) => any): Promise<any>;
        };
    };
    fn<T_2>(fnx: (val: T_2) => any): {
        delay(delay: number): {
            value(value: T_2): Promise<any>;
        };
        value(value: T_2): {
            delay(delay: number): Promise<any>;
        };
    };
    value<T_3>(value: T_3): {
        delay(delay: number): {
            fn(fnx: (val: T_3) => any): Promise<any>;
        };
        fn(fnx: (val: T_3) => any): {
            delay(delay: number): Promise<any>;
        };
    };
};
//# sourceMappingURL=timeout.d.ts.map