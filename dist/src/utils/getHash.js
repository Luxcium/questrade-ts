"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var crypto_1 = tslib_1.__importDefault(require("crypto"));
exports.getHash = function (data, hashAlgo, shortSlice) {
    if (hashAlgo === void 0) { hashAlgo = 'sha1'; }
    if (shortSlice === void 0) { shortSlice = 6; }
    var hAlgo = crypto_1.default.createHash(hashAlgo);
    hAlgo.write(data);
    var longer = hAlgo.digest('hex').toString();
    var shorter = longer.slice(0, shortSlice);
    var hashObject = { shorter: shorter, longer: longer };
    var returnValue = [shorter, longer, hashObject];
    return returnValue;
};
//# sourceMappingURL=getHash.js.map