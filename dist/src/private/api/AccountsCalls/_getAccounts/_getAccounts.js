"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getAccounts = void 0;
const tslib_1 = require("tslib");
// +!! _getAccounts
/** _getAccounts */
function _getAccounts(getAccounts, errorlog = (error) => error /* logger */) {
    return () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const accounts = getAccounts('/accounts', { noCaching: true });
            const data = yield accounts();
            // -
            return data.accounts;
            // -
        }
        catch (error) {
            // -
            void errorlog(`calling '/accounts' endpoint ${error.message}`);
            return [];
        }
    });
}
exports._getAccounts = _getAccounts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2dldEFjY291bnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3ByaXZhdGUvYXBpL0FjY291bnRzQ2FsbHMvX2dldEFjY291bnRzL19nZXRBY2NvdW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQixTQUFnQixZQUFZLENBQzFCLFdBR3FCLEVBQ3JCLFdBQW1CLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWTtJQUVyRCxPQUFPLEdBQThCLEVBQUU7UUFDckMsSUFBSTtZQUNGLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBWSxXQUFXLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUMxRSxNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsRUFBRSxDQUFDO1lBRTlCLElBQUk7WUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDckIsSUFBSTtTQUNMO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJO1lBQ0osS0FBSyxRQUFRLENBQUMsZ0NBQWdDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBRS9ELE9BQU8sRUFBRSxDQUFDO1NBQ1g7SUFDSCxDQUFDLENBQUEsQ0FBQztBQUNKLENBQUM7QUF0QkQsb0NBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQcm94eUhhbmRsZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vLi4vcmVzb3VyY2VzL3NpZGUtZWZmZWN0cy90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IElBY2NvdW50LCBJQWNjb3VudHMsIExvZ2dlciB9IGZyb20gJy4uLy4uLy4uLy4uL3R5cGVzY3JpcHQnO1xuXG4vLyArISEgX2dldEFjY291bnRzXG4vKiogX2dldEFjY291bnRzICovXG5leHBvcnQgZnVuY3Rpb24gX2dldEFjY291bnRzKFxuICBnZXRBY2NvdW50czogPFI+KFxuICAgIGVuZHBvaW50OiBzdHJpbmcsXG4gICAgaGFuZGxlck9wdGlvbnM6IFByb3h5SGFuZGxlck9wdGlvbnMsXG4gICkgPT4gKCkgPT4gUHJvbWlzZTxSPixcbiAgZXJyb3Jsb2c6IExvZ2dlciA9IChlcnJvcjogYW55KSA9PiBlcnJvciAvKiBsb2dnZXIgKi8sXG4pIHtcbiAgcmV0dXJuIGFzeW5jICgpOiBQcm9taXNlPElBY2NvdW50W10+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBnZXRBY2NvdW50czxJQWNjb3VudHM+KCcvYWNjb3VudHMnLCB7IG5vQ2FjaGluZzogdHJ1ZSB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhY2NvdW50cygpO1xuXG4gICAgICAvLyAtXG4gICAgICByZXR1cm4gZGF0YS5hY2NvdW50cztcbiAgICAgIC8vIC1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gLVxuICAgICAgdm9pZCBlcnJvcmxvZyhgY2FsbGluZyAnL2FjY291bnRzJyBlbmRwb2ludCAke2Vycm9yLm1lc3NhZ2V9YCk7XG5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH07XG59XG4iXX0=