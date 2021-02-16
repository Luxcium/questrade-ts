import helpers from './fantasy-helpers';
const { curry } = helpers;

//# warblerstar :: (a -> b -> b -> c) -> a -> b -> c
//.
const warblerstar = curry((f, x, y) => f(x)(y)(y));

module.exports = warblerstar;
