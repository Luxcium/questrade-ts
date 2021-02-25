import { Canceler } from './Canceler';
import { CancelToken } from './CancelToken';
import { CancelTokenSource } from './CancelTokenSource';
export interface CancelTokenStatic {
    new (executor: (cancel: Canceler) => void): CancelToken;
    source(): CancelTokenSource;
}
//# sourceMappingURL=CancelTokenStatic.d.ts.map