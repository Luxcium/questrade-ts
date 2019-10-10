"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const http_status_codes_1 = tslib_1.__importDefault(require("http-status-codes"));
const errorHandlers_1 = require("../errorHandlers");
exports.logHttpError = (apiError) => {
    return errorHandlers_1.logError(apiError, `\nHTTP error in the response from the api:
    ${http_status_codes_1.default
        .getStatusText(Number.parseInt(apiError.message.slice(-3), 10))
        .toUpperCase()}`);
};
//# sourceMappingURL=logHttpError.js.map