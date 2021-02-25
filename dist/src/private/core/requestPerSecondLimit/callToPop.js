"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../../utils");
utils_1.void0();
// import { CallBack } from '../../../typescript';
// import { perSeconds } from '../../../utils';
// // create the function required to have a request limiter
// // set the initial state
// export function myRequestLimiterFactory() {
//   let isRequested = false;
//   const hertz: number = 1;
//   // the request limiter function  itself
//   return <Tfn>(fn: () => Promise<Tfn>) => {
//     const queueList: [() => Promise<Tfn>, CallBack<any>][] = [];
//     const shiftOutFromQueue = async () => {
//       if (queueList.length > 0 && !isRequested) {
//         isRequested = true;
//         const nextToExecute = shiftQueue(queueList);
//         if (nextToExecute !== undefined) {
//           const [myfn, mycb] = nextToExecute;
//           mycb(null, myfn());
//         }
//         setTimeout(async () => {
//           isRequested = false;
//           await shiftOutFromQueue();
//         }, perSeconds(hertz));
//       }
//       return void 0;
//     };
//     // when isRequested = true or if queue is empty
//     return async function pushInToQueue(cb: CallBack<any>) {
//       queueList.push([fn, cb]);
//       return shiftOutFromQueue();
//     };
//   };
// }
// const shiftQueue = <TFnct>(queueList: [TFnct, CallBack<any>][]) =>
//   queueList.shift();
// !!
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbFRvUG9wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3ByaXZhdGUvY29yZS9yZXF1ZXN0UGVyU2Vjb25kTGltaXQvY2FsbFRvUG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMENBQXVDO0FBRXZDLGFBQUssRUFBRSxDQUFDO0FBQ1Isa0RBQWtEO0FBQ2xELCtDQUErQztBQUUvQyw0REFBNEQ7QUFDNUQsMkJBQTJCO0FBQzNCLDhDQUE4QztBQUM5Qyw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBRTdCLDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsbUVBQW1FO0FBQ25FLDhDQUE4QztBQUM5QyxvREFBb0Q7QUFDcEQsOEJBQThCO0FBQzlCLHVEQUF1RDtBQUV2RCw2Q0FBNkM7QUFDN0MsZ0RBQWdEO0FBRWhELGdDQUFnQztBQUNoQyxZQUFZO0FBQ1osbUNBQW1DO0FBQ25DLGlDQUFpQztBQUNqQyx1Q0FBdUM7QUFDdkMsaUNBQWlDO0FBQ2pDLFVBQVU7QUFDVix1QkFBdUI7QUFDdkIsU0FBUztBQUVULHNEQUFzRDtBQUN0RCwrREFBK0Q7QUFDL0Qsa0NBQWtDO0FBQ2xDLG9DQUFvQztBQUNwQyxTQUFTO0FBQ1QsT0FBTztBQUNQLElBQUk7QUFFSixxRUFBcUU7QUFDckUsdUJBQXVCO0FBQ3ZCLEtBQUs7QUFDTCxFQUFFO0FBQ0YsRUFBRTtBQUNGLDJCQUEyQjtBQUMzQix3QkFBd0I7QUFDeEIsc0RBQXNEO0FBQ3RELDRDQUE0QztBQUM1QywwQkFBMEI7QUFDMUIsd0RBQXdEO0FBQ3hELHNFQUFzRTtBQUN0RSxvREFBb0Q7QUFDcEQsT0FBTztBQUNQLElBQUk7QUFFSixpRkFBaUY7QUFDakYsK0NBQStDO0FBQy9DLHVCQUF1QjtBQUN2QixvQ0FBb0M7QUFDcEMsMEJBQTBCO0FBQzFCLDJCQUEyQjtBQUMzQiw2QkFBNkI7QUFDN0Isc0NBQXNDO0FBQ3RDLDBEQUEwRDtBQUMxRCwwQkFBMEI7QUFDMUIsTUFBTTtBQUNOLEtBQUs7QUFFTCxvRUFBb0U7QUFDcEUsbUNBQW1DO0FBQ25DLG1EQUFtRDtBQUNuRCxrQ0FBa0M7QUFDbEMsdUJBQXVCO0FBQ3ZCLEtBQUs7QUFFTCxvQ0FBb0M7QUFDcEMsYUFBYTtBQUNiLHFCQUFxQjtBQUNyQix3RUFBd0U7QUFDeEUsT0FBTztBQUNQLEtBQUs7QUFDTCwrREFBK0Q7QUFDL0QsbUNBQW1DO0FBQ25DLHFCQUFxQjtBQUNyQix3RUFBd0U7QUFDeEUsT0FBTztBQUNQLEtBQUs7QUFDTCw4Q0FBOEM7QUFDOUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdm9pZDAgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbnZvaWQwKCk7XG4vLyBpbXBvcnQgeyBDYWxsQmFjayB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQnO1xuLy8gaW1wb3J0IHsgcGVyU2Vjb25kcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuLy8gLy8gY3JlYXRlIHRoZSBmdW5jdGlvbiByZXF1aXJlZCB0byBoYXZlIGEgcmVxdWVzdCBsaW1pdGVyXG4vLyAvLyBzZXQgdGhlIGluaXRpYWwgc3RhdGVcbi8vIGV4cG9ydCBmdW5jdGlvbiBteVJlcXVlc3RMaW1pdGVyRmFjdG9yeSgpIHtcbi8vICAgbGV0IGlzUmVxdWVzdGVkID0gZmFsc2U7XG4vLyAgIGNvbnN0IGhlcnR6OiBudW1iZXIgPSAxO1xuXG4vLyAgIC8vIHRoZSByZXF1ZXN0IGxpbWl0ZXIgZnVuY3Rpb24gIGl0c2VsZlxuLy8gICByZXR1cm4gPFRmbj4oZm46ICgpID0+IFByb21pc2U8VGZuPikgPT4ge1xuLy8gICAgIGNvbnN0IHF1ZXVlTGlzdDogWygpID0+IFByb21pc2U8VGZuPiwgQ2FsbEJhY2s8YW55Pl1bXSA9IFtdO1xuLy8gICAgIGNvbnN0IHNoaWZ0T3V0RnJvbVF1ZXVlID0gYXN5bmMgKCkgPT4ge1xuLy8gICAgICAgaWYgKHF1ZXVlTGlzdC5sZW5ndGggPiAwICYmICFpc1JlcXVlc3RlZCkge1xuLy8gICAgICAgICBpc1JlcXVlc3RlZCA9IHRydWU7XG4vLyAgICAgICAgIGNvbnN0IG5leHRUb0V4ZWN1dGUgPSBzaGlmdFF1ZXVlKHF1ZXVlTGlzdCk7XG5cbi8vICAgICAgICAgaWYgKG5leHRUb0V4ZWN1dGUgIT09IHVuZGVmaW5lZCkge1xuLy8gICAgICAgICAgIGNvbnN0IFtteWZuLCBteWNiXSA9IG5leHRUb0V4ZWN1dGU7XG5cbi8vICAgICAgICAgICBteWNiKG51bGwsIG15Zm4oKSk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4vLyAgICAgICAgICAgaXNSZXF1ZXN0ZWQgPSBmYWxzZTtcbi8vICAgICAgICAgICBhd2FpdCBzaGlmdE91dEZyb21RdWV1ZSgpO1xuLy8gICAgICAgICB9LCBwZXJTZWNvbmRzKGhlcnR6KSk7XG4vLyAgICAgICB9XG4vLyAgICAgICByZXR1cm4gdm9pZCAwO1xuLy8gICAgIH07XG5cbi8vICAgICAvLyB3aGVuIGlzUmVxdWVzdGVkID0gdHJ1ZSBvciBpZiBxdWV1ZSBpcyBlbXB0eVxuLy8gICAgIHJldHVybiBhc3luYyBmdW5jdGlvbiBwdXNoSW5Ub1F1ZXVlKGNiOiBDYWxsQmFjazxhbnk+KSB7XG4vLyAgICAgICBxdWV1ZUxpc3QucHVzaChbZm4sIGNiXSk7XG4vLyAgICAgICByZXR1cm4gc2hpZnRPdXRGcm9tUXVldWUoKTtcbi8vICAgICB9O1xuLy8gICB9O1xuLy8gfVxuXG4vLyBjb25zdCBzaGlmdFF1ZXVlID0gPFRGbmN0PihxdWV1ZUxpc3Q6IFtURm5jdCwgQ2FsbEJhY2s8YW55Pl1bXSkgPT5cbi8vICAgcXVldWVMaXN0LnNoaWZ0KCk7XG4vLyAhIVxuLy9cbi8vXG4vLyBjb25zdCBoZXJ0ejogbnVtYmVyID0gMTtcbi8vIGxldCBpc0NhbGxlZCA9IGZhbHNlO1xuLy8gY29uc3QgY2FsbHNRdWV1ZTogQXJyYXk8W0Z1bmN0aW9uLCBDYWxsQmFja10+ID0gW107XG4vLyBleHBvcnQgZnVuY3Rpb24gcmVxdWVzdExpbWl0ZXJGYWN0b3J5KCkge1xuLy8gICBsZXQgaXNDYWxsZWQgPSBmYWxzZTtcbi8vICAgY29uc3QgY2FsbHNRdWV1ZTogQXJyYXk8W0Z1bmN0aW9uLCBDYWxsQmFja10+ID0gW107XG4vLyAgIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0TGltaXRlcihmbjogRnVuY3Rpb24sIGhlcnR6OiBudW1iZXIgPSAxKSB7XG4vLyAgICAgcmV0dXJuIGFkZFRvUXVldWUoY2FsbHNRdWV1ZSkoY2FsbFRvUG9wKShmbik7XG4vLyAgIH07XG4vLyB9XG5cbi8vIGNvbnN0IGNhbGxUb1BvcCA9ICgpID0+ICh7IGlzQ2FsbGVkIH06IHsgaXNDYWxsZWQ6IGJvb2xlYW4gfSkgPT4gYXN5bmMgKCkgPT4ge1xuLy8gICBpZiAoY2FsbHNRdWV1ZS5sZW5ndGggPj0gMSAmJiAhaXNDYWxsZWQpIHtcbi8vICAgICBpc0NhbGxlZCA9IHRydWU7XG4vLyAgICAgc2V0VGltZW91dChhc3luYyBmdW5jdGlvbigpIHtcbi8vICAgICAgIGlzQ2FsbGVkID0gZmFsc2U7XG4vLyAgICAgICBhd2FpdCBjYWxsVG9Qb3AoKTtcbi8vICAgICB9LCBwZXJTZWNvbmRzKGhlcnR6KSk7XG4vLyAgICAgY29uc3QgcG9wZWQgPSBjYWxsc1F1ZXVlLnBvcCgpO1xuLy8gICAgIGNvbnN0IFtteWZuLCBteWNiXSA9ICEhcG9wZWQgPyBwb3BlZCA6IG5ldmVyV2lsbEJlO1xuLy8gICAgIG15Y2IobnVsbCwgbXlmbigpKTtcbi8vICAgfVxuLy8gfTtcblxuLy8gY29uc3QgYWRkVG9RdWV1ZSA9IChjYWxsc1F1ZXVlOiBBcnJheTxbRnVuY3Rpb24sIENhbGxCYWNrXT4pID0+IChcbi8vICAgY2FsbFRvUG9wOiAoKSA9PiBQcm9taXNlPHZvaWQ+XG4vLyApID0+IChmbjogRnVuY3Rpb24pID0+IGFzeW5jIChjYjogQ2FsbEJhY2spID0+IHtcbi8vICAgY2FsbHNRdWV1ZS51bnNoaWZ0KFtmbiwgY2JdKTtcbi8vICAgYXdhaXQgY2FsbFRvUG9wKCk7XG4vLyB9O1xuXG4vLyBjb25zdCBuZXZlcldpbGxDYiA9IGFzeW5jICgpID0+IHtcbi8vICAgdm9pZDAoKTtcbi8vICAgdGhyb3cgbmV3IEVycm9yKFxuLy8gICAgICdORVZFUjogbGVuZ2h0IGlzIHZhbGlkYXRlZCBwcmlvciB0byBwb3AgdGhpcyBzaG91bGQgbmV2ZXIgb2NjdXInXG4vLyAgICk7XG4vLyB9O1xuLy8gY29uc3QgbmV2ZXJDYiA9IChlcnJvcjogRXJyb3IgfCBudWxsLCByZXR1cm5WYWx1ZTogYW55KSA9PiB7XG4vLyAgIHZvaWQwKHsgcmV0dXJuVmFsdWUsIGVycm9yIH0pO1xuLy8gICB0aHJvdyBuZXcgRXJyb3IoXG4vLyAgICAgJ05FVkVSOiBsZW5naHQgaXMgdmFsaWRhdGVkIHByaW9yIHRvIHBvcCB0aGlzIHNob3VsZCBuZXZlciBvY2N1cidcbi8vICAgKTtcbi8vIH07XG4vLyBjb25zdCBuZXZlcldpbGxCZSA9IFtuZXZlcldpbGxDYiwgbmV2ZXJDYl07XG4vLyB2b2lkMCh2b2lkMCk7XG4iXX0=