import { CancelTokenSource as AxiosCancelTokenSource } from 'axios';

import { Cancel } from './Cancel';
import { Canceler } from './Canceler';

void function testFunction(
  specimen: AxiosCancelTokenSource,
): CancelTokenSource {
  return specimen;
};

export interface CancelTokenSource {
  token: {
    promise: Promise<Cancel>;
    reason?: Cancel;
    throwIfRequested(): void;
  };
  cancel: Canceler;
}
