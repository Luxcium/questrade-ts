export function tablelog<T = unknown>(...args: T[]): T[] {
  console.table(...args);
  return args;
}
