"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.writeToken = (credentials, response) => {
    const { data: refreshCreds } = response;
    credentials.accessToken = refreshCreds.access_token;
    credentials.apiServer = refreshCreds.api_server;
    credentials.expiresIn = refreshCreds.expires_in;
    credentials.refreshToken = refreshCreds.refresh_token;
    credentials.tokenType = refreshCreds.token_type;
    credentials.apiUrl = `${credentials.apiServer}${credentials.apiVersion}`;
    fs_1.writeFileSync(credentials.keyFile, credentials.refreshToken, 'utf8');
    return credentials;
};
//# sourceMappingURL=writeToken.js.map