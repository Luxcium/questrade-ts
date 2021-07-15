import helpers from './fantasy-helpers';
const { curry } = helpers;

//# vireostarstar :: (a -> c -> b -> c -> e) -> a -> b -> c -> c -> e
//.
const vireostarstar = curry((f, s, t, u, v) => f(s)(v)(t)(u));

module.exports = vireostarstar;
