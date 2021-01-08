import helpers from './fantasy-helpers';
const { curry } = helpers;

//# finchstarstar :: (a -> d -> c -> b -> e) -> a -> b -> c -> d -> e
//.
const finchstarstar = curry((f, s, t, u, v) => f(s)(v)(u)(t));

module.exports = finchstarstar;
