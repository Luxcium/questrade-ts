import helpers from './fantasy-helpers';
const { curry } = helpers;

//# dove :: (a -> c -> d) -> a -> (b -> c) -> b -> d
//.
//. D combinator
//.
//. ```js
//. > dove(postfix => str => str + postfix)('!')(x => x.toUpperCase())('birds')
//. 'BIRDS!'
//. ```
const dove = curry((f, x, g, y) => f(x)(g(y)));

module.exports = dove;
