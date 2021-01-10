export function warnlog<T = unknown>(...args: T[]): T[] {
  console.warn(...args);
  return args;
}
