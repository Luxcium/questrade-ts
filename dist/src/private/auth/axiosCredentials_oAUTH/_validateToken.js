"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = require("fs");
var path_1 = require("path");
var utils_1 = require("../../../utils");
var credentialsFactory_1 = require("../credentialsFactory");
exports._validateToken = function (options) {
    var credentials = credentialsFactory_1._buildCredentialsFromToken(options);
    var refreshToken = credentials.seedToken;
    try {
        if (credentials.keyFile) {
            utils_1.sync(path_1.dirname(credentials.keyFile));
        }
        else {
            utils_1.sync(credentials.keyDir);
        }
        credentials.keyFile =
            credentials.keyFile || credentials.keyDir + "/" + credentials.seedToken;
        refreshToken = fs_1.readFileSync(credentials.keyFile, 'utf8');
    }
    catch (_) {
        credentials.keyFile =
            credentials.keyFile || credentials.keyDir + "/" + credentials.seedToken;
        fs_1.access(credentials.keyFile, fs_1.constants.F_OK, function (none) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (none) {
                    fs_1.writeFileSync(credentials.keyFile, credentials.seedToken, {
                        encoding: 'utf8',
                    });
                }
                return [2 /*return*/];
            });
        }); });
    }
    return { refreshToken: refreshToken, credentials: credentials };
};
//# sourceMappingURL=_validateToken.js.map