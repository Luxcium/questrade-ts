"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._rateLimiter = void 0;
const tslib_1 = require("tslib");
const requestPerSecondLimit_1 = require("../requestPerSecondLimit");
function _rateLimiter(httpClient, _config, credentials) {
    var _a, _b;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // iNFO: RATE LIMITER Block Start ********************************************
        const possiblePerSeconds = (_b = (_a = credentials === null || credentials === void 0 ? void 0 : credentials.remainingRequests) === null || _a === void 0 ? void 0 : _a.possiblePerSeconds) !== null && _b !== void 0 ? _b : 21;
        return possiblePerSeconds <= 20 && possiblePerSeconds > 0
            ? requestPerSecondLimit_1.limitingRequest(() => tslib_1.__awaiter(this, void 0, void 0, function* () { return httpClient(_config); }), possiblePerSeconds)
            : httpClient(_config);
    });
}
exports._rateLimiter = _rateLimiter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2xkX3JhdGVMaW1pdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3ByaXZhdGUvY29yZS9lbmQtcG9pbnQtY29ubmVjdG9yL29sZF9yYXRlTGltaXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBTUEsb0VBQTJEO0FBRTNELFNBQWUsWUFBWSxDQUN6QixVQUF3QixFQUN4QixPQUE0QixFQUM1QixXQUF5Qjs7O1FBRXpCLDhFQUE4RTtRQUU5RSxNQUFNLGtCQUFrQixlQUN0QixXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsaUJBQWlCLDBDQUFFLGtCQUFrQixtQ0FBSSxFQUFFLENBQUM7UUFFM0QsT0FBTyxrQkFBa0IsSUFBSSxFQUFFLElBQUksa0JBQWtCLEdBQUcsQ0FBQztZQUN2RCxDQUFDLENBQUMsdUNBQWUsQ0FDYixHQUFxQyxFQUFFLHdEQUFDLE9BQUEsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBLEdBQUEsRUFDM0Qsa0JBQWtCLENBQ25CO1lBQ0gsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Q0FDekI7QUFFUSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtcbiAgQ2xpZW50UmVxdWVzdENvbmZpZyxcbiAgQ2xpZW50UmVzcG9uc2UsXG4gIENsaWVudFN0YXRpYyxcbn0gZnJvbSAnLi4vLi4vLi4vcmVzb3VyY2VzL3NpZGUtZWZmZWN0cy90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IENyZWRlbnRpYWxzIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBsaW1pdGluZ1JlcXVlc3QgfSBmcm9tICcuLi9yZXF1ZXN0UGVyU2Vjb25kTGltaXQnO1xuXG5hc3luYyBmdW5jdGlvbiBfcmF0ZUxpbWl0ZXI8Uj4oXG4gIGh0dHBDbGllbnQ6IENsaWVudFN0YXRpYyxcbiAgX2NvbmZpZzogQ2xpZW50UmVxdWVzdENvbmZpZyxcbiAgY3JlZGVudGlhbHM/OiBDcmVkZW50aWFscyxcbikge1xuICAvLyBpTkZPOiBSQVRFIExJTUlURVIgQmxvY2sgU3RhcnQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICBjb25zdCBwb3NzaWJsZVBlclNlY29uZHMgPVxuICAgIGNyZWRlbnRpYWxzPy5yZW1haW5pbmdSZXF1ZXN0cz8ucG9zc2libGVQZXJTZWNvbmRzID8/IDIxO1xuXG4gIHJldHVybiBwb3NzaWJsZVBlclNlY29uZHMgPD0gMjAgJiYgcG9zc2libGVQZXJTZWNvbmRzID4gMFxuICAgID8gbGltaXRpbmdSZXF1ZXN0KFxuICAgICAgICBhc3luYyAoKTogUHJvbWlzZTxDbGllbnRSZXNwb25zZTxSPj4gPT4gaHR0cENsaWVudChfY29uZmlnKSxcbiAgICAgICAgcG9zc2libGVQZXJTZWNvbmRzLFxuICAgICAgKVxuICAgIDogaHR0cENsaWVudChfY29uZmlnKTtcbn1cblxuZXhwb3J0IHsgX3JhdGVMaW1pdGVyIH07XG4iXX0=