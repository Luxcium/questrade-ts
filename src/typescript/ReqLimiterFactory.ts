import { CallBack } from '.';

// Export type ReqLimiterFactory = () => <T>(
//   Fn: WillCallBack<T>,
//   Hertz?: number,
// ) => (willCallBack: CallBack<T>) => Promise<T>;

export type ReqLimiterFactory = () => (
  fn: Function,
  hertz?: number,
) => (cb: CallBack<any>) => Promise<void>;
