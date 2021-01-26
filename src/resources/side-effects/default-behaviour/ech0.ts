export function ech0<T = any>(arg0: T): T {
  console.log(arg0);
  return arg0;
}
export function echo1<T = any>(arg0: string, arg1: T): T {
  console.log(arg0, arg1);
  return arg1;
}

export function echo<T = any>(...args: T[]): T[] {
  console.log(...args);
  return args;
}
