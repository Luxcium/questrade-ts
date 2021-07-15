import { combinators } from './fantasy-combinators';
import { curry } from './fantasy-helpers';
// const { curry } = helpers;

//# starling :: (a -> b -> c) -> (a -> b) -> a -> c
//.
const starling = curry(combinators.substitution);

module.exports = starling;

/*
import helpers from './fantasy-helpers';
const { curry } = helpers;

//# starling_ :: (b -> c -> d) -> (a -> b) -> (a -> c) -> a -> d
//.
const starling_ = curry((f, g, h, x) => f(g(x))(h(x)));

module.exports = starling_;

 */
