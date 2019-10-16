"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logErrors(error, message) {
    if (message === void 0) { message = ''; }
    console.error('Error:', error.message, '\n', message);
    return error;
}
exports.logErrors = logErrors;
//# sourceMappingURL=logErrors.js.map