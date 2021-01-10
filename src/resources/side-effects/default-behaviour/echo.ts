export function echo<T = unknown>(...args: T[]): T[] {
  console.log(...args);
  return args;
}
