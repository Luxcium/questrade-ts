"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = (apiError, message = '') => {
    console.error('Error:', apiError.message, '\n', message);
    return apiError;
};
//# sourceMappingURL=logError.js.map