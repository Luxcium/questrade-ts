import helpers from './fantasy-helpers';
const { curry } = helpers;

//# hummingbird :: (a -> b -> a -> c) -> a -> b -> c
//.
const hummingbird = curry((f, x, y) => f(x)(y)(x));

module.exports = hummingbird;
