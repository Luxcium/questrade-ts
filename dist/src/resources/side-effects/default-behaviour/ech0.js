"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.void1 = exports.void0 = exports.id1 = exports.id0 = exports.echo1 = exports.echo = exports.ech0 = void 0;
/**
 * ### Utility function
 * **`ech0`**  returns its first argument `arg0` and `console.log` all it's arguments.
 */
function ech0(arg0, ...args) {
    console.log(arg0, ...args);
    return arg0;
}
exports.ech0 = ech0;
/**
 * ### Utility function
 * **`id0`**  returns its first argument `arg0` and do nothing else.
 */
function id0(arg0, ...args) {
    void args;
    return arg0;
}
exports.id0 = id0;
/**
 * ### Utility function
 * **`void0`** return void and do nothing else. Can be use as a placeholder for `ech0` or `id0`
 */
function void0(arg0, ...args) {
    return void [arg0, args];
}
exports.void0 = void0;
/**
 * ### Utility function
 * **`ech1`** Use first argument as a text label,
 * `console.log` all it's arguments and returns only its second argument `arg1`
 */
function echo1(label, arg1, ...args) {
    console.log(label, arg1, ...args);
    return arg1;
}
exports.echo1 = echo1;
/**
 * ### Utility function
 * **`id1`** returns only its second argument `arg1` and do nothing else.
 */
function id1(label, arg1, ...args) {
    void [label, args];
    return arg1;
}
exports.id1 = id1;
/**
 * ### Utility function
 * **`void1`** return void and do nothing else.
 * Can be use as a placeholder for `ech1` or `id1`
 */
function void1(label, arg1, ...args) {
    return void [label, arg1, args];
}
exports.void1 = void1;
/**
 * ### Utility function
 * **`echo`** will `console.log` all it's arguments and return `void`.
 */
