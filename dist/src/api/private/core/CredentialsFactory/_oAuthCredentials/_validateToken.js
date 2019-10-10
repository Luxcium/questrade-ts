"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const utils_1 = require("../../../../utils");
const _buildCredentialsFromToken_1 = require("../_credentialsFactory/_buildCredentialsFromToken");
exports._validateToken = (options) => {
    const credentials = _buildCredentialsFromToken_1._buildCredentialsFromToken(options);
    let refreshToken = credentials.seedToken || '';
    try {
        if (!!credentials.keyFile) {
            utils_1.sync(path_1.dirname(credentials.keyFile));
        }
        else {
            utils_1.sync(credentials.keyDir);
        }
        credentials.keyFile =
            credentials.keyFile || `${credentials.keyDir}/${credentials.seedToken}`;
        refreshToken = fs_1.readFileSync(credentials.keyFile, 'utf8');
    }
    catch (_) {
        credentials.keyFile =
            credentials.keyFile || `${credentials.keyDir}/${credentials.seedToken}`;
        fs_1.access(credentials.keyFile, fs_1.constants.F_OK, async (none) => {
            if (none) {
                fs_1.writeFileSync(credentials.keyFile, credentials.seedToken, {
                    encoding: 'utf8',
                });
            }
        });
    }
    return { refreshToken, credentials };
};
//# sourceMappingURL=_validateToken.js.map