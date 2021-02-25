"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQtUrlPathFromArgs = void 0;
function getQtUrlPathFromArgs(argArray) {
    var _a, _b;
    let urlPath = '';
    try {
        urlPath = `/${`${argArray[0]}`.split('questrade.com/')[1]}`;
        if (`${(_a = argArray[0]) === null || _a === void 0 ? void 0 : _a.url}`) {
            urlPath = `/${`${(_b = argArray[0]) === null || _b === void 0 ? void 0 : _b.url}`.split('questrade.com/')[1]}`;
        }
    }
    catch (_c) {
        urlPath = '';
    }
    return urlPath;
}
exports.getQtUrlPathFromArgs = getQtUrlPathFromArgs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXF0LXVybC1wYXRoLWZyb20tYXJncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9nZXQtcXQtdXJsLXBhdGgtZnJvbS1hcmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLFNBQWdCLG9CQUFvQixDQUFDLFFBQWM7O0lBQ2pELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUVqQixJQUFJO1FBQ0YsT0FBTyxHQUFHLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzVELElBQUksR0FBRyxNQUFBLFFBQVEsQ0FBQyxDQUFDLENBQUMsMENBQUUsR0FBRyxFQUFFLEVBQUU7WUFDekIsT0FBTyxHQUFHLElBQUksR0FBRyxNQUFBLFFBQVEsQ0FBQyxDQUFDLENBQUMsMENBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUNsRTtLQUNGO0lBQUMsV0FBTTtRQUNOLE9BQU8sR0FBRyxFQUFFLENBQUM7S0FDZDtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFiRCxvREFhQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRRdFVybFBhdGhGcm9tQXJncyhhcmdBcnJheT86IGFueSkge1xuICBsZXQgdXJsUGF0aCA9ICcnO1xuXG4gIHRyeSB7XG4gICAgdXJsUGF0aCA9IGAvJHtgJHthcmdBcnJheVswXX1gLnNwbGl0KCdxdWVzdHJhZGUuY29tLycpWzFdfWA7XG4gICAgaWYgKGAke2FyZ0FycmF5WzBdPy51cmx9YCkge1xuICAgICAgdXJsUGF0aCA9IGAvJHtgJHthcmdBcnJheVswXT8udXJsfWAuc3BsaXQoJ3F1ZXN0cmFkZS5jb20vJylbMV19YDtcbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIHVybFBhdGggPSAnJztcbiAgfVxuXG4gIHJldHVybiB1cmxQYXRoO1xufVxuIl19