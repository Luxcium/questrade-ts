import { Cancel } from './Cancel';
export interface CancelToken {
    promise: Promise<Cancel>;
    reason?: Cancel;
    throwIfRequested(): void;
}
//# sourceMappingURL=CancelToken.d.ts.map