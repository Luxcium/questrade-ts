"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myQueueu = exports.ApiCallQ_ = void 0;
const tslib_1 = require("tslib");
/* eslint-disable radar/cognitive-complexity */
/* eslint-disable radar/no-identical-functions */
/* eslint-disable promise/avoid-new */
// /*eslint complexity: ["error", 5]*/
const magic_values_1 = require("../../../magic-values");
const default_behaviour_1 = require("../../../resources/side-effects/default-behaviour");
const utils_1 = require("../../../utils");
const q_node_1 = require("./q-node");
// const instanceApiCallQ_: { instance: ApiCallQ_<any> | null } = {
//   instance: null,
// };
// void instanceApiCallQ_;
/** fCFS Queue (first-come, first-served) */
class ApiCallQ_ {
    // -| constructor |-···―――――――――――――――――――――――――――···-| ApiCallQ_() |-//-://#-| ~
    constructor(maxPerSecondes = magic_values_1.MAX_PER_SECONDES, maxPerHour = magic_values_1.MAX_PER_HOUR, timeOfSet = 1000 / magic_values_1.MAX_PER_SECONDES && 0) {
        Object.defineProperty(this, "maxPerSecondes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: maxPerSecondes
        });
        Object.defineProperty(this, "maxPerHour", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: maxPerHour
        });
        Object.defineProperty(this, "timeOfSet", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: timeOfSet
        });
        Object.defineProperty(this, "broke", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "current", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "first", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isCalled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "last", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "xRemaining", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "xResetTime", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.isCalled = false;
        this.first = null;
        this.last = null;
        this.size = 0;
        this.current = null;
        this.xRemaining = -2;
        this.xResetTime = -2;
        this.broke = false;
    }
    set remaining(xRemaining) {
        const xRemain = Number(xRemaining);
        // set to 1 if zero or not a number or NaN
        this.xRemaining = typeof xRemain === 'number' ? xRemain || 1 : 1;
    }
    get remaining() {
        return this.xRemaining;
    }
    set resetTime(xResetTime) {
        const xReset = Number(xResetTime);
        // set to 1 if zero or not a number or NaN
        this.xResetTime = typeof xReset === 'number' ? xReset || 1 : 1;
    }
    get resetTime() {
        return this.xResetTime;
    }
    get isBroken() {
        return this.broke;
    }
    get isNotBroken() {
        return !this.broke;
    }
    get isNotCalled() {
        return !this.isCalled;
    }
    get isEmpty() {
        return this.size <= 0;
    }
    get isNotEmpty() {
        return this.size > 0;
    }
    // : this is {current: NonNullable<ApiCallQ_<T>['current']>;
    get isCallable() {
        return this.isNotEmpty && this.isNotCalled && this.isNotBroken;
    }
    static get new() {
        return new ApiCallQ_();
    }
    get positiveTimeOffset() {
        return this.timeOfSet >= 0 ? this.timeOfSet : 0;
    }
    // -| protected |-get――――――――――――――――――――――――――――――···-| requestLimit |-//::――― ~
    // info: requestLimit //-!
    get requestLimit() {
        const { floor, min, ceil } = Math;
        const reqstRemaining = default_behaviour_1.id1('\nreqstRemaining:', this.xRemaining - 1);
        const resetTime = default_behaviour_1.id1('resetTime :', this.xResetTime);
        if (reqstRemaining < 1 || resetTime < 1) {
            return default_behaviour_1.id1('returnTime :', 666);
        }
        // if (resetTime <= 0) {
        //   return id1('returnTime :', 666);
        // }
        const timeNow = default_behaviour_1.id1('timeNow   :', floor(utils_1.now() / 1000));
        const timeRemaining = resetTime - timeNow;
        default_behaviour_1.id1('timeRemaining:', timeRemaining);
        const reqPerSecRaw = default_behaviour_1.id1('\nreqPerSecRaw:', reqstRemaining / timeRemaining);
        const reqPerSec = default_behaviour_1.id1('reqPerSec:', min(floor(reqPerSecRaw), 20));
        const delay = default_behaviour_1.id1('calculated Delay:', ceil(1000 / reqPerSec));
        const offset = this.positiveTimeOffset;
        return default_behaviour_1.id1(`delay plus ${offset}ms offset :`, ceil(delay + offset));
    }
    // -| protected |-···――――――――――――――――――――――――――···-| callToPopQueue() |-//::――― ~
    // info: callToPopQueue //-!
    callToPopQueue() {
        const timeThen = utils_1.now();
        if (this.isCallable) {
            this.isCalled = true;
            setTimeout(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
                var _a, _b;
                this.deQueue();
                const cb = (_b = (_a = this.current) === null || _a === void 0 ? void 0 : _a.value.cb) !== null && _b !== void 0 ? _b : utils_1.void0;
                try {
                    const { fn } = this.current.value;
                    const { config } = this.current.value;
                    const before = utils_1.now();
                    const response = yield fn(config);
                    this.remaining = response.headers['x-ratelimit-remaining'];
                    this.resetTime = response.headers['x-ratelimit-reset'];
                    cb(null, response);
                    console.info('\nrequest response cycle in', utils_1.now() - before, 'ms' /* '\n' */);
                }
                catch (error) {
                    if (error.message.includes('401') ||
                        error.message.includes('429') ||
                        error.message.includes('500')) {
                        this.broke = true;
                    }
                    console.error('catch an error in Queue Ratelimiter:', error.message);
                    cb(error, null);
                }
                console.info('Complete previous cycle in', utils_1.now() - timeThen, 'ms');
                this.isCalled = false;
                this.callToPopQueue();
            }), this.requestLimit);
        }
    }
    // -| public |-···―――――――――――――――――――――――――――――――――···-| addToQueue() |-//::――― ~
    addToQueue(value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callBack = (cb) => {
                this.enQueue(Object.assign(Object.assign({}, value), { cb }));
                if (this.isNotCalled) {
                    this.callToPopQueue();
                }
            };
            return new Promise((resolve, reject) => {
                callBack((error, result) => {
                    if (!error) {
                        resolve(result);
                        return true;
                    }
                    reject(error);
                    return false;
                });
            });
        });
    }
    // -| protected |-···――――――――――――――――――――――――――――――――――···-| enQueue() |-//::―― ~
    enQueue(val) {
        const newNode = new q_node_1.QNode(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return (this.size += 1);
        // by Colt Steele ― Developer and Bootcamp Instructor
        // from Udemy ― Js Algorithms And Data Structures Masterclass
    }
    // -| protected |-···――――――――――――――――――――――――――――――――――···-| deQueue() |-//::―― ~
    deQueue() {
        if (!this.first) {
            return null;
        }
        this.current = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size -= 1;
        return this;
        // by Colt Steele ― Developer and Bootcamp Instructor
        // from Udemy ― Js Algorithms And Data Structures Masterclass
    }
}
exports.ApiCallQ_ = ApiCallQ_;
exports.myQueueu = new ApiCallQ_();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVldWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcHJpdmF0ZS9jb3JlL25leHQtcmF0ZS1saW1pdGVyL3F1ZXVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwrQ0FBK0M7QUFDL0MsaURBQWlEO0FBQ2pELHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsd0RBQXVFO0FBQ3ZFLHlGQUF3RTtBQUt4RSwwQ0FBNEM7QUFDNUMscUNBQWlDO0FBY2pDLG1FQUFtRTtBQUNuRSxvQkFBb0I7QUFDcEIsS0FBSztBQUVMLDBCQUEwQjtBQUUxQiw0Q0FBNEM7QUFFNUMsTUFBYSxTQUFTO0lBK0RwQixpRkFBaUY7SUFDakYsWUFDWSxpQkFBeUIsK0JBQWdCLEVBQ3pDLGFBQXFCLDJCQUFZLEVBQ2pDLFlBQW9CLElBQUksR0FBRywrQkFBZ0IsSUFBSSxDQUFDOzs7OzttQkFGaEQ7Ozs7OzttQkFDQTs7Ozs7O21CQUNBOztRQWxFWjs7Ozs7V0FBeUI7UUFDekI7Ozs7O1dBQTZCO1FBQzdCOzs7OztXQUEyQjtRQUMzQjs7Ozs7V0FBNEI7UUFDNUI7Ozs7O1dBQTBCO1FBQzFCOzs7OztXQUE2QjtRQUM3Qjs7Ozs7V0FBNkI7UUFDN0I7Ozs7O1dBQXVCO1FBNkRyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBbkVE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QUssQ0FBQyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7UUFFZixPQUFPLElBQUksQ0FBQztRQUNaLHFEQUFxRDtRQUNyRCw2REFBNkQ7SUFDL0QsQ0FBQztDQUNGO0FBbk5ELDhCQW1OQztBQUNZLFFBQUEsUUFBUSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByYWRhci9jb2duaXRpdmUtY29tcGxleGl0eSAqL1xuLyogZXNsaW50LWRpc2FibGUgcmFkYXIvbm8taWRlbnRpY2FsLWZ1bmN0aW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgcHJvbWlzZS9hdm9pZC1uZXcgKi9cbi8vIC8qZXNsaW50IGNvbXBsZXhpdHk6IFtcImVycm9yXCIsIDVdKi9cbmltcG9ydCB7IE1BWF9QRVJfSE9VUiwgTUFYX1BFUl9TRUNPTkRFUyB9IGZyb20gJy4uLy4uLy4uL21hZ2ljLXZhbHVlcyc7XG5pbXBvcnQgeyBpZDEgfSBmcm9tICcuLi8uLi8uLi9yZXNvdXJjZXMvc2lkZS1lZmZlY3RzL2RlZmF1bHQtYmVoYXZpb3VyJztcbmltcG9ydCB0eXBlIHtcbiAgQ2xpZW50UmVxdWVzdENvbmZpZyxcbiAgQ2xpZW50UmVzcG9uc2UsXG59IGZyb20gJy4uLy4uLy4uL3Jlc291cmNlcy9zaWRlLWVmZmVjdHMvdHlwZXMnO1xuaW1wb3J0IHsgbm93LCB2b2lkMCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFFOb2RlIH0gZnJvbSAnLi9xLW5vZGUnO1xuXG5pbnRlcmZhY2UgSVFOb2RlPFQgZXh0ZW5kcyBRTm9kZXNWYWx1ZT4ge1xuICB2YWx1ZTogVDtcbiAgbmV4dDogSVFOb2RlPFQ+IHwgbnVsbDtcbn1cblxuLy8gdHlwZSBBcGlDYWxsUV9WYWx1ZSA9IGFueTtcbnR5cGUgUU5vZGVzPFQgZXh0ZW5kcyBRTm9kZXNWYWx1ZSA9IFFOb2Rlc1ZhbHVlPiA9IElRTm9kZTxUPiB8IG51bGw7XG5pbnRlcmZhY2UgUU5vZGVzVmFsdWUge1xuICBjb25maWc6IENsaWVudFJlcXVlc3RDb25maWc7XG4gIGZuOiA8Uj4oY29uZmlnOiBDbGllbnRSZXF1ZXN0Q29uZmlnKSA9PiBQcm9taXNlPENsaWVudFJlc3BvbnNlPFI+PjtcbiAgY2I/OiBhbnk7XG59XG4vLyBjb25zdCBpbnN0YW5jZUFwaUNhbGxRXzogeyBpbnN0YW5jZTogQXBpQ2FsbFFfPGFueT4gfCBudWxsIH0gPSB7XG4vLyAgIGluc3RhbmNlOiBudWxsLFxuLy8gfTtcblxuLy8gdm9pZCBpbnN0YW5jZUFwaUNhbGxRXztcblxuLyoqIGZDRlMgUXVldWUgKGZpcnN0LWNvbWUsIGZpcnN0LXNlcnZlZCkgKi9cblxuZXhwb3J0IGNsYXNzIEFwaUNhbGxRXzxUIGV4dGVuZHMgUU5vZGVzVmFsdWUgPSBRTm9kZXNWYWx1ZT4ge1xuICBwcm90ZWN0ZWQgYnJva2U6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBjdXJyZW50OiBRTm9kZXM8VD47XG4gIHByb3RlY3RlZCBmaXJzdDogUU5vZGVzPFQ+O1xuICBwcm90ZWN0ZWQgaXNDYWxsZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBsYXN0OiBRTm9kZXM8VD47XG4gIHByb3RlY3RlZCB4UmVtYWluaW5nOiBudW1iZXI7XG4gIHByb3RlY3RlZCB4UmVzZXRUaW1lOiBudW1iZXI7XG4gIHByb3RlY3RlZCBzaXplOiBudW1iZXI7XG5cbiAgcHJvdGVjdGVkIHNldCByZW1haW5pbmcoeFJlbWFpbmluZzogYW55KSB7XG4gICAgY29uc3QgeFJlbWFpbiA9IE51bWJlcih4UmVtYWluaW5nKTtcbiAgICAvLyBzZXQgdG8gMSBpZiB6ZXJvIG9yIG5vdCBhIG51bWJlciBvciBOYU5cbiAgICB0aGlzLnhSZW1haW5pbmcgPSB0eXBlb2YgeFJlbWFpbiA9PT0gJ251bWJlcicgPyB4UmVtYWluIHx8IDEgOiAxO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCByZW1haW5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMueFJlbWFpbmluZztcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXQgcmVzZXRUaW1lKHhSZXNldFRpbWU6IGFueSkge1xuICAgIGNvbnN0IHhSZXNldCA9IE51bWJlcih4UmVzZXRUaW1lKTtcbiAgICAvLyBzZXQgdG8gMSBpZiB6ZXJvIG9yIG5vdCBhIG51bWJlciBvciBOYU5cbiAgICB0aGlzLnhSZXNldFRpbWUgPSB0eXBlb2YgeFJlc2V0ID09PSAnbnVtYmVyJyA/IHhSZXNldCB8fCAxIDogMTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgcmVzZXRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLnhSZXNldFRpbWU7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGlzQnJva2VuKCkge1xuICAgIHJldHVybiB0aGlzLmJyb2tlO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBpc05vdEJyb2tlbigpIHtcbiAgICByZXR1cm4gIXRoaXMuYnJva2U7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGlzTm90Q2FsbGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5pc0NhbGxlZDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgaXNFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaXplIDw9IDA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGlzTm90RW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA+IDA7XG4gIH1cblxuICAvLyA6IHRoaXMgaXMge2N1cnJlbnQ6IE5vbk51bGxhYmxlPEFwaUNhbGxRXzxUPlsnY3VycmVudCddPjtcbiAgcHJvdGVjdGVkIGdldCBpc0NhbGxhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmlzTm90RW1wdHkgJiYgdGhpcy5pc05vdENhbGxlZCAmJiB0aGlzLmlzTm90QnJva2VuO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXQgbmV3KCkge1xuICAgIHJldHVybiBuZXcgQXBpQ2FsbFFfKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHBvc2l0aXZlVGltZU9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy50aW1lT2ZTZXQgPj0gMCA/IHRoaXMudGltZU9mU2V0IDogMDtcbiAgfVxuXG4gIC8vIC18IGNvbnN0cnVjdG9yIHwtwrfCt8K34oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCVwrfCt8K3LXwgQXBpQ2FsbFFfKCkgfC0vLy06Ly8jLXwgflxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG1heFBlclNlY29uZGVzOiBudW1iZXIgPSBNQVhfUEVSX1NFQ09OREVTLFxuICAgIHByb3RlY3RlZCBtYXhQZXJIb3VyOiBudW1iZXIgPSBNQVhfUEVSX0hPVVIsXG4gICAgcHJvdGVjdGVkIHRpbWVPZlNldDogbnVtYmVyID0gMTAwMCAvIE1BWF9QRVJfU0VDT05ERVMgJiYgMCxcbiAgKSB7XG4gICAgdGhpcy5pc0NhbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZmlyc3QgPSBudWxsO1xuICAgIHRoaXMubGFzdCA9IG51bGw7XG4gICAgdGhpcy5zaXplID0gMDtcbiAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xuICAgIHRoaXMueFJlbWFpbmluZyA9IC0yO1xuICAgIHRoaXMueFJlc2V0VGltZSA9IC0yO1xuICAgIHRoaXMuYnJva2UgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIC18IHByb3RlY3RlZCB8LWdldOKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAlcK3wrfCty18IHJlcXVlc3RMaW1pdCB8LS8vOjrigJXigJXigJUgflxuICAvLyBpbmZvOiByZXF1ZXN0TGltaXQgLy8tIVxuICBwcm90ZWN0ZWQgZ2V0IHJlcXVlc3RMaW1pdCgpIHtcbiAgICBjb25zdCB7IGZsb29yLCBtaW4sIGNlaWwgfSA9IE1hdGg7XG4gICAgY29uc3QgcmVxc3RSZW1haW5pbmcgPSBpZDEoJ1xcbnJlcXN0UmVtYWluaW5nOicsIHRoaXMueFJlbWFpbmluZyAtIDEpO1xuICAgIGNvbnN0IHJlc2V0VGltZSA9IGlkMSgncmVzZXRUaW1lIDonLCB0aGlzLnhSZXNldFRpbWUpO1xuICAgIGlmIChyZXFzdFJlbWFpbmluZyA8IDEgfHwgcmVzZXRUaW1lIDwgMSkge1xuICAgICAgcmV0dXJuIGlkMSgncmV0dXJuVGltZSA6JywgNjY2KTtcbiAgICB9XG5cbiAgICAvLyBpZiAocmVzZXRUaW1lIDw9IDApIHtcbiAgICAvLyAgIHJldHVybiBpZDEoJ3JldHVyblRpbWUgOicsIDY2Nik7XG4gICAgLy8gfVxuXG4gICAgY29uc3QgdGltZU5vdyA9IGlkMSgndGltZU5vdyAgIDonLCBmbG9vcihub3coKSAvIDEwMDApKTtcbiAgICBjb25zdCB0aW1lUmVtYWluaW5nID0gcmVzZXRUaW1lIC0gdGltZU5vdztcbiAgICBpZDEoJ3RpbWVSZW1haW5pbmc6JywgdGltZVJlbWFpbmluZyk7XG5cbiAgICBjb25zdCByZXFQZXJTZWNSYXcgPSBpZDEoJ1xcbnJlcVBlclNlY1JhdzonLCByZXFzdFJlbWFpbmluZyAvIHRpbWVSZW1haW5pbmcpO1xuICAgIGNvbnN0IHJlcVBlclNlYyA9IGlkMSgncmVxUGVyU2VjOicsIG1pbihmbG9vcihyZXFQZXJTZWNSYXcpLCAyMCkpO1xuICAgIGNvbnN0IGRlbGF5ID0gaWQxKCdjYWxjdWxhdGVkIERlbGF5OicsIGNlaWwoMTAwMCAvIHJlcVBlclNlYykpO1xuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMucG9zaXRpdmVUaW1lT2Zmc2V0O1xuXG4gICAgcmV0dXJuIGlkMShgZGVsYXkgcGx1cyAke29mZnNldH1tcyBvZmZzZXQgOmAsIGNlaWwoZGVsYXkgKyBvZmZzZXQpKTtcbiAgfVxuXG4gIC8vIC18IHByb3RlY3RlZCB8LcK3wrfCt+KAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAlcK3wrfCty18IGNhbGxUb1BvcFF1ZXVlKCkgfC0vLzo64oCV4oCV4oCVIH5cbiAgLy8gaW5mbzogY2FsbFRvUG9wUXVldWUgLy8tIVxuICBwcm90ZWN0ZWQgY2FsbFRvUG9wUXVldWUoKSB7XG4gICAgY29uc3QgdGltZVRoZW4gPSBub3coKTtcblxuICAgIGlmICh0aGlzLmlzQ2FsbGFibGUpIHtcbiAgICAgIHRoaXMuaXNDYWxsZWQgPSB0cnVlO1xuXG4gICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgdGhpcy5kZVF1ZXVlKCk7XG4gICAgICAgIGNvbnN0IGNiID0gdGhpcy5jdXJyZW50Py52YWx1ZS5jYiA/PyB2b2lkMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IGZuIH0gPSB0aGlzLmN1cnJlbnQhLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLmN1cnJlbnQhLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IGJlZm9yZSA9IG5vdygpO1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZm4oY29uZmlnKTtcbiAgICAgICAgICB0aGlzLnJlbWFpbmluZyA9IHJlc3BvbnNlLmhlYWRlcnNbJ3gtcmF0ZWxpbWl0LXJlbWFpbmluZyddO1xuICAgICAgICAgIHRoaXMucmVzZXRUaW1lID0gcmVzcG9uc2UuaGVhZGVyc1sneC1yYXRlbGltaXQtcmVzZXQnXTtcblxuICAgICAgICAgIGNiKG51bGwsIHJlc3BvbnNlKTtcbiAgICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICAnXFxucmVxdWVzdCByZXNwb25zZSBjeWNsZSBpbicsXG4gICAgICAgICAgICBub3coKSAtIGJlZm9yZSxcbiAgICAgICAgICAgICdtcycgLyogJ1xcbicgKi8sXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAoZXJyb3IubWVzc2FnZSBhcyBzdHJpbmcpLmluY2x1ZGVzKCc0MDEnKSB8fFxuICAgICAgICAgICAgKGVycm9yLm1lc3NhZ2UgYXMgc3RyaW5nKS5pbmNsdWRlcygnNDI5JykgfHxcbiAgICAgICAgICAgIChlcnJvci5tZXNzYWdlIGFzIHN0cmluZykuaW5jbHVkZXMoJzUwMCcpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmJyb2tlID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdjYXRjaCBhbiBlcnJvciBpbiBRdWV1ZSBSYXRlbGltaXRlcjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICBjYihlcnJvciwgbnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmluZm8oJ0NvbXBsZXRlIHByZXZpb3VzIGN5Y2xlIGluJywgbm93KCkgLSB0aW1lVGhlbiwgJ21zJyk7XG5cbiAgICAgICAgdGhpcy5pc0NhbGxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhbGxUb1BvcFF1ZXVlKCk7XG4gICAgICB9LCB0aGlzLnJlcXVlc3RMaW1pdCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLXwgcHVibGljIHwtwrfCt8K34oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCVwrfCt8K3LXwgYWRkVG9RdWV1ZSgpIHwtLy86OuKAleKAleKAlSB+XG4gIHB1YmxpYyBhc3luYyBhZGRUb1F1ZXVlPFIgPSBhbnk+KHZhbHVlOiBUKSAvKiA6IENsaWVudFByb21pc2U8Uj4gKi8ge1xuICAgIGNvbnN0IGNhbGxCYWNrID0gKGNiOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuZW5RdWV1ZSh7IC4uLnZhbHVlLCBjYiB9KTtcbiAgICAgIGlmICh0aGlzLmlzTm90Q2FsbGVkKSB7XG4gICAgICAgIHRoaXMuY2FsbFRvUG9wUXVldWUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPENsaWVudFJlc3BvbnNlPFI+PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjYWxsQmFjaygoZXJyb3I6IEVycm9yLCByZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZWplY3QoZXJyb3IpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gLXwgcHJvdGVjdGVkIHwtwrfCt8K34oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCVwrfCt8K3LXwgZW5RdWV1ZSgpIHwtLy86OuKAleKAlSB+XG4gIHByb3RlY3RlZCBlblF1ZXVlKHZhbDogVCkge1xuICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgUU5vZGUodmFsKTtcblxuICAgIGlmICghdGhpcy5maXJzdCkge1xuICAgICAgdGhpcy5maXJzdCA9IG5ld05vZGU7XG4gICAgICB0aGlzLmxhc3QgPSBuZXdOb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxhc3QhLm5leHQgPSBuZXdOb2RlO1xuICAgICAgdGhpcy5sYXN0ID0gbmV3Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKHRoaXMuc2l6ZSArPSAxKTtcbiAgICAvLyBieSBDb2x0IFN0ZWVsZSDigJUgRGV2ZWxvcGVyIGFuZCBCb290Y2FtcCBJbnN0cnVjdG9yXG4gICAgLy8gZnJvbSBVZGVteSDigJUgSnMgQWxnb3JpdGhtcyBBbmQgRGF0YSBTdHJ1Y3R1cmVzIE1hc3RlcmNsYXNzXG4gIH1cblxuICAvLyAtfCBwcm90ZWN0ZWQgfC3Ct8K3wrfigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXCt8K3wrctfCBkZVF1ZXVlKCkgfC0vLzo64oCV4oCVIH5cbiAgcHJvdGVjdGVkIGRlUXVldWUoKSB7XG4gICAgaWYgKCF0aGlzLmZpcnN0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmZpcnN0O1xuXG4gICAgaWYgKHRoaXMuZmlyc3QgPT09IHRoaXMubGFzdCkge1xuICAgICAgdGhpcy5sYXN0ID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLmZpcnN0ID0gdGhpcy5maXJzdC5uZXh0O1xuICAgIHRoaXMuc2l6ZSAtPSAxO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gICAgLy8gYnkgQ29sdCBTdGVlbGUg4oCVIERldmVsb3BlciBhbmQgQm9vdGNhbXAgSW5zdHJ1Y3RvclxuICAgIC8vIGZyb20gVWRlbXkg4oCVIEpzIEFsZ29yaXRobXMgQW5kIERhdGEgU3RydWN0dXJlcyBNYXN0ZXJjbGFzc1xuICB9XG59XG5leHBvcnQgY29uc3QgbXlRdWV1ZXUgPSBuZXcgQXBpQ2FsbFFfKCk7XG4iXX0=