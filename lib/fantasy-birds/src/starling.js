import { combinators } from './fantasy-combinators';
import helpers from './fantasy-helpers';
const { curry } = helpers;

//# starling :: (a -> b -> c) -> (a -> b) -> a -> c
//.
const starling = curry(combinators.substitution);

module.exports = starling;
