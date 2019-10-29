"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _urlSeprator = function () { return '/'; };
var _baseAcctUrlString = function () { return 'accounts'; };
var _credAcctNmbrProperty = function (C) { return C.accountNumber; };
var _endPtAccountBaseURL = function (getCredAcctProperty) { return function (urlSeparator) { return function (accountString) { return function (creds) { return function (accountEndpoint) {
    return "" + urlSeparator() + accountString() + urlSeparator() + getCredAcctProperty(creds) + accountEndpoint;
}; }; }; }; };
/** PROVIDE: credentials and accountEndpoint string, THEN GET: a endpoint string */
exports._endpointFormatAccount = _endPtAccountBaseURL(_credAcctNmbrProperty)(_urlSeprator)(_baseAcctUrlString);
// const separator = _urlSeprator('/');
// const accountBaseUrl = ;
// const credAcctNmbrProp = (credentials: Credentials) =>
//   _credAcctNmbrProp(credentials);
// const _endpointFormatAccountBase = (base: string = baseAccountUrl()) => (
//   credentials: Credentials
// ) => (accountEndpoint: string): string =>
//   `${base}${credentials.accountNumber}${accountEndpoint}`;
//# sourceMappingURL=_endpointFormatAccount.js.map