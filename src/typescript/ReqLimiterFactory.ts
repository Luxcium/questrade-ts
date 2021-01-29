import { CallBack } from '.';

// export type ReqLimiterFactory = () => <T>(
//   fn: WillCallBack<T>,
//   hertz?: number,
// ) => (willCallBack: CallBack<T>) => Promise<T>;

export type ReqLimiterFactory = () => (
  fn: Function,
  hertz?: number,
) => (cb: CallBack<any>) => Promise<void>;
