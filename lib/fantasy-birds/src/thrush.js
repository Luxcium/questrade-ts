import { combinators } from './fantasy-combinators';
import helpers from './fantasy-helpers';
const { curry } = helpers;

//# thrush :: a -> (a -> b) -> b
//.
const thrush = curry(combinators.thrush);

module.exports = thrush;
