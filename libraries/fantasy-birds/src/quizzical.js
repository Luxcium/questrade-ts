import helpers from './fantasy-helpers';
const { curry } = helpers;

//# quizzical :: a -> (b -> c) -> (a -> b) -> c
//.
const quizzical = curry((x, f, g) => f(g(x)));

module.exports = quizzical;
