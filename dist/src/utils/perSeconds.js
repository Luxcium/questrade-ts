"use strict";
/**
 * as per this function definition 0 hz will be equivalent to 1000 hz
 * Will return a non negative value delay = delay \< 0 ? -(delay) : +(delay);
 * @returns delay in mili seconds = !!hz ? (1000 / hz) : 1000
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.perSeconds = void 0;
const perSeconds = (hertz) => {
    let delay = hertz;
    // non zero
    // as per this definition
    // 0 hz is equivalent to 1000 hz
    delay = 1000 / delay;
    delay = delay ? delay : 1000;
    // non negative
    delay = delay < 0 ? delay * -1 : delay;
    // when delay is larger than 2147483647 or less than 1,
    // the delay will be set to 1.
    // non-integer delays are truncated to an integer.
    return delay;
};
exports.perSeconds = perSeconds;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyU2Vjb25kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9wZXJTZWNvbmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOzs7QUFFSSxNQUFNLFVBQVUsR0FBRyxDQUFDLEtBQWEsRUFBVSxFQUFFO0lBQ2xELElBQUksS0FBSyxHQUFXLEtBQUssQ0FBQztJQUMxQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUVoQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNyQixLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM3QixlQUFlO0lBQ2YsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBRXZDLHVEQUF1RDtJQUN2RCw4QkFBOEI7SUFDOUIsa0RBQWtEO0lBQ2xELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBZlcsUUFBQSxVQUFVLGNBZXJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBhcyBwZXIgdGhpcyBmdW5jdGlvbiBkZWZpbml0aW9uIDAgaHogd2lsbCBiZSBlcXVpdmFsZW50IHRvIDEwMDAgaHpcbiAqIFdpbGwgcmV0dXJuIGEgbm9uIG5lZ2F0aXZlIHZhbHVlIGRlbGF5ID0gZGVsYXkgXFw8IDAgPyAtKGRlbGF5KSA6ICsoZGVsYXkpO1xuICogQHJldHVybnMgZGVsYXkgaW4gbWlsaSBzZWNvbmRzID0gISFoeiA/ICgxMDAwIC8gaHopIDogMTAwMFxuICovXG5cbmV4cG9ydCBjb25zdCBwZXJTZWNvbmRzID0gKGhlcnR6OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICBsZXQgZGVsYXk6IG51bWJlciA9IGhlcnR6O1xuICAvLyBub24gemVyb1xuICAvLyBhcyBwZXIgdGhpcyBkZWZpbml0aW9uXG4gIC8vIDAgaHogaXMgZXF1aXZhbGVudCB0byAxMDAwIGh6XG5cbiAgZGVsYXkgPSAxMDAwIC8gZGVsYXk7XG4gIGRlbGF5ID0gZGVsYXkgPyBkZWxheSA6IDEwMDA7XG4gIC8vIG5vbiBuZWdhdGl2ZVxuICBkZWxheSA9IGRlbGF5IDwgMCA/IGRlbGF5ICogLTEgOiBkZWxheTtcblxuICAvLyB3aGVuIGRlbGF5IGlzIGxhcmdlciB0aGFuIDIxNDc0ODM2NDcgb3IgbGVzcyB0aGFuIDEsXG4gIC8vIHRoZSBkZWxheSB3aWxsIGJlIHNldCB0byAxLlxuICAvLyBub24taW50ZWdlciBkZWxheXMgYXJlIHRydW5jYXRlZCB0byBhbiBpbnRlZ2VyLlxuICByZXR1cm4gZGVsYXk7XG59O1xuIl19