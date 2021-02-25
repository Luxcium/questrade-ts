/**
 * ### Utility function
 * **`ech0`**  returns its first argument `arg0` and `console.log` all it's arguments.
 */
declare function ech0<T = unknown>(arg0: T, ...args: any[]): T;
/**
 * ### Utility function
 * **`id0`**  returns its first argument `arg0` and do nothing else.
 */
declare function id0<T = unknown>(arg0: T, ...args: any[]): T;
/**
 * ### Utility function
 * **`void0`** return void and do nothing else. Can be use as a placeholder for `ech0` or `id0`
 */
declare function void0<T = unknown>(arg0: T, ...args: any[]): void;
/**
 * ### Utility function
 * **`ech1`** Use first argument as a text label,
 * `console.log` all it's arguments and returns only its second argument `arg1`
 */
declare function echo1<T = unknown>(label: string, arg1: T, ...args: any[]): T;
/**
 * ### Utility function
 * **`id1`** returns only its second argument `arg1` and do nothing else.
 */
declare function id1<T = unknown>(label: string, arg1: T, ...args: any[]): T;
/**
 * ### Utility function
 * **`void1`** return void and do nothing else.
 * Can be use as a placeholder for `ech1` or `id1`
 */
declare function void1<T = unknown>(label: string, arg1: T, ...args: any[]): void;
/**
 * ### Utility function
 * **`echo`** will `console.log` all it's arguments and return `void`.
 */
declare function echo(...args: any[]): void;
export { ech0, echo, echo1, id0, id1, void0, void1 };
//# sourceMappingURL=ech0.d.ts.map