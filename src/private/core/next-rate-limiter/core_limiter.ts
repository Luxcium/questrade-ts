/* eslint-disable promise/avoid-new */
import { errorlog } from '../../../resources/side-effects';
import { CallBack } from '../../../typescript';
import { perSeconds, void0 } from '../../../utils';

let lastCall = Date.now();
const lastDelay = () => Date.now() - lastCall;
const resetLastCall = () => {
  lastCall = Date.now();
};

function requestLimiterFactory() {
  let isCalled = false;
  const callsQueue: [Function, CallBack<any>][] = [];

  return (fn: Function, hertz: number = 1) => {
    const callToPop = async (): Promise<void> => {
      if (callsQueue.length > 0 && !isCalled) {
        isCalled = true;
        setTimeout(async (): Promise<void> => {
          isCalled = false;
          await callToPop();
          return void 151;
        }, perSeconds(hertz));
        const poped = callsQueue.pop();
        const [myfn, mycb] = !!poped ? poped : [neverWillCb, neverCb];

        while (lastDelay() < perSeconds(hertz)) {
          // do nothing just wait while (lastDelay() < perSeconds(hertz));
        }
        mycb(null, myfn());
        resetLastCall();
        return void 151;
      }
      return void 151;
    };

    return async (cb: CallBack<any>): Promise<void> => {
      callsQueue.unshift([fn, cb]);
      callToPop();
      return void 151;
    };
  };
}

function myPromisify<T>(addToQueue: (cb: any) => Promise<void>) {
  return new Promise<T>((resolve, reject) => {
    addToQueue((error: Error, result: any) => {
      if (!!error) {
        void errorlog(error);

        reject(error);
        return void 0;
      }
      resolve(result);
      return void 0;
    });
  });
}

function limitingRequest(limiterFactory: ReqLimiterFactory) {
  const requestLimiter = limiterFactory();

  return (frequency: number) => async <T>(fn: () => T) => {
    const addToQueue = requestLimiter(fn, frequency);

    return myPromisify<T>(addToQueue);
  };
}

function neverWillCb(): never {
  throw new Error(
    'NEVER: lenght is validated prior to pop this should never occur',
  );
}

function neverCb(error: Error | null, returnValue: any): never {
  void0({ error, returnValue });
  throw new Error(
    'NEVER: lenght is validated prior to pop this should never occur',
  );
}

export const requestPerSecondLimiter = limitingRequest(requestLimiterFactory);

export type ReqLimiterFactory = () => (
  fn: Function,
  hertz?: number,
) => (cb: CallBack<any>) => Promise<void>;
