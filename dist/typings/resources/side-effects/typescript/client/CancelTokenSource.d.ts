import { Cancel } from './Cancel';
import { Canceler } from './Canceler';
export interface CancelTokenSource {
    token: {
        promise: Promise<Cancel>;
        reason?: Cancel;
        throwIfRequested(): void;
    };
    cancel: Canceler;
}
//# sourceMappingURL=CancelTokenSource.d.ts.map