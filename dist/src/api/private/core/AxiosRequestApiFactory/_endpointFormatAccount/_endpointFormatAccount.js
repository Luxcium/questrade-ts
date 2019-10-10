"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** PROVIDE: credentials and accountEndpoint string, THEN GET: a endpoint string */
exports._endpointFormatAccount = (credentials) => (accountEndpoint) => `/accounts/${credentials.accountNumber}${accountEndpoint}`;
//# sourceMappingURL=_endpointFormatAccount.js.map