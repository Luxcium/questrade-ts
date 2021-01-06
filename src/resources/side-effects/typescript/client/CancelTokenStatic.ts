import { CancelTokenStatic as AxiosCancelTokenStatic } from 'axios';

import { Canceler } from './Canceler';
import { CancelToken } from './CancelToken';
import { CancelTokenSource } from './CancelTokenSource';

void function testFunction(
  specimen: AxiosCancelTokenStatic,
): CancelTokenStatic {
  return specimen;
};

export interface CancelTokenStatic {
  new (executor: (cancel: Canceler) => void): CancelToken;
  source(): CancelTokenSource;
}

// export interface CancelTokenStatic {
//   new (executor: (cancel: { (cancelMessage?: string): void }) => void): {
//     promise: Promise<Cancel>;
//     reason?: Cancel;
//     throwIfRequested(): void;
//   };
//   source(): CancelTokenSource;
// }
