/* eslint-disable promise/avoid-new */
import { ech0, errorlog } from '../../../resources/side-effects';
import { CallBack } from '../../../typescript';
import { perSeconds } from '../../../utils';
import { neverWill } from './never-will';

function limitingRequest<T>(fn: Function, hertz: number = 1) {
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
      const [myfn, mycb] = !!poped ? poped : neverWill;

      mycb(null, myfn());

      return void 0;
    }
    return void 0;
  };

  const addToQueue = async (cb: any /* CallBack<any> */) => {
    callsQueue.unshift([fn, cb]);
    callToPop();
  };

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

export { limitingRequest };
