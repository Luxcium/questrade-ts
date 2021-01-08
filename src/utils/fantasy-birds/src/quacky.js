import helpers from './fantasy-helpers';
const { curry } = helpers;

//# quacky :: a -> (a -> b) -> (b -> c) -> c
//.
const quacky = curry((x, f, g) => g(f(x)));

module.exports = quacky;
