import helpers from './fantasy-helpers';
const { curry } = helpers;

//# kite :: a -> b -> b
//.
const kite = curry((x, y) => y);

module.exports = kite;
