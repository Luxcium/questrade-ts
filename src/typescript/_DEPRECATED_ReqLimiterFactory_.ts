import { CallBack } from '.';

// export type ReqLimiterFactory = () => <T>(
//   fn: WillCallBack<T>,
//   hertz?: number,
// ) => (willCallBack: CallBack<T>) => Promise<T>;

/** @deprecated -   */
export type ReqLimiterFactory___ = () => (
  fn: Function,
  hertz?: number,
) => (cb: CallBack<any>) => Promise<void>;
