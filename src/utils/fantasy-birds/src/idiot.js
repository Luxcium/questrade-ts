import { combinators } from './fantasy-combinators';
import helpers from './fantasy-helpers';
const { curry } = helpers;

//# idiot :: a -> a
//.
//. identity
//.
//. ```js
//. > idiot('bird')
//. 'bird'
//. ```
const idiot = curry(combinators.identity);

module.exports = idiot;
