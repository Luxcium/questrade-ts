import { combinators } from './fantasy-combinators';
import helpers from './fantasy-helpers';
const { curry } = helpers;

//# applicator :: (a -> b) -> a -> b
//.
//. A combinator or apply
//.
//. ```js
//. > applicator(x => x + 1)(3)
//. 4
//. ```
const applicator = curry(combinators.apply);

module.exports = applicator;
