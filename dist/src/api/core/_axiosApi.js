"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var axios_1 = tslib_1.__importDefault(require("axios"));
var http_status_codes_1 = tslib_1.__importDefault(require("http-status-codes"));
var _axiosApi = function (credentials) { return function (VERB) {
    if (VERB === void 0) { VERB = 'GET'; }
    return function (postData) {
        if (postData === void 0) { postData = null; }
        return function (endpoint) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var data, response, config, e_1, apiError_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        response = void 0;
                        config = {
                            url: credentials.apiUrl + endpoint,
                            method: VERB.toLowerCase(),
                            headers: {
                                Authorization: "Bearer " + credentials.accessToken,
                                location: credentials.accountNumber,
                            },
                            data: postData,
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, axios_1.default(config)];
                    case 2:
                        response = _a.sent();
                        return [3, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1.message);
                        throw new Error(e_1.message);
                    case 4:
                        if (!response.data) {
                            console.error('response data null or undefined');
                            throw new Error();
                        }
                        data = response.data;
                        return [3, 6];
                    case 5:
                        apiError_1 = _a.sent();
                        throw _apiGetErrorLogin(apiError_1);
                    case 6: return [2, data];
                }
            });
        }); };
    };
}; };
var _apiGetErrorLogin = function (apiError) {
    console.error('\nAPI error in call to api:\n', "\n" + apiError.message);
    console.error('\nAPI error in the response from the api:', "\n" + http_status_codes_1.default
        .getStatusText(Number.parseInt(apiError.message.slice(-3), 10))
        .toUpperCase());
    return apiError;
};
exports._axiosGetApi = function (credentials) { return function (endpoint) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, _axiosApi(credentials)()()(endpoint)];
}); }); }; }; };
exports._axiosAccountGetApi = function (credentials) { return function (accountEndpoint) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        return [2, exports._axiosGetApi(credentials)(endpointFormatAccount(credentials)(accountEndpoint))()];
    });
}); }; }; };
exports._axiosApiPost = function (credentials) { return function (postData) { return _axiosApi(credentials)('POST')(postData); }; };
var endpointFormatAccount = function (credentials) { return function (accountEndpoint) { return "/accounts/" + credentials.accountNumber + accountEndpoint; }; };
exports._axiosApiGetEndpointFactory = function (endpoint) { return function (credentials) { return exports._axiosGetApi(credentials)(endpoint); }; };
exports._axiosApiPostEndpointFactory = function (endpoint) { return function (postData) { return function (credentials) {
    return exports._axiosApiPost(credentials)(postData)(endpoint);
}; }; };
exports._delayedCrednetialsFunction = function (credentials) { return function (functionX) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, functionX(credentials)];
}); }); }; }; };
exports._delayedFunctionCredentials = function (functionX) { return function (credentials) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, functionX(credentials)];
}); }); }; }; };
exports._axiosApiGetEndpointFactoryD = function (endpoint) { return function (credentials) {
    return exports._delayedFunctionCredentials(exports._axiosApiGetEndpointFactory(endpoint)(credentials))(credentials);
}; };
exports._axiosApiPostEndpointFactoryD = function (endpoint) { return function (postData) { return function (credentials) {
    return exports._delayedFunctionCredentials(exports._axiosApiPostEndpointFactory(endpoint)(postData))(credentials);
}; }; };
//# sourceMappingURL=_axiosApi.js.map