function echo(...args) {
    console.log(...args);
}
exports.echo = echo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNoMC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9yZXNvdXJjZXMvc2lkZS1lZmZlY3RzL2RlZmF1bHQtYmVoYXZpb3VyL2VjaDAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7OztHQUdHO0FBQ0gsU0FBUyxJQUFJLENBQWMsSUFBTyxFQUFFLEdBQUcsSUFBVztJQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRTNCLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQTBEUSxvQkFBSTtBQXhEYjs7O0dBR0c7QUFDSCxTQUFTLEdBQUcsQ0FBYyxJQUFPLEVBQUUsR0FBRyxJQUFXO0lBQy9DLEtBQUssSUFBSSxDQUFDO0lBRVYsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBZ0QyQixrQkFBRztBQTlDL0I7OztHQUdHO0FBQ0gsU0FBUyxLQUFLLENBQWMsSUFBTyxFQUFFLEdBQUcsSUFBVztJQUNqRCxPQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQXdDcUMsc0JBQUs7QUF0QzNDOzs7O0dBSUc7QUFDSCxTQUFTLEtBQUssQ0FBYyxLQUFhLEVBQUUsSUFBTyxFQUFFLEdBQUcsSUFBVztJQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUVsQyxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUE2Qm9CLHNCQUFLO0FBM0IxQjs7O0dBR0c7QUFDSCxTQUFTLEdBQUcsQ0FBYyxLQUFhLEVBQUUsSUFBTyxFQUFFLEdBQUcsSUFBVztJQUM5RCxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRW5CLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQW1CZ0Msa0JBQUc7QUFqQnBDOzs7O0dBSUc7QUFDSCxTQUFTLEtBQUssQ0FBYyxLQUFhLEVBQUUsSUFBTyxFQUFFLEdBQUcsSUFBVztJQUNoRSxPQUFPLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUFVNEMsc0JBQUs7QUFSbEQ7OztHQUdHO0FBQ0gsU0FBUyxJQUFJLENBQUMsR0FBRyxJQUFXO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUN2QixDQUFDO0FBRWMsb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqICMjIyBVdGlsaXR5IGZ1bmN0aW9uXG4gKiAqKmBlY2gwYCoqICByZXR1cm5zIGl0cyBmaXJzdCBhcmd1bWVudCBgYXJnMGAgYW5kIGBjb25zb2xlLmxvZ2AgYWxsIGl0J3MgYXJndW1lbnRzLlxuICovXG5mdW5jdGlvbiBlY2gwPFQgPSB1bmtub3duPihhcmcwOiBULCAuLi5hcmdzOiBhbnlbXSk6IFQge1xuICBjb25zb2xlLmxvZyhhcmcwLCAuLi5hcmdzKTtcblxuICByZXR1cm4gYXJnMDtcbn1cblxuLyoqXG4gKiAjIyMgVXRpbGl0eSBmdW5jdGlvblxuICogKipgaWQwYCoqICByZXR1cm5zIGl0cyBmaXJzdCBhcmd1bWVudCBgYXJnMGAgYW5kIGRvIG5vdGhpbmcgZWxzZS5cbiAqL1xuZnVuY3Rpb24gaWQwPFQgPSB1bmtub3duPihhcmcwOiBULCAuLi5hcmdzOiBhbnlbXSk6IFQge1xuICB2b2lkIGFyZ3M7XG5cbiAgcmV0dXJuIGFyZzA7XG59XG5cbi8qKlxuICogIyMjIFV0aWxpdHkgZnVuY3Rpb25cbiAqICoqYHZvaWQwYCoqIHJldHVybiB2b2lkIGFuZCBkbyBub3RoaW5nIGVsc2UuIENhbiBiZSB1c2UgYXMgYSBwbGFjZWhvbGRlciBmb3IgYGVjaDBgIG9yIGBpZDBgXG4gKi9cbmZ1bmN0aW9uIHZvaWQwPFQgPSB1bmtub3duPihhcmcwOiBULCAuLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICByZXR1cm4gdm9pZCBbYXJnMCwgYXJnc107XG59XG5cbi8qKlxuICogIyMjIFV0aWxpdHkgZnVuY3Rpb25cbiAqICoqYGVjaDFgKiogVXNlIGZpcnN0IGFyZ3VtZW50IGFzIGEgdGV4dCBsYWJlbCxcbiAqIGBjb25zb2xlLmxvZ2AgYWxsIGl0J3MgYXJndW1lbnRzIGFuZCByZXR1cm5zIG9ubHkgaXRzIHNlY29uZCBhcmd1bWVudCBgYXJnMWBcbiAqL1xuZnVuY3Rpb24gZWNobzE8VCA9IHVua25vd24+KGxhYmVsOiBzdHJpbmcsIGFyZzE6IFQsIC4uLmFyZ3M6IGFueVtdKTogVCB7XG4gIGNvbnNvbGUubG9nKGxhYmVsLCBhcmcxLCAuLi5hcmdzKTtcblxuICByZXR1cm4gYXJnMTtcbn1cblxuLyoqXG4gKiAjIyMgVXRpbGl0eSBmdW5jdGlvblxuICogKipgaWQxYCoqIHJldHVybnMgb25seSBpdHMgc2Vjb25kIGFyZ3VtZW50IGBhcmcxYCBhbmQgZG8gbm90aGluZyBlbHNlLlxuICovXG5mdW5jdGlvbiBpZDE8VCA9IHVua25vd24+KGxhYmVsOiBzdHJpbmcsIGFyZzE6IFQsIC4uLmFyZ3M6IGFueVtdKTogVCB7XG4gIHZvaWQgW2xhYmVsLCBhcmdzXTtcblxuICByZXR1cm4gYXJnMTtcbn1cblxuLyoqXG4gKiAjIyMgVXRpbGl0eSBmdW5jdGlvblxuICogKipgdm9pZDFgKiogcmV0dXJuIHZvaWQgYW5kIGRvIG5vdGhpbmcgZWxzZS5cbiAqIENhbiBiZSB1c2UgYXMgYSBwbGFjZWhvbGRlciBmb3IgYGVjaDFgIG9yIGBpZDFgXG4gKi9cbmZ1bmN0aW9uIHZvaWQxPFQgPSB1bmtub3duPihsYWJlbDogc3RyaW5nLCBhcmcxOiBULCAuLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICByZXR1cm4gdm9pZCBbbGFiZWwsIGFyZzEsIGFyZ3NdO1xufVxuXG4vKipcbiAqICMjIyBVdGlsaXR5IGZ1bmN0aW9uXG4gKiAqKmBlY2hvYCoqIHdpbGwgYGNvbnNvbGUubG9nYCBhbGwgaXQncyBhcmd1bWVudHMgYW5kIHJldHVybiBgdm9pZGAuXG4gKi9cbmZ1bmN0aW9uIGVjaG8oLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgY29uc29sZS5sb2coLi4uYXJncyk7XG59XG5cbmV4cG9ydCB7IGVjaDAsIGVjaG8sIGVjaG8xLCBpZDAsIGlkMSwgdm9pZDAsIHZvaWQxIH07XG4iXX0=