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
    const callToPop = async function (): Promise<void> {
      if (callsQueue.length > 0 && !isCalled) {
        isCalled = true;
        setTimeout(async function (): Promise<void> {
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

    return async function addToQueue(cb: CallBack<any>): Promise<void> {
      callsQueue.unshift([fn, cb]);
      callToPop();
      return void 0;
    };
  };
}

export const myPromisify = <T>(addToQueue: (cb: any) => Promise<void>) => {
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

function limitingRequest(limiterFactory: ReqLimiterFactory) {
  const requestLimiter = limiterFactory();
  return (hz: number) => async <T>(fn: () => T) => {
    const addToQueue = requestLimiter(fn, hz);
    return myPromisify<T>(addToQueue);
  };
}

const neverWillCb = (): never => {
  throw new Error(
    'NEVER: lenght is validated prior to pop this should never occur',
  );
};

const neverCb = (error: Error | null, returnValue: any): never => {
  void0({ error, returnValue });
  throw new Error(
    'NEVER: lenght is validated prior to pop this should never occur',
  );
};

export const requestPerSecondLimiter = limitingRequest(requestLimiterFactory);
export type ReqLimiterFactory = () => (
  fn: Function,
  hertz?: number,
) => (cb: CallBack<any>) => Promise<void>;
