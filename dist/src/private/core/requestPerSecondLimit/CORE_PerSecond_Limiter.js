"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.limitingRequest = void 0;
const tslib_1 = require("tslib");
/* eslint-disable promise/avoid-new */
const side_effects_1 = require("../../../resources/side-effects");
const utils_1 = require("../../../utils");
const never_will_1 = require("./never-will");
function limitingRequest(fn, hertz = 1) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const callsQueue = [];
        let isCalled = false;
        side_effects_1.ech0('limitingRequest(fn: Function, hertz: number = 1)');
        const callToPop = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (callsQueue.length > 0 && !isCalled) {
                isCalled = true;
                setTimeout(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    isCalled = false;
                    side_effects_1.ech0('in  setTimeout await callToPop() ');
                    yield callToPop();
                    return void 0;
                }), utils_1.perSeconds(hertz));
                const poped = callsQueue.pop();
                const [myfn, mycb] = poped ? poped : never_will_1.neverWill;
                mycb(null, myfn());
                return void 0;
            }
            return void 0;
        });
        const addToQueue = (cb /* callBack<any> */) => {
            callsQueue.unshift([fn, cb]);
            callToPop();
        };
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
exports.limitingRequest = limitingRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ09SRV9QZXJTZWNvbmRfTGltaXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9wcml2YXRlL2NvcmUvcmVxdWVzdFBlclNlY29uZExpbWl0L0NPUkVfUGVyU2Vjb25kX0xpbWl0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNDQUFzQztBQUN0QyxrRUFBaUU7QUFFakUsMENBQTRDO0FBQzVDLDZDQUF5QztBQUV6QyxTQUFlLGVBQWUsQ0FBSSxFQUFZLEVBQUUsS0FBSyxHQUFHLENBQUM7O1FBQ3ZELE1BQU0sVUFBVSxHQUFnQyxFQUFFLENBQUM7UUFDbkQsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXJCLG1CQUFJLENBQUMsa0RBQWtELENBQUMsQ0FBQztRQUV6RCxNQUFNLFNBQVMsR0FBRyxHQUFTLEVBQUU7WUFDM0IsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDdEMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDaEIsVUFBVSxDQUFDLEdBQVMsRUFBRTtvQkFDcEIsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsbUJBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO29CQUUxQyxNQUFNLFNBQVMsRUFBRSxDQUFDO29CQUVsQixPQUFPLEtBQUssQ0FBQyxDQUFDO2dCQUNoQixDQUFDLENBQUEsRUFBRSxrQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDL0IsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsc0JBQVMsQ0FBQztnQkFFL0MsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUVuQixPQUFPLEtBQUssQ0FBQyxDQUFDO2FBQ2Y7WUFFRCxPQUFPLEtBQUssQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQSxDQUFDO1FBRUYsTUFBTSxVQUFVLEdBQUcsQ0FBQyxFQUFPLENBQUMsbUJBQW1CLEVBQUUsRUFBRTtZQUNqRCxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsU0FBUyxFQUFFLENBQUM7UUFDZCxDQUFDLENBQUM7UUFFRixPQUFPLElBQUksT0FBTyxDQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3hDLFVBQVUsQ0FBQyxDQUFDLEtBQVksRUFBRSxNQUFXLEVBQUUsRUFBRTtnQkFDdkMsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsS0FBSyx1QkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUVyQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRWQsT0FBTyxLQUFLLENBQUMsQ0FBQztpQkFDZjtnQkFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRWhCLE9BQU8sS0FBSyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FBQTtBQUVRLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcHJvbWlzZS9hdm9pZC1uZXcgKi9cbmltcG9ydCB7IGVjaDAsIGVycm9ybG9nIH0gZnJvbSAnLi4vLi4vLi4vcmVzb3VyY2VzL3NpZGUtZWZmZWN0cyc7XG5pbXBvcnQgdHlwZSB7IENhbGxCYWNrIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBwZXJTZWNvbmRzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgbmV2ZXJXaWxsIH0gZnJvbSAnLi9uZXZlci13aWxsJztcblxuYXN5bmMgZnVuY3Rpb24gbGltaXRpbmdSZXF1ZXN0PFQ+KGZuOiBGdW5jdGlvbiwgaGVydHogPSAxKSB7XG4gIGNvbnN0IGNhbGxzUXVldWU6IFtGdW5jdGlvbiwgQ2FsbEJhY2s8YW55Pl1bXSA9IFtdO1xuICBsZXQgaXNDYWxsZWQgPSBmYWxzZTtcblxuICBlY2gwKCdsaW1pdGluZ1JlcXVlc3QoZm46IEZ1bmN0aW9uLCBoZXJ0ejogbnVtYmVyID0gMSknKTtcblxuICBjb25zdCBjYWxsVG9Qb3AgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGNhbGxzUXVldWUubGVuZ3RoID4gMCAmJiAhaXNDYWxsZWQpIHtcbiAgICAgIGlzQ2FsbGVkID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBpc0NhbGxlZCA9IGZhbHNlO1xuICAgICAgICBlY2gwKCdpbiAgc2V0VGltZW91dCBhd2FpdCBjYWxsVG9Qb3AoKSAnKTtcblxuICAgICAgICBhd2FpdCBjYWxsVG9Qb3AoKTtcblxuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgICAgfSwgcGVyU2Vjb25kcyhoZXJ0eikpO1xuICAgICAgY29uc3QgcG9wZWQgPSBjYWxsc1F1ZXVlLnBvcCgpO1xuICAgICAgY29uc3QgW215Zm4sIG15Y2JdID0gcG9wZWQgPyBwb3BlZCA6IG5ldmVyV2lsbDtcblxuICAgICAgbXljYihudWxsLCBteWZuKCkpO1xuXG4gICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cblxuICAgIHJldHVybiB2b2lkIDA7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9RdWV1ZSA9IChjYjogYW55IC8qIGNhbGxCYWNrPGFueT4gKi8pID0+IHtcbiAgICBjYWxsc1F1ZXVlLnVuc2hpZnQoW2ZuLCBjYl0pO1xuICAgIGNhbGxUb1BvcCgpO1xuICB9O1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgYWRkVG9RdWV1ZSgoZXJyb3I6IEVycm9yLCByZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHZvaWQgZXJyb3Jsb2coZXJyb3IpO1xuXG4gICAgICAgIHJlamVjdChlcnJvcik7XG5cbiAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgIH1cblxuICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuXG4gICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgbGltaXRpbmdSZXF1ZXN0IH07XG4iXX0=