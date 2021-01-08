'use strict';

//
//  ## isTypeOf(a)(b)
//
//  Returns `true` if `b` has `typeof a`.
//
const isTypeOf = a => b => typeof b === a;

//
//  ## isBoolean(a)
//
//  Returns `true` if `a` is a `Boolean`.
//
const isBoolean = isTypeOf('boolean');

//
//  ## isFunction(a)
//
//  Returns `true` if `a` is a `Function`.
//
const isFunction = isTypeOf('function');

//
//  ## isNumber(a)
//
//  Returns `true` if `a` is a `Number`.
//
const isNumber = isTypeOf('number');

//
//  ## isObject(a)
//
//  Returns `true` if `a` is a `Object`.
//
const isObject = isTypeOf('object');

//
//  ## isString(a)
//
//  Returns `true` if `a` is a `String`.
//
const isString = isTypeOf('string');

//
//  ## isArray(a)
//
//  Returns `true` if `a` is an `Array`.
//
function isArray(a) {
    return Array.isArray 
        ? Array.isArray(a)
        : {}.toString.call(a) === "[object Array]";
}

//
//  ## isInstanceOf(a)(b)
//
//  Returns `true` if `a` is an instance of `b`.
//
const isInstanceOf = a => b => b instanceof a;

module.exports = { isTypeOf
                 , isBoolean
                 , isFunction
                 , isNumber
                 , isObject
                 , isString
                 , isArray
                 , isInstanceOf 
                 };
