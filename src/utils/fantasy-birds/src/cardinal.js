import { combinators } from './fantasy-combinators';
import helpers from './fantasy-helpers';
const { curry } = helpers;

//# cardinal :: (a -> b -> c) -> b -> a -> c
//.
//. C combinator or flip
//.
//. ```js
//. > cardinal(str => prefix => prefix + str)('-')('birds')
//. '-birds'
//. ```
const cardinal = curry(combinators.flip);

module.exports = cardinal;
