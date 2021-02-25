"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastRequestMiliSeconds = exports.nowMiliSeconds = exports.limiter = exports.requestPerSecondLimiter = void 0;
const tslib_1 = require("tslib");
/* eslint-disable promise/avoid-new */
const side_effects_1 = require("../../../resources/side-effects");
const utils_1 = require("../../../utils");
let lastCall = Date.now();
const lastDelay = () => Date.now() - lastCall;
const resetLastCall = () => {
    lastCall = Date.now();
};
function requestLimiterFactory(fn, hertz = 1) {
    let isCalled = false;
    const callsQueue = [];
    const callToPop = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (callsQueue.length > 0 && !isCalled) {
            isCalled = true;
            setTimeout(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
                isCalled = false;
                yield callToPop();
                return void 151;
            }), utils_1.perSeconds(hertz));
            const poped = callsQueue.pop();
            const [myfn, mycb] = poped ? poped : [neverWillCb, neverCb];
            while (lastDelay() < utils_1.perSeconds(hertz)) {
                // do nothing just wait while (lastDelay() < perSeconds(hertz));
            }
            mycb(null, myfn());
            resetLastCall();
            return void 151;
        }
        return void 151;
    });
    return (cb) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        callsQueue.unshift([fn, cb]);
        callToPop();
        return void 151;
    });
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
function requestPerSecondLimiter(hz) {
    return (fn) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const addToQueue = requestLimiterFactory(fn, hz);
        return new Promise((resolve, reject) => {
            addToQueue((error, result) => {
                if (error) {
                    void side_effects_1.errorlog(error);
                    reject(error);
                    return void 0;
                }
                resolve(result);
                return void 0;
            });
        });
    });
}
exports.requestPerSecondLimiter = requestPerSecondLimiter;
function neverWillCb() {
    throw new Error('NEVER: lenght is validated prior to pop this should never occur');
}
function neverCb(error, returnValue) {
    utils_1.void0({ error, returnValue });
    throw new Error('NEVER: lenght is validated prior to pop this should never occur');
}
/** new functions  */
let isGreenLight = true;
function doNext() {
    return 'next request';
}
function limiter(hertz = 20) {
    let lastCall2 = Date.now();
    const lastDelay2 = (lastCall3) => Date.now() - lastCall3;
    const since = (pastStamp) => Date.now() - pastStamp;
    const until = (futureStamp) => futureStamp - Date.now();
    const resetLastCall2 = () => {
        lastCall2 = Date.now();
    };
    const rightNow = Date.now();
    const minimumDelay = rightNow + 50;
    void rightNow, minimumDelay, since, until;
    while (lastDelay2(lastCall2) < utils_1.perSeconds(hertz)) {
        isGreenLight = false;
    }
    isGreenLight = true;
    doNext();
    resetLastCall2();
    return isGreenLight;
}
exports.limiter = limiter;
exports.nowMiliSeconds = Date.now();
exports.lastRequestMiliSeconds = Date.now();
// maintenant (larger time stamp) - antérieurement (smaller time stamp)  = positive integer
// postérieurement (larger time stamp) - maintenant (smaller time stamp)  = positive integer
// example ... 1 request each 50 ms
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9saW1pdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3ByaXZhdGUvY29yZS9uZXh0LXJhdGUtbGltaXRlci9jb3JlX2xpbWl0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNDQUFzQztBQUN0QyxrRUFBMkQ7QUFFM0QsMENBQW1EO0FBRW5ELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsUUFBUSxDQUFDO0FBQzlDLE1BQU0sYUFBYSxHQUFHLEdBQUcsRUFBRTtJQUN6QixRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVGLFNBQVMscUJBQXFCLENBQUMsRUFBWSxFQUFFLEtBQUssR0FBRyxDQUFDO0lBQ3BELElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztJQUNyQixNQUFNLFVBQVUsR0FBZ0MsRUFBRSxDQUFDO0lBQ25ELE1BQU0sU0FBUyxHQUFHLEdBQVMsRUFBRTtRQUMzQixJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3RDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDaEIsVUFBVSxDQUFDLEdBQVMsRUFBRTtnQkFDcEIsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDakIsTUFBTSxTQUFTLEVBQUUsQ0FBQztnQkFFbEIsT0FBTyxLQUFLLEdBQUcsQ0FBQztZQUNsQixDQUFDLENBQUEsRUFBRSxrQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENB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USxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM1QixNQUFNLFlBQVksR0FBRyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBRW5DLEtBQUssUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO0lBQzFDLE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLGtCQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDaEQsWUFBWSxHQUFHLEtBQUssQ0FBQztLQUN0QjtJQUVELFlBQVksR0FBRyxJQUFJLENBQUM7SUFDcEIsTUFBTSxFQUFFLENBQUM7SUFDVCxjQUFjLEVBQUUsQ0FBQztJQUVqQixPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDO0FBdEJELDBCQXNCQztBQUVZLFFBQUEsY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUM1QixRQUFBLHNCQUFzQixHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUVqRCwyRkFBMkY7QUFDM0YsNEZBQTRGO0FBRTVGLG1DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHByb21pc2UvYXZvaWQtbmV3ICovXG5pbXBvcnQgeyBlcnJvcmxvZyB9IGZyb20gJy4uLy4uLy4uL3Jlc291cmNlcy9zaWRlLWVmZmVjdHMnO1xuaW1wb3J0IHR5cGUgeyBDYWxsQmFjayB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQnO1xuaW1wb3J0IHsgcGVyU2Vjb25kcywgdm9pZDAgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbmxldCBsYXN0Q2FsbCA9IERhdGUubm93KCk7XG5jb25zdCBsYXN0RGVsYXkgPSAoKSA9PiBEYXRlLm5vdygpIC0gbGFzdENhbGw7XG5jb25zdCByZXNldExhc3RDYWxsID0gKCkgPT4ge1xuICBsYXN0Q2FsbCA9IERhdGUubm93KCk7XG59O1xuXG5mdW5jdGlvbiByZXF1ZXN0TGltaXRlckZhY3RvcnkoZm46IEZ1bmN0aW9uLCBoZXJ0eiA9IDEpIHtcbiAgbGV0IGlzQ2FsbGVkID0gZmFsc2U7XG4gIGNvbnN0IGNhbGxzUXVldWU6IFtGdW5jdGlvbiwgQ2FsbEJhY2s8YW55Pl1bXSA9IFtdO1xuICBjb25zdCBjYWxsVG9Qb3AgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGNhbGxzUXVldWUubGVuZ3RoID4gMCAmJiAhaXNDYWxsZWQpIHtcbiAgICAgIGlzQ2FsbGVkID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBpc0NhbGxlZCA9IGZhbHNlO1xuICAgICAgICBhd2FpdCBjYWxsVG9Qb3AoKTtcblxuICAgICAgICByZXR1cm4gdm9pZCAxNTE7XG4gICAgICB9LCBwZXJTZWNvbmRzKGhlcnR6KSk7XG4gICAgICBjb25zdCBwb3BlZCA9IGNhbGxzUXVldWUucG9wKCk7XG4gICAgICBjb25zdCBbbXlmbiwgbXljYl0gPSBwb3BlZCA/IHBvcGVkIDogW25ldmVyV2lsbENiLCBuZXZlckNiXTtcblxuICAgICAgd2hpbGUgKGxhc3REZWxheSgpIDwgcGVyU2Vjb25kcyhoZXJ0eikpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZyBqdXN0IHdhaXQgd2hpbGUgKGxhc3REZWxheSgpIDwgcGVyU2Vjb25kcyhoZXJ0eikpO1xuICAgICAgfVxuXG4gICAgICBteWNiKG51bGwsIG15Zm4oKSk7XG4gICAgICByZXNldExhc3RDYWxsKCk7XG5cbiAgICAgIHJldHVybiB2b2lkIDE1MTtcbiAgICB9XG5cbiAgICByZXR1cm4gdm9pZCAxNTE7XG4gIH07XG5cbiAgcmV0dXJuIGFzeW5jIChjYjogQ2FsbEJhY2s8YW55PikgPT4ge1xuICAgIGNhbGxzUXVldWUudW5zaGlmdChbZm4sIGNiXSk7XG4gICAgY2FsbFRvUG9wKCk7XG5cbiAgICByZXR1cm4gdm9pZCAxNTE7XG4gIH07XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBteVByb21pc2lmeTxUPihhZGRUb1F1ZXVlOiAoY2I6IGFueSkgPT4gUHJvbWlzZTx2b2lkPikge1xuLy8gICByZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuLy8gICAgIGFkZFRvUXVldWUoKGVycm9yOiBFcnJvciwgcmVzdWx0OiBhbnkpID0+IHtcbi8vICAgICAgIGlmICghIWVycm9yKSB7XG4vLyAgICAgICAgIHZvaWQgZXJyb3Jsb2coZXJyb3IpO1xuXG4vLyAgICAgICAgIHJlamVjdChlcnJvcik7XG4vLyAgICAgICAgIHJldHVybiB2b2lkIDA7XG4vLyAgICAgICB9XG4vLyAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4vLyAgICAgICByZXR1cm4gdm9pZCAwO1xuLy8gICAgIH0pO1xuLy8gICB9KTtcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RQZXJTZWNvbmRMaW1pdGVyKGh6OiBudW1iZXIpIHtcbiAgcmV0dXJuIGFzeW5jIDxUPihmbjogKCkgPT4gVCkgPT4ge1xuICAgIGNvbnN0IGFkZFRvUXVldWU6IChjYjogYW55KSA9PiBQcm9taXNlPHZvaWQ+ID0gcmVxdWVzdExpbWl0ZXJGYWN0b3J5KFxuICAgICAgZm4sXG4gICAgICBoeixcbiAgICApO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGFkZFRvUXVldWUoKGVycm9yOiBFcnJvciwgcmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgdm9pZCBlcnJvcmxvZyhlcnJvcik7XG5cbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuXG4gICAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcblxuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG5ldmVyV2lsbENiKCk6IG5ldmVyIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICdORVZFUjogbGVuZ2h0IGlzIHZhbGlkYXRlZCBwcmlvciB0byBwb3AgdGhpcyBzaG91bGQgbmV2ZXIgb2NjdXInLFxuICApO1xufVxuXG5mdW5jdGlvbiBuZXZlckNiKGVycm9yOiBFcnJvciB8IG51bGwsIHJldHVyblZhbHVlOiBhbnkpOiBuZXZlciB7XG4gIHZvaWQwKHsgZXJyb3IsIHJldHVyblZhbHVlIH0pO1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ05FVkVSOiBsZW5naHQgaXMgdmFsaWRhdGVkIHByaW9yIHRvIHBvcCB0aGlzIHNob3VsZCBuZXZlciBvY2N1cicsXG4gICk7XG59XG5cbi8qKiBuZXcgZnVuY3Rpb25zICAqL1xuXG5sZXQgaXNHcmVlbkxpZ2h0ID0gdHJ1ZTtcblxuZnVuY3Rpb24gZG9OZXh0KCkge1xuICByZXR1cm4gJ25leHQgcmVxdWVzdCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW1pdGVyKGhlcnR6ID0gMjApIHtcbiAgbGV0IGxhc3RDYWxsMiA9IERhdGUubm93KCk7XG4gIGNvbnN0IGxhc3REZWxheTIgPSAobGFzdENhbGwzOiBudW1iZXIpID0+IERhdGUubm93KCkgLSBsYXN0Q2FsbDM7XG4gIGNvbnN0IHNpbmNlID0gKHBhc3RTdGFtcDogbnVtYmVyKSA9PiBEYXRlLm5vdygpIC0gcGFzdFN0YW1wO1xuICBjb25zdCB1bnRpbCA9IChmdXR1cmVTdGFtcDogbnVtYmVyKSA9PiBmdXR1cmVTdGFtcCAtIERhdGUubm93KCk7XG4gIGNvbnN0IHJlc2V0TGFzdENhbGwyID0gKCkgPT4ge1xuICAgIGxhc3RDYWxsMiA9IERhdGUubm93KCk7XG4gIH07XG5cbiAgY29uc3QgcmlnaHROb3cgPSBEYXRlLm5vdygpO1xuICBjb25zdCBtaW5pbXVtRGVsYXkgPSByaWdodE5vdyArIDUwO1xuXG4gIHZvaWQgcmlnaHROb3csIG1pbmltdW1EZWxheSwgc2luY2UsIHVudGlsO1xuICB3aGlsZSAobGFzdERlbGF5MihsYXN0Q2FsbDIpIDwgcGVyU2Vjb25kcyhoZXJ0eikpIHtcbiAgICBpc0dyZWVuTGlnaHQgPSBmYWxzZTtcbiAgfVxuXG4gIGlzR3JlZW5MaWdodCA9IHRydWU7XG4gIGRvTmV4dCgpO1xuICByZXNldExhc3RDYWxsMigpO1xuXG4gIHJldHVybiBpc0dyZWVuTGlnaHQ7XG59XG5cbmV4cG9ydCBjb25zdCBub3dNaWxpU2Vjb25kcyA9IERhdGUubm93KCk7XG5leHBvcnQgY29uc3QgbGFzdFJlcXVlc3RNaWxpU2Vjb25kcyA9IERhdGUubm93KCk7XG5cbi8vIG1haW50ZW5hbnQgKGxhcmdlciB0aW1lIHN0YW1wKSAtIGFudMOpcmlldXJlbWVudCAoc21hbGxlciB0aW1lIHN0YW1wKSAgPSBwb3NpdGl2ZSBpbnRlZ2VyXG4vLyBwb3N0w6lyaWV1cmVtZW50IChsYXJnZXIgdGltZSBzdGFtcCkgLSBtYWludGVuYW50IChzbWFsbGVyIHRpbWUgc3RhbXApICA9IHBvc2l0aXZlIGludGVnZXJcblxuLy8gZXhhbXBsZSAuLi4gMSByZXF1ZXN0IGVhY2ggNTAgbXNcbiJdfQ==