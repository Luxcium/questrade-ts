import { combinators } from './fantasy-combinators';
import helpers from './fantasy-helpers';
const { curry } = helpers;

//# bluebird :: (b -> c) -> (a -> b) -> a -> c
//.
//. B combinator or function composition
//.
//. ```js
//. > bluebird(x => x * 2)(x => x - 1)(3)
//. 4
//. ```
const bluebird = curry(combinators.compose);

module.exports = bluebird;
