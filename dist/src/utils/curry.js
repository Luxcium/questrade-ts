"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curry = exports.bind = exports.functionName = exports.functionLength = void 0;
/* eslint-disable  */
// https://github.com/fantasyland/fantasy-helpers
//
//  ## functionLength(f)
//
//  Returns the arity of function `f`.
//
function functionLength(f) {
    return f._length || f.length;
}
exports.functionLength = functionLength;
//
//  ## functionName(f)
//
//  Returns the name of function `f`.
//
function functionName(f) {
    return f._name || f.name;
}
exports.functionName = functionName;
//
//  ## bind(f)(o)
//
//  Makes `this` inside of `f` equal to `o`:
//
//       Bind(function() { return this; })(a)() == a
//
//  Also partially applies arguments:
//
//       Bind(add)(null, 10)(32) == 42
//
function bind(f) {
    function curriedBind(o) {
        /* If native bind doesn't exist, use a polyfill. */
        const args = [].slice.call(arguments, 1);
        const g = f.bind.apply(f, [o].concat(args));
        /*
               Let's try and associate all curried functions with the same name as the originator.
               Can't override length but can set _length for currying
            */
        g._name = functionName(f);
        g._length = Math.max(functionLength(f) - args.length, 0);
        return g;
    }
    /* Manual currying since `curry` relies in bind. */
    return arguments.length <= 1
        ? curriedBind
        : curriedBind.apply(this, [].slice.call(arguments, 1));
}
exports.bind = bind;
//
//  ## curry(f)
//
//  Takes a normal function `f` and allows partial application of its
//  Named arguments:
//
//       Var add = fantasy.curry(function(a, b) {
//              Return a + b;
//          }),
//          Add15 = add(15);
//
//       Add15(27) == 42;
//
//  Retains ability of complete application by calling the function
//  When enough arguments are filled:
//
//       Add(15, 27) == 42;
//
function curry(f) {
    const a = function () {
        const g = bind(f).apply(f, [this].concat([].slice.call(arguments)));
        return !functionLength(g) ? g() : curry(g);
    };
    /*
         Let's try and associate all curried functions with the same name as the originator.
         Can't override length but can set _length for currying
      */
    a._name = functionName(f);
    a._length = functionLength(f);
    return a;
}
exports.curry = curry;
/*
    "author": "Simon Richardson <stickupkid@gmail.com> (https://github.com/SimonRichardson)",
    "homepage": "https://github.com/SimonRichardson/fantasy-helpers",
    "license": "MIT",
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvY3VycnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUJBQXFCO0FBQ3JCLGlEQUFpRDtBQUNqRCxFQUFFO0FBQ0Ysd0JBQXdCO0FBQ3hCLEVBQUU7QUFDRixzQ0FBc0M7QUFDdEMsRUFBRTtBQUNGLFNBQWdCLGNBQWMsQ0FBQyxDQUFNO0lBQ25DLE9BQU8sQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQy9CLENBQUM7QUFGRCx3Q0FFQztBQUVELEVBQUU7QUFDRixzQkFBc0I7QUFDdEIsRUFBRTtBQUNGLHFDQUFxQztBQUNyQyxFQUFFO0FBQ0YsU0FBZ0IsWUFBWSxDQUFDLENBQU07SUFDakMsT0FBTyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDM0IsQ0FBQztBQUZELG9DQUVDO0FBRUQsRUFBRTtBQUNGLGlCQUFpQjtBQUNqQixFQUFFO0FBQ0YsNENBQTRDO0FBQzVDLEVBQUU7QUFDRixvREFBb0Q7QUFDcEQsRUFBRTtBQUNGLHFDQUFxQztBQUNyQyxFQUFFO0FBQ0Ysc0NBQXNDO0FBQ3RDLEVBQUU7QUFDRixTQUFnQixJQUFJLENBQVksQ0FBTTtJQUNwQyxTQUFTLFdBQVcsQ0FBQyxDQUFNO1FBQ3pCLG1EQUFtRDtRQUNuRCxNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFNUM7OztjQUdNO1FBQ04sQ0FBQyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXpELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELG1EQUFtRDtJQUNuRCxPQUFPLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQztRQUMxQixDQUFDLENBQUMsV0FBVztRQUNiLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFRLENBQUMsQ0FBQztBQUNsRSxDQUFDO0FBcEJELG9CQW9CQztBQUVELEVBQUU7QUFDRixlQUFlO0FBQ2YsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxvQkFBb0I7QUFDcEIsRUFBRTtBQUNGLGlEQUFpRDtBQUNqRCw2QkFBNkI7QUFDN0IsZUFBZTtBQUNmLDRCQUE0QjtBQUM1QixFQUFFO0FBQ0YseUJBQXlCO0FBQ3pCLEVBQUU7QUFDRixtRUFBbUU7QUFDbkUscUNBQXFDO0FBQ3JDLEVBQUU7QUFDRiwyQkFBMkI7QUFDM0IsRUFBRTtBQUNGLFNBQWdCLEtBQUssQ0FBQyxDQUFNO0lBQzFCLE1BQU0sQ0FBQyxHQUFHO1FBQ1IsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQyxDQUFDO0lBRUY7OztRQUdJO0lBQ0osQ0FBQyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFOUIsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDO0FBZkQsc0JBZUM7QUFFRDs7OztHQUlHIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgICovXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZmFudGFzeWxhbmQvZmFudGFzeS1oZWxwZXJzXG4vL1xuLy8gICMjIGZ1bmN0aW9uTGVuZ3RoKGYpXG4vL1xuLy8gIFJldHVybnMgdGhlIGFyaXR5IG9mIGZ1bmN0aW9uIGBmYC5cbi8vXG5leHBvcnQgZnVuY3Rpb24gZnVuY3Rpb25MZW5ndGgoZjogYW55KSB7XG4gIHJldHVybiBmLl9sZW5ndGggfHwgZi5sZW5ndGg7XG59XG5cbi8vXG4vLyAgIyMgZnVuY3Rpb25OYW1lKGYpXG4vL1xuLy8gIFJldHVybnMgdGhlIG5hbWUgb2YgZnVuY3Rpb24gYGZgLlxuLy9cbmV4cG9ydCBmdW5jdGlvbiBmdW5jdGlvbk5hbWUoZjogYW55KSB7XG4gIHJldHVybiBmLl9uYW1lIHx8IGYubmFtZTtcbn1cblxuLy9cbi8vICAjIyBiaW5kKGYpKG8pXG4vL1xuLy8gIE1ha2VzIGB0aGlzYCBpbnNpZGUgb2YgYGZgIGVxdWFsIHRvIGBvYDpcbi8vXG4vLyAgICAgICBCaW5kKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSkoYSkoKSA9PSBhXG4vL1xuLy8gIEFsc28gcGFydGlhbGx5IGFwcGxpZXMgYXJndW1lbnRzOlxuLy9cbi8vICAgICAgIEJpbmQoYWRkKShudWxsLCAxMCkoMzIpID09IDQyXG4vL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmQodGhpczogYW55LCBmOiBhbnkpIHtcbiAgZnVuY3Rpb24gY3VycmllZEJpbmQobzogYW55KSB7XG4gICAgLyogSWYgbmF0aXZlIGJpbmQgZG9lc24ndCBleGlzdCwgdXNlIGEgcG9seWZpbGwuICovXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBjb25zdCBnID0gZi5iaW5kLmFwcGx5KGYsIFtvXS5jb25jYXQoYXJncykpO1xuXG4gICAgLypcbiAgICAgICAgICAgTGV0J3MgdHJ5IGFuZCBhc3NvY2lhdGUgYWxsIGN1cnJpZWQgZnVuY3Rpb25zIHdpdGggdGhlIHNhbWUgbmFtZSBhcyB0aGUgb3JpZ2luYXRvci5cbiAgICAgICAgICAgQ2FuJ3Qgb3ZlcnJpZGUgbGVuZ3RoIGJ1dCBjYW4gc2V0IF9sZW5ndGggZm9yIGN1cnJ5aW5nXG4gICAgICAgICovXG4gICAgZy5fbmFtZSA9IGZ1bmN0aW9uTmFtZShmKTtcbiAgICBnLl9sZW5ndGggPSBNYXRoLm1heChmdW5jdGlvbkxlbmd0aChmKSAtIGFyZ3MubGVuZ3RoLCAwKTtcblxuICAgIHJldHVybiBnO1xuICB9XG5cbiAgLyogTWFudWFsIGN1cnJ5aW5nIHNpbmNlIGBjdXJyeWAgcmVsaWVzIGluIGJpbmQuICovXG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDw9IDFcbiAgICA/IGN1cnJpZWRCaW5kXG4gICAgOiBjdXJyaWVkQmluZC5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkgYXMgYW55KTtcbn1cblxuLy9cbi8vICAjIyBjdXJyeShmKVxuLy9cbi8vICBUYWtlcyBhIG5vcm1hbCBmdW5jdGlvbiBgZmAgYW5kIGFsbG93cyBwYXJ0aWFsIGFwcGxpY2F0aW9uIG9mIGl0c1xuLy8gIE5hbWVkIGFyZ3VtZW50czpcbi8vXG4vLyAgICAgICBWYXIgYWRkID0gZmFudGFzeS5jdXJyeShmdW5jdGlvbihhLCBiKSB7XG4vLyAgICAgICAgICAgICAgUmV0dXJuIGEgKyBiO1xuLy8gICAgICAgICAgfSksXG4vLyAgICAgICAgICBBZGQxNSA9IGFkZCgxNSk7XG4vL1xuLy8gICAgICAgQWRkMTUoMjcpID09IDQyO1xuLy9cbi8vICBSZXRhaW5zIGFiaWxpdHkgb2YgY29tcGxldGUgYXBwbGljYXRpb24gYnkgY2FsbGluZyB0aGUgZnVuY3Rpb25cbi8vICBXaGVuIGVub3VnaCBhcmd1bWVudHMgYXJlIGZpbGxlZDpcbi8vXG4vLyAgICAgICBBZGQoMTUsIDI3KSA9PSA0Mjtcbi8vXG5leHBvcnQgZnVuY3Rpb24gY3VycnkoZjogYW55KSB7XG4gIGNvbnN0IGEgPSBmdW5jdGlvbiAodGhpczogYW55KSB7XG4gICAgY29uc3QgZyA9IGJpbmQoZikuYXBwbHkoZiwgW3RoaXNdLmNvbmNhdChbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcblxuICAgIHJldHVybiAhZnVuY3Rpb25MZW5ndGgoZykgPyBnKCkgOiBjdXJyeShnKTtcbiAgfTtcblxuICAvKlxuICAgICAgIExldCdzIHRyeSBhbmQgYXNzb2NpYXRlIGFsbCBjdXJyaWVkIGZ1bmN0aW9ucyB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgdGhlIG9yaWdpbmF0b3IuXG4gICAgICAgQ2FuJ3Qgb3ZlcnJpZGUgbGVuZ3RoIGJ1dCBjYW4gc2V0IF9sZW5ndGggZm9yIGN1cnJ5aW5nXG4gICAgKi9cbiAgYS5fbmFtZSA9IGZ1bmN0aW9uTmFtZShmKTtcbiAgYS5fbGVuZ3RoID0gZnVuY3Rpb25MZW5ndGgoZik7XG5cbiAgcmV0dXJuIGE7XG59XG5cbi8qXG4gICAgXCJhdXRob3JcIjogXCJTaW1vbiBSaWNoYXJkc29uIDxzdGlja3Vwa2lkQGdtYWlsLmNvbT4gKGh0dHBzOi8vZ2l0aHViLmNvbS9TaW1vblJpY2hhcmRzb24pXCIsXG4gICAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9TaW1vblJpY2hhcmRzb24vZmFudGFzeS1oZWxwZXJzXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gKi9cbiJdfQ==