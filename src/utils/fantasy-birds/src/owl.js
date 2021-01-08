import helpers from './fantasy-helpers';
const { curry } = helpers;

//# owl :: ((a -> b) -> a) -> (a -> b) -> b
//.
const owl = curry((f, g) => g(f(g)));

module.exports = owl;
