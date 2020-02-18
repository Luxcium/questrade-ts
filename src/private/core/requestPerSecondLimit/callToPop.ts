// tslint:disable no-any
import { CallBack } from '../../../typescript';
import { perSeconds } from '../../../utils';
// tslint:disable: prefer-array-literal

// create the function required to have a request limiter
// set the initial state
export function myRequestLimiterFactory() {
  let isRequested = false;
  const hertz: number = 1;

  // the request limiter function  itself
  const queueLimiter = <Tfn>(fn: () => Promise<Tfn>) => {
    const queueList: Array<[() => Promise<Tfn>, CallBack<any>]> = [];
    const shiftOutFromQueue = async () => {
      if (queueList.length >= 1 && !isRequested) {
        isRequested = true;
        const nextToExecute = shiftQueue(queueList);
        if (nextToExecute !== undefined) {
          const [myfn, mycb] = nextToExecute;

          mycb(null, myfn());
        }
        setTimeout(async () => {
          isRequested = false;
          await shiftOutFromQueue();
        }, perSeconds(hertz));
      }
      return void 0;
    };

    // when isRequested = true or if queue is empty
    return async function pushInToQueue(cb: CallBack<any>): Promise<void> {
      queueList.push([fn, cb]);
      return shiftOutFromQueue();
    };
  };
  return queueLimiter;
}

const shiftQueue = <TFnct>(queueList: Array<[TFnct, CallBack<any>]>) =>
  queueList.shift();

//
//
// const hertz: number = 1;
// let isCalled = false;
// const callsQueue: Array<[Function, CallBack]> = [];
// export function requestLimiterFactory() {
//   let isCalled = false;
//   const callsQueue: Array<[Function, CallBack]> = [];
//   return function requestLimiter(fn: Function, hertz: number = 1) {
//     return addToQueue(callsQueue)(callToPop)(fn);
//   };
// }

// const callToPop = () => ({ isCalled }: { isCalled: boolean }) => async () => {
//   if (callsQueue.length >= 1 && !isCalled) {
//     isCalled = true;
//     setTimeout(async function() {
//       isCalled = false;
//       await callToPop();
//     }, perSeconds(hertz));
//     const poped = callsQueue.pop();
//     const [myfn, mycb] = !!poped ? poped : neverWillBe;
//     mycb(null, myfn());
//   }
// };

// const addToQueue = (callsQueue: Array<[Function, CallBack]>) => (
//   callToPop: () => Promise<void>
// ) => (fn: Function) => async (cb: CallBack) => {
//   callsQueue.unshift([fn, cb]);
//   await callToPop();
// };

// const neverWillCb = async () => {
//   void0();
//   throw new Error(
//     'NEVER: lenght is validated prior to pop this should never occur'
//   );
// };
// const neverCb = (error: Error | null, returnValue: any) => {
//   void0({ returnValue, error });
//   throw new Error(
//     'NEVER: lenght is validated prior to pop this should never occur'
//   );
// };
// const neverWillBe = [neverWillCb, neverCb];
// void0(void0);
