import helpers from './fantasy-helpers';
const { curry } = helpers;

//# vireo :: a -> b -> (a -> b -> c) -> c
//.
const vireo = curry((x, y, f) => f(x)(y));

module.exports = vireo;
