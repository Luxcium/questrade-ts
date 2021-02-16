import helpers from './fantasy-helpers';
const { curry } = helpers;

//# jalt :: (a -> c) -> a -> b -> c
//.
const jalt = curry((f, x, y) => f(x));

module.exports = jalt;
