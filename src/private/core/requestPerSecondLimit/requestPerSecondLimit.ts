// import { CallBack, ReqLimiterFactory } from '../../../typescript';
import { perSeconds } from '../../../utils';
const requestLimiterFactory: ReqLimiterFactory = () => {
  let isCalled = false;
  const callsQueue: [Function, Function][] = [];
  return function requestLimiter(fn: Function, hertz: number = 1) {
    const callToPop = async (): Promise<void> => {
      if (callsQueue.length >= 1 && !isCalled) {
        isCalled = true;
        setTimeout(async () => {
          isCalled = false;
          await callToPop();
        }, perSeconds(hertz));
        const poped = callsQueue.pop();
        const [myfn, mycb] = !!poped ? poped : [() => '', () => ''];
        myfn.call(null, mycb);
      }
    };

    return async function addToQueue(cb: Function) {
      callsQueue.unshift([fn, cb]);

      console.log('in addToQueue');
      return callToPop();
    };
  };
};

const myPromisify = (addToQueue: WillCallBack) => {
  return new Promise((resolve, reject) => {
    addToQueue((error, result) => {
      if (!!error) {
        console.error(error);
        return reject(error);
      }
      return resolve(result);
    });
  });
};
const limitingRequest = (limiterFactory: ReqLimiterFactory) => {
  const limiter = limiterFactory();
  return (hz: number) => async (fn: WillCallBack) => {
    const addToQueue = limiter(fn, hz);
    return myPromisify(addToQueue);
  };
};

export const requestPerSecondLimit = limitingRequest(requestLimiterFactory);

export type CallBack = (error: Error | null, returnValue: any) => void;
export type WillCallBack = (callBack: CallBack) => Promise<void>;
export type ReqLimiterFactory = () => (fn: WillCallBack, hertz: number) => any; // (
// fn: WillCallBack,
// hertz?: number
// ) => (willCallBack: CallBack) => Promise<any>;

// <F extends Function>
