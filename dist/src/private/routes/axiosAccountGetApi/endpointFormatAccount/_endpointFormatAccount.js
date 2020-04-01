"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _urlSeprator = function () { return '/'; };
var _baseAcctUrlStr = function () { return 'accounts'; };
var _credAcctNmbrProp = function (C) { return C.accountNumber; };
var _endPtAccountBaseURL = function (getCredAcctProp) { return function (urlSep) { return function (accountStr) { return function (creds) { return function (accountEndpoint) {
    return "" + urlSep() + accountStr() + urlSep() + getCredAcctProp(creds) + accountEndpoint;
}; }; }; }; };
/** PROVIDE: credentials and accountEndpoint string, THEN GET: a endpoint string */
exports._endpointFormatAccount = _endPtAccountBaseURL(_credAcctNmbrProp)(_urlSeprator)(_baseAcctUrlStr);
// const separator = _urlSeprator('/');
// const accountBaseUrl = ;
// const credAcctNmbrProp = (credentials: Credentials) =>
//   _credAcctNmbrProp(credentials);
// const _endpointFormatAccountBase = (base: string = baseAccountUrl()) => (
//   credentials: Credentials
// ) => (accountEndpoint: string): string =>
//   `${base}${credentials.accountNumber}${accountEndpoint}`;
//# sourceMappingURL=_endpointFormatAccount.js.map