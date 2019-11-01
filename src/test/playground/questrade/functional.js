// @ts-nocheck

const R = require('ramda');

export const B = f => g => x => f(g(x));
export const D = f => x => g => y => f(x)(g(y));
export const S = R.curry((f, g, x) => f(x)(g(x)));
export const K = x => () => x;
export const I = x => x;
export const C = f => x => y => f(y)(x);
export const T = R.curry((x, f) => f(x));
