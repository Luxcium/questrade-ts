"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preValidateToken = void 0;
function preValidateToken(apiOptions) {
    return typeof apiOptions.token === 'function'
        ? apiOptions.token()
        : typeof apiOptions.token === 'string'
            ? apiOptions.token
            : 'ERROR';
}
exports.preValidateToken = preValidateToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXRva2VuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2dldC10b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxTQUFnQixnQkFBZ0IsQ0FBQyxVQUFzQjtJQUNyRCxPQUFPLE9BQU8sVUFBVSxDQUFDLEtBQUssS0FBSyxVQUFVO1FBQzNDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFO1FBQ3BCLENBQUMsQ0FBQyxPQUFPLFVBQVUsQ0FBQyxLQUFLLEtBQUssUUFBUTtZQUN0QyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUs7WUFDbEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNkLENBQUM7QUFORCw0Q0FNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBpT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzY3JpcHQnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlVmFsaWRhdGVUb2tlbihhcGlPcHRpb25zOiBBcGlPcHRpb25zKTogc3RyaW5nIHtcbiAgcmV0dXJuIHR5cGVvZiBhcGlPcHRpb25zLnRva2VuID09PSAnZnVuY3Rpb24nXG4gICAgPyBhcGlPcHRpb25zLnRva2VuKClcbiAgICA6IHR5cGVvZiBhcGlPcHRpb25zLnRva2VuID09PSAnc3RyaW5nJ1xuICAgID8gYXBpT3B0aW9ucy50b2tlblxuICAgIDogJ0VSUk9SJztcbn1cbiJdfQ==