import helpers from './fantasy-helpers';
const { curry } = helpers;

//# robinstar :: (b -> c -> a -> d) -> a -> b -> c -> d
//.
const robinstar = curry((f, x, y, z) => f(y)(z)(x));

module.exports = robinstar;
