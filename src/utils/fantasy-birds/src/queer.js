import helpers from './fantasy-helpers';
const { curry } = helpers;

//# queer :: (a -> b) -> (b -> c) -> a -> c
//.
const queer = curry((f, g, x) => g(f(x)));

module.exports = queer;
