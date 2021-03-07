import helpers from './fantasy-helpers';
const { curry } = helpers;

//# starling_ :: (b -> c -> d) -> (a -> b) -> (a -> c) -> a -> d
//.
const starling_ = curry((f, g, h, x) => f(g(x))(h(x)));

module.exports = starling_;

// Luxcium implementation:

export const S = curry((f, g, h, x) => f(g(x))(h(x)));
export const K = curry(a => () => a);

export const B = curry((f, x, g, y) => f(x)(g(y)));
