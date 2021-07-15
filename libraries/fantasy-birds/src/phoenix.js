import helpers from './fantasy-helpers';
const { curry } = helpers;

//# phoenix :: (b -> c -> d) -> (a -> b) -> (a -> c) -> a -> d
//.
const phoenix = curry((f, g, h, x) => f(g(x))(h(x)));

module.exports = phoenix;
