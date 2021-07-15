const bind = require('./src/bind');
const curry = require('./src/curry');
const strictEquals = require('./src/strict-equals');
const extend = require('./src/extend');
const functions = require('./src/functions');
const getInstance = require('./src/get-instance');
const has = require('./src/has');
const is = require('./src/is');
const oneOf = require('./src/one-of');
const randomRange = require('./src/random-range');
const singleton = require('./src/singleton');

const helpers = {
  bind,
  curry,
  strictEquals,
  extend,
  getInstance,
  oneOf,
  randomRange,
  singleton,
};

module.exports = extend(helpers, extend(extend(functions, is), has));
