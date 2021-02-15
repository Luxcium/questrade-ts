import { void0 } from '../../../utils';

void0();
// Import { CallBack } from '../../../typescript';
// Import { perSeconds } from '../../../utils';

// // create the function required to have a request limiter
// // set the initial state
// Export function myRequestLimiterFactory() {
//   Let isRequested = false;
//   Const hertz: number = 1;

//   // the request limiter function  itself
//   Return <Tfn>(fn: () => Promise<Tfn>) => {
//     Const queueList: [() => Promise<Tfn>, CallBack<any>][] = [];
//     Const shiftOutFromQueue = async () => {
//       If (queueList.length > 0 && !isRequested) {
//         IsRequested = true;
//         Const nextToExecute = shiftQueue(queueList);

//         If (nextToExecute !== undefined) {
//           Const [myfn, mycb] = nextToExecute;

//           Mycb(null, myfn());
//         }
//         SetTimeout(async () => {
//           IsRequested = false;
//           Await shiftOutFromQueue();
//         }, perSeconds(hertz));
//       }
//       Return void 0;
//     };

//     // when isRequested = true or if queue is empty
//     Return async function pushInToQueue(cb: CallBack<any>) {
//       QueueList.push([fn, cb]);
//       Return shiftOutFromQueue();
//     };
//   };
// }

// Const shiftQueue = <TFnct>(queueList: [TFnct, CallBack<any>][]) =>
//   QueueList.shift();
// !!
//
//
// Const hertz: number = 1;
// Let isCalled = false;
// Const callsQueue: Array<[Function, CallBack]> = [];
// Export function requestLimiterFactory() {
//   Let isCalled = false;
//   Const callsQueue: Array<[Function, CallBack]> = [];
//   Return function requestLimiter(fn: Function, hertz: number = 1) {
//     Return addToQueue(callsQueue)(callToPop)(fn);
//   };
// }

// Const callToPop = () => ({ isCalled }: { isCalled: boolean }) => async () => {
//   If (callsQueue.length >= 1 && !isCalled) {
//     IsCalled = true;
//     SetTimeout(async function() {
//       IsCalled = false;
//       Await callToPop();
//     }, perSeconds(hertz));
//     Const poped = callsQueue.pop();
//     Const [myfn, mycb] = !!poped ? poped : neverWillBe;
//     Mycb(null, myfn());
//   }
// };

// Const addToQueue = (callsQueue: Array<[Function, CallBack]>) => (
//   CallToPop: () => Promise<void>
// ) => (fn: Function) => async (cb: CallBack) => {
//   CallsQueue.unshift([fn, cb]);
//   Await callToPop();
// };

// Const neverWillCb = async () => {
//   Void0();
//   Throw new Error(
//     'NEVER: lenght is validated prior to pop this should never occur'
//   );
// };
// Const neverCb = (error: Error | null, returnValue: any) => {
//   Void0({ returnValue, error });
//   Throw new Error(
//     'NEVER: lenght is validated prior to pop this should never occur'
//   );
// };
// Const neverWillBe = [neverWillCb, neverCb];
// Void0(void0);
