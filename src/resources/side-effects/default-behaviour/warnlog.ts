export function warnlog<T = unknown>(...args: T[]) {
  console.warn(...args);
  return args;
}
