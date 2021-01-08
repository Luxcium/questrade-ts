import { combinators } from './fantasy-combinators';
import helpers from './fantasy-helpers';
const { curry } = helpers;

//# kestrel :: a -> b -> a
//.
//. K combinator or `const`
//.
//. ```js
//. > kestrel('bird')('cat')
//. 'bird'
//. ```
const kestrel = curry(combinators.constant);

module.exports = kestrel;
