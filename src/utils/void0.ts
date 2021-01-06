export function id0<T>(...arg0: T[]) {
  return arg0[0];
}
export function idx<T>(...args: T[]) {
  return args;
}
export function void0<T>(...arg0: T[]) {
  return void id0(arg0);
}
