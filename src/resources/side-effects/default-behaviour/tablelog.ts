export function tablelog<T = unknown>(...args: T[]) {
  console.table(...args);

  return args;
}
