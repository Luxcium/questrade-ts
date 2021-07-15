export function errorlog<T = unknown>(...args: T[]): T[] {
  console.error(...args);

  return args;
}
