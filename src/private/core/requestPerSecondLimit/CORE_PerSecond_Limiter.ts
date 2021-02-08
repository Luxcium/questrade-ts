/* eslint-disable promise/avoid-new */
import { errorlog } from '../../../resources/side-effects';
import { CallBack } from '../../../typescript';
import { perSeconds, void0 } from '../../../utils';

let lastCall = Date.now();
const lastDelay = () => Date.now() - lastCall;
const resetLastCall = () => {
  lastCall = Date.now();
};

(async () => {
  //
  // const now = Date.now();

  lastCall = Date.now();

  return void 0;
  // CONSOLE:  using console error is a sideEffect and will be flagged
})().catch(error => console.error('error message:', error.message));

function requestLimiterFactory() {
  let isCalled = false;
  const callsQueue: [Function, CallBack<any>][] = [];

  return function requestLimiter(fn: Function, hertz: number = 1) {
    const callToPop = async () => {
      if (callsQueue.length > 0 && !isCalled) {
        isCalled = true;
        setTimeout(async () => {
          isCalled = false;
          await callToPop();
          return void 0;
        }, perSeconds(hertz));
        const poped = callsQueue.pop();
        const [myfn, mycb] = !!poped ? poped : [neverWillCb, neverCb];

        while (lastDelay() < perSeconds(hertz)) {
          // do nothing just wait while (lastDelay() < perSeconds(hertz));
        }
        mycb(null, myfn());
        resetLastCall();
        return void 0;
      }
      return void 0;
    };

    return async (cb: any /* CallBack<any> */) => {
      callsQueue.unshift([fn, cb]);
      callToPop();
      return void 0;
    };
  };
}

function limitingRequest(limiterFactory: ReqLimiterFactory) {
  const requestLimiter = limiterFactory();

  return (hz: number) => async <T>(fn: () => T) => {
    // addToQueue: (cb: CallBack<any>) => Promise<void>
    const addToQueue = requestLimiter(fn, hz);

    // addToQueue: (cb: any) => Promise<void>
    // return myPromisify<T>(addToQueue);
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

// FUNC DEF: requestPerSecondLimiter                                          //-&
const requestPerSecondLimiter = limitingRequest(requestLimiterFactory);

export type ReqLimiterFactory = () => (
  fn: Function,
  hertz?: number,
) => (cb: any /* CallBack<any> */) => Promise<void>;

export { limitingRequest, requestLimiterFactory, requestPerSecondLimiter };
