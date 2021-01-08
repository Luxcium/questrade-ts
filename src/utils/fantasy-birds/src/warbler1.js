import helpers from './fantasy-helpers';
const { curry } = helpers;

//# warbler1 :: a -> (a -> a -> b) -> b
//.
const warbler1 = curry((x, f) => f(x)(x));

module.exports = warbler1;
