import helpers from './fantasy-helpers';
const { curry } = helpers;

//# warbler :: (a -> a -> b) -> a -> b
//.
const warbler = curry((f, x) => f(x)(x));

module.exports = warbler;
