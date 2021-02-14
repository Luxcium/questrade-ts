import { curry } from './curry';
import { FnAtoB } from './types';

export const parser = <R = any>(obj: any) =>
  JSON.parse(JSON.stringify(obj)) as R;
export const stringny = (obj: any) => JSON.stringify(obj).toString();

function id0<T>(...arg0: T[]) {
  return arg0[0];
}
function idx<T>(...args: T[]) {
  return args;
}
function void0<T>(...arg0: T[]) {
  return void arg0;
}
const thrush = <T>(x: T) => <R>(f: (a: T) => R) => f(x);
const apply = <T = any, R = any>(f: FnAtoB<T, R>) => (x: T) => f(x);
const compose = <R>(f: (gx: any) => R) => (g: (x: any) => R) => (x: any) =>
  f(g(x));
//# cardinal :: (a -> b -> c) -> b -> a -> c
//.
//. C combinator or flip
//.
//. ```js
//. > cardinal(str => prefix => prefix + str)('-')('birds')
//. '-birds'
//. ```
const flip = <U = any, T = any, R = any>(f: (b: U) => (a: T) => R) => (
  a: T,
) => (b: U) => f(b)(a);

//# kestrel :: a -> b -> a
//.
//. K combinator or `const`
//.
//. ```js
//. > kestrel('bird')('cat')
//. 'bird'
//. ```

const konst = <T = any>(a: T) => (_b: unknown) => a;

/**
 *
 * @param f -
 * ### psi :: (b -\> b -\> c) -\> (a -\> b) -\> a -\> a -\> c
 *
 * PSI combinator or on
 *
 * ```js
 * > console.log(psi(x => y => x + y)((x: any) => x * -1)(3)(5)); //   -8
 * ```
 */
const psi = <R>(f: (gx: any) => (gy: any) => R) => <T>(g: (xy: T) => any) => (
  x: T,
) => (y: T) => f(g(x))(g(y));

const urlEncode = encodeURIComponent;

export const helperFunctions = {
  apply,
  compose,
  curry,
  flip,
  id0,
  idx,
  konst,
  parser,
  psi,
  stringny,
  thrush,
  urlEncode,
  void0,
};
