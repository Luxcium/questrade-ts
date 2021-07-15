import helpers from './fantasy-helpers';
const { curry } = helpers;

//# finch :: a -> b -> (b -> a -> c) -> c
//.
//. F combinator
//.
//. ```js
//. > finch(-1, 3)(x => y => x * y)
//. -3
//. ```
const finch = curry((x, y, f) => f(y)(x));

module.exports = finch;
