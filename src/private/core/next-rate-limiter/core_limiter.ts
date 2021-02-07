/* eslint-disable promise/avoid-new */
import { errorlog } from '../../../resources/side-effects';
import { CallBack } from '../../../typescript';
import { perSeconds, void0 } from '../../../utils';

let lastCall = Date.now();
const lastDelay = () => Date.now() - lastCall;
const resetLastCall = () => {
  lastCall = Date.now();
};

function requestLimiterFactory(fn: Function, hertz: number = 1) {
  let isCalled = false;
  const callsQueue: [Function, CallBack<any>][] = [];
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
}

// export function myPromisify<T>(addToQueue: (cb: any) => Promise<void>) {
//   return new Promise<T>((resolve, reject) => {
//     addToQueue((error: Error, result: any) => {
//       if (!!error) {
//         void errorlog(error);

//         reject(error);
//         return void 0;
//       }
//       resolve(result);
//       return void 0;
//     });
//   });
// }

export function requestPerSecondLimiter(hz: number) {
  return async <T>(fn: () => T) => {
    const addToQueue: (cb: any) => Promise<void> = requestLimiterFactory(
      fn,
      hz,
    );

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

/** new functions  */

let isGreenLight = true;

function doNext() {
  return 'next request';
}
export function limiter(hertz: number = 20) {
  let lastCall2 = Date.now();
  const lastDelay2 = (lastCall3: number) => Date.now() - lastCall3;
  const since = (pastStamp: number) => Date.now() - pastStamp;
  const until = (futureStamp: number) => futureStamp - Date.now();

  const resetLastCall2 = () => {
    lastCall2 = Date.now();
  };

  const rightNow = Date.now();
  const minimumDelay = rightNow + 50;

  void rightNow, minimumDelay, since, until;
  while (lastDelay2(lastCall2) < perSeconds(hertz)) {
    isGreenLight = false;
  }
  isGreenLight = true;
  doNext();
  resetLastCall2();
  return isGreenLight;
}

export const nowMiliSeconds = Date.now();
export const lastRequestMiliSeconds = Date.now();

// maintenant (larger time stamp) - antérieurement (smaller time stamp)  = positive integer
// postérieurement (larger time stamp) - maintenant (smaller time stamp)  = positive integer

// example ... 1 request each 50 ms
