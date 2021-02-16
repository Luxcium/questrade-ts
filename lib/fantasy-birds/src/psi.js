import { combinators } from './fantasy-combinators';
import helpers from './fantasy-helpers';
const { curry } = helpers;

//# psi :: (b -> b -> c) -> (a -> b) -> a -> a -> c
//.
//. PSI combinator or on
//.
//. ```js
//. > psi(x => y => x + y)(x => x * -1)(3)(5)
//. -8
//. ```
const psi = curry(combinators.psi);

module.exports = psi;
