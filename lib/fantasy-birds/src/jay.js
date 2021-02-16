import helpers from './fantasy-helpers';
const { curry } = helpers;

//# jay :: (a -> b -> b) -> a -> b -> a -> b
//.
const jay = curry((f, x, y, z) => f(x)(f(z)(y)));

module.exports = jay;
