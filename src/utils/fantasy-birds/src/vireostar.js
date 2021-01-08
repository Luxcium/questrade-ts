import helpers from './fantasy-helpers';
const { curry } = helpers;

//# vireostar :: (b -> a -> b -> d) -> a -> b -> b -> d
//.
const vireostar = curry((f, x, y, z) => f(y)(x)(z));

module.exports = vireostar;
