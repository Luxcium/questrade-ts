import helpers from './fantasy-helpers';
const { curry } = helpers;

//# quixotic :: (b -> c) -> a -> (a -> b) -> c
//.
const quixotic = curry((f, x, g) => f(g(x)));

module.exports = quixotic;
