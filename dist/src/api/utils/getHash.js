"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const crypto_1 = tslib_1.__importDefault(require("crypto"));
exports.getHash = (data, hashAlgo = 'sha1', shortSlice = 6) => {
    const hAlgo = crypto_1.default.createHash(hashAlgo);
    hAlgo.write(data);
    const longer = hAlgo.digest('hex').toString();
    const shorter = longer.slice(0, shortSlice);
    const hashObj = { shorter, longer };
    const returnValue = [shorter, longer, hashObj];
    return returnValue;
};
//# sourceMappingURL=getHash.js.map