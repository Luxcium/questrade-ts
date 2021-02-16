import { apply } from './src/apply';
import { compose } from './src/compose';
import { constant } from './src/constant';
import { fix } from './src/fix';
import { flip } from './src/flip';
import { identity } from './src/identity';
import { substitution } from './src/substitution';
import { thrush } from './src/thrush';
import { psi } from './src/psi';

if (typeof module != 'undefined')
  module.exports = {
    apply,
    compose,
    constant,
    fix,
    flip,
    identity,
    substitution,
    thrush,
    psi,
  };
