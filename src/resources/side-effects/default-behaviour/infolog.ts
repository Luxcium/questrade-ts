export function infolog<T = unknown>(...args: T[]) {
  console.info(...args);

  return args;
}
