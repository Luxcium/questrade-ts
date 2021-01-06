import { void0 } from '../../utils';
import { idx } from '../../utils/void0';

export const A = 'A';
export const B = 'B';
export const C = 'C';
export const D = 'D';
export const E = 'E';

void0<unknown>(
  console.log('idx(1,2,3,4,5):', idx(1, 2, 3, 4, 5)),
  console.log('idx(A,B,C,D,E):', idx('A', B, 'C', D, 'E')),
);
