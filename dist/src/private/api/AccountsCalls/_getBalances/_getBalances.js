"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getBalances = void 0;
const tslib_1 = require("tslib");
// + _getBalances
/** _getBalances */
const _getBalances = (clientAccountGetApi, errorlog = (...error) => error) => () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield clientAccountGetApi('/balances')();
    }
    catch (error) {
        void errorlog(error);
        return {
            combinedBalances: [],
            perCurrencyBalances: [],
            sodCombinedBalances: [],
            sodPerCurrencyBalances: [],
        };
    }
});
exports._getBalances = _getBalances;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2dldEJhbGFuY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3ByaXZhdGUvYXBpL0FjY291bnRzQ2FsbHMvX2dldEJhbGFuY2VzL19nZXRCYWxhbmNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNaLE1BQU0sWUFBWSxHQUFHLENBQzFCLG1CQUFxRSxFQUNyRSxXQUFtQixDQUFDLEdBQUcsS0FBWSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQzdDLEVBQUUsQ0FBQyxHQUE2QixFQUFFO0lBQ2xDLElBQUk7UUFDRixPQUFPLE1BQU0sbUJBQW1CLENBQVksV0FBVyxDQUFDLEVBQUUsQ0FBQztLQUM1RDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsS0FBSyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckIsT0FBTztZQUNMLGdCQUFnQixFQUFFLEVBQUU7WUFDcEIsbUJBQW1CLEVBQUUsRUFBRTtZQUN2QixtQkFBbUIsRUFBRSxFQUFFO1lBQ3ZCLHNCQUFzQixFQUFFLEVBQUU7U0FDM0IsQ0FBQztLQUNIO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFoQlcsUUFBQSxZQUFZLGdCQWdCdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IElCYWxhbmNlcywgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdHlwZXNjcmlwdCc7XG5cbi8vICsgX2dldEJhbGFuY2VzXG4vKiogX2dldEJhbGFuY2VzICovXG5leHBvcnQgY29uc3QgX2dldEJhbGFuY2VzID0gKFxuICBjbGllbnRBY2NvdW50R2V0QXBpOiA8Uj4oYWNjb3VudEVuZHBvaW50OiBzdHJpbmcpID0+ICgpID0+IFByb21pc2U8Uj4sXG4gIGVycm9ybG9nOiBMb2dnZXIgPSAoLi4uZXJyb3I6IGFueVtdKSA9PiBlcnJvcixcbikgPT4gYXN5bmMgKCk6IFByb21pc2U8SUJhbGFuY2VzPiA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudEFjY291bnRHZXRBcGk8SUJhbGFuY2VzPignL2JhbGFuY2VzJykoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB2b2lkIGVycm9ybG9nKGVycm9yKTtcblxuICAgIHJldHVybiB7XG4gICAgICBjb21iaW5lZEJhbGFuY2VzOiBbXSxcbiAgICAgIHBlckN1cnJlbmN5QmFsYW5jZXM6IFtdLFxuICAgICAgc29kQ29tYmluZWRCYWxhbmNlczogW10sXG4gICAgICBzb2RQZXJDdXJyZW5jeUJhbGFuY2VzOiBbXSxcbiAgICB9O1xuICB9XG59O1xuIl19