import { CallBack, WillCallBack } from './';
export type ReqLimiterFactory = () => <T>(
  fn: WillCallBack<T>,
  hertz?: number,
) => (willCallBack: CallBack<T>) => Promise<T>;
