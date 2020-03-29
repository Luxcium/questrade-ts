import { CallBack } from '.';

export type WillCallBack<T> = (callBack: CallBack<T>) => Promise<void>;
