import helpers from './fantasy-helpers';
const { curry } = helpers;

//# finchstar :: (c -> b -> a -> d) -> a -> b -> c -> d
//.
const finchstar = curry((f, x, y, z) => f(z)(y)(x));

module.exports = finchstar;
