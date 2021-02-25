import { CallBack } from '.';
export declare type ReqLimiterFactory = () => (fn: Function, hertz?: number) => (cb: CallBack<any>) => Promise<void>;
//# sourceMappingURL=ReqLimiterFactory.d.ts.map