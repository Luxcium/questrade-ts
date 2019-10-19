"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._logErrors = function (error, message) {
    if (message === void 0) { message = ''; }
    console.error('Error:', error.message, '\n', message);
    return error;
};
//# sourceMappingURL=_logErrors.js.map