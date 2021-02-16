import helpers from './fantasy-helpers';
const { curry } = helpers;

//# robin :: a -> (b -> a -> c) -> b -> c
//.
const robin = curry((x, f, y) => f(y)(x));

module.exports = robin;
