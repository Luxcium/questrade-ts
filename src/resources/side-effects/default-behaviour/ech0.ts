/**
 * ### Utility function
 * **`ech0`**  returns its first argument `arg0` and `console.log` all it's arguments.
 */
function ech0<T = unknown>(arg0: T, ...args: any[]): T {
  console.log(arg0, ...args);

  return arg0;
}

/**
 * ### Utility function
 * **`id0`**  returns its first argument `arg0` and do nothing else.
 */
function id0<T = unknown>(arg0: T, ...args: any[]): T {
  void args;

  return arg0;
}

/**
 * ### Utility function
 * **`void0`** return void and do nothing else. Can be use as a placeholder for `ech0` or `id0`
 */
function void0<T = unknown>(arg0: T, ...args: any[]): void {
  return void [arg0, args];
}

/**
 * ### Utility function
 * **`ech1`** Use first argument as a text label,
 * `console.log` all it's arguments and returns only its second argument `arg1`
 */
function echo1<T = unknown>(label: string, arg1: T, ...args: any[]): T {
  console.log(label, arg1, ...args);

  return arg1;
}

/**
 * ### Utility function
 * **`id1`** returns only its second argument `arg1` and do nothing else.
 */
function id1<T = unknown>(label: string, arg1: T, ...args: any[]): T {
  void [label, args];

  return arg1;
}

/**
 * ### Utility function
 * **`void1`** return void and do nothing else.
 * Can be use as a placeholder for `ech1` or `id1`
 */
function void1<T = unknown>(label: string, arg1: T, ...args: any[]): void {
  return void [label, arg1, args];
}

/**
 * ### Utility function
 * **`echo`** will `console.log` all it's arguments and return `void`.
 */
function echo(...args: any[]): void {
  console.log(...args);
}

export { ech0, echo, echo1, id0, id1, void0, void1 };
