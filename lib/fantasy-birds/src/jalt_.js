import helpers from './fantasy-helpers';
const { curry } = helpers;

//# jalt_ :: (a -> b -> d) -> a -> b -> c -> d
//.
const jalt_ = curry((f, x, y, z) => f(x)(y));

module.exports = jalt_;
