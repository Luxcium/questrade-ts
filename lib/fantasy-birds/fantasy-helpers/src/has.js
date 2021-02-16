'use strict';

const { isFunction } = require('./is');

//
//  ## has(a)(b)(c)
//
//  Returns `true` if `c[b]` has `typeof a`.
//
const has = a => b => c => a(c[b]);

//
//  ## hasMethod(a)
//
//  Returns `true` if `a` is a `Function`.
//
const hasMethod = has(isFunction);

module.exports = { hasMethod };