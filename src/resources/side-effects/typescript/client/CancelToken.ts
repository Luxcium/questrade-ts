import { CancelToken as AxiosCancelToken } from 'axios';

import { Cancel } from './Cancel';

void function testFunction(specimen: AxiosCancelToken): CancelToken {
  return specimen;
};

export interface CancelToken {
  promise: Promise<Cancel>;
  reason?: Cancel;
  throwIfRequested(): void;
}
