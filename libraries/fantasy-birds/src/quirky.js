import helpers from './fantasy-helpers';
const { curry } = helpers;

//# quirky :: (a -> b) -> a -> (b -> c) -> c
//.
const quirky = curry((f, x, g) => g(f(x)));

module.exports = quirky;
