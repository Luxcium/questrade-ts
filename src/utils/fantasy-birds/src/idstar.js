import helpers from './fantasy-helpers';
const { curry } = helpers;

//# idstar :: (a -> b) -> a -> b
//.
const idstar = curry((f, x) => f(x));

module.exports = idstar;
