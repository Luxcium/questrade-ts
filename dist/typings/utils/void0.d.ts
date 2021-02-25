import { curry } from './curry';
import type { FnAtoB } from './types';
export declare const parser: <R = any>(obj: any) => R;
export declare const stringny: (obj: any) => string;
/** Utility function that return its first argument [index 0] and do nothing else. */
declare function id0<T>(...arg0: T[]): T;
declare function idx<T>(...args: T[]): T[];
declare function void0(...arg0: any[]): undefined;
export declare const helperFunctions: {
    apply: <T = any, R = any>(f: FnAtoB<T, R>) => (x: T) => R;
    compose: <R_1>(f: (gx: any) => R_1) => (g: (x: any) => R_1) => (x: any) => R_1;
    curry: typeof curry;
    flip: <U = any, T_1 = any, R_2 = any>(f: (b: U) => (a: T_1) => R_2) => (a: T_1) => (b: U) => R_2;
    id0: typeof id0;
    idx: typeof idx;
    konst: <T_2 = any>(a: T_2) => (_b: unknown) => T_2;
    parser: <R_3 = any>(obj: any) => R_3;
    psi: <R_4>(f: (gx: any) => (gy: any) => R_4) => <T_3>(g: (xy: T_3) => any) => (x: T_3) => (y: T_3) => R_4;
    stringny: (obj: any) => string;
    thrush: <T_4>(x: T_4) => <R_5>(f: (a: T_4) => R_5) => R_5;
    urlEncode: typeof encodeURIComponent;
    void0: typeof void0;
};
export {};
//# sourceMappingURL=void0.d.ts.map