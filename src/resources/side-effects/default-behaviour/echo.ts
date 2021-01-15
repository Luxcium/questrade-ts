export function echo<T = any>(...args: T[]): T[] {
  console.log(...args);
  return args;
}
