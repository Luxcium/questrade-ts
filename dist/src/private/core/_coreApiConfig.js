"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Partial application of Core api config builder generating an
 * object of strings value in the format of CoreApiConfig<D> to
 * be sent to axios as main parameter.
 */
exports._coreApiConfig = function (credentials) {
    //
    return function (VERB) {
        //
        return function (endpoint) {
            //
            return function (postData) {
                /**
                 * Build endpoint url with apiUrl as base.
                 */
                var url = credentials.apiUrl + endpoint;
                /**
                 * Set methodh to 'get' or 'post' in the
                 * request config/ header.
                 */
                var method = VERB.toLowerCase();
                /** oAuth2 token informations added to request header. */
                var Authorization = "Bearer " + credentials.accessToken;
                /**
                 * Adding account number information
                 * can occur in the 'location' header only.
                 */
                var location = credentials.accountNumber;
                /** Adittional information for POST requests. */
                var data = postData;
                /** Header builder. */
                var headers = {
                    Authorization: Authorization,
                    location: location,
                };
                /** Config builder. */
                var config = {
                    url: url,
                    method: method,
                    headers: headers,
                    data: data,
                };
                return config;
            };
        };
    };
};
//# sourceMappingURL=_coreApiConfig.js.map