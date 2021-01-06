import { CancelStatic as AxiosCancelStatic } from 'axios';

import { Cancel } from './Cancel';

void function testFunction(specimen: AxiosCancelStatic): CancelStatic {
  return specimen;
};

export interface CancelStatic {
  new (message?: string): Cancel;
}
