/* eslint-disable promise/avoid-new */
import { ech0, errorLog } from '../../../resources/side-effects';
import type { CallBack } from '../../../typescript';
import { perSeconds } from '../../../utils';
import { neverWill } from './never-will';

async function limitingRequest<T>(fn: Function, hertz = 1) {
  const callsQueue: [Function, CallBack<any>][] = [];
  let isCalled = false;

  ech0('limitingRequest(fn: Function, hertz: number = 1)');

  const callToPop = async () => {
    if (callsQueue.length > 0 && !isCalled) {
      isCalled = true;
      setTimeout(async () => {
        isCalled = false;
        ech0('in  setTimeout await callToPop() ');

        await callToPop();

        return void 0;
      }, perSeconds(hertz));
      const poped = callsQueue.pop();
      const [myfn, mycb] = poped ? poped : neverWill;

      mycb(null, myfn());

      return void 0;
    }

    return void 0;
  };

  const addToQueue = (cb: any /* callBack<any> */) => {
    callsQueue.unshift([fn, cb]);
    callToPop();
  };

  return new Promise<T>((resolve, reject) => {
    addToQueue((error: Error, result: any) => {
      if (error) {
        void errorLog('promise in per sec limiter', error);

        reject(error);

        return void 0;
      }

      resolve(result);

      return void 0;
    });
  });
}

export { limitingRequest };
