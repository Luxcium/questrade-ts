"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const _0777 = parseInt('0777', 8);
exports.sync = (p, opts, made) => {
    if (!opts || typeof opts !== 'object') {
        opts = { mode: opts };
    }
    let mode = opts.mode;
    const xfs = opts.fs || fs_1.default;
    if (!mode) {
        mode = _0777 & ~process.umask();
    }
    if (!made)
        made = null;
    p = path_1.default.resolve(p);
    try {
        xfs.mkdirSync(p, mode);
        made = made || p;
    }
    catch (err0) {
        switch (err0.code) {
            case 'ENOENT':
                made = exports.sync(path_1.default.dirname(p), opts, made);
                exports.sync(p, opts, made);
                break;
            default:
                let stat;
                try {
                    stat = xfs.statSync(p);
                }
                catch (err1) {
                    throw err0;
                }
                if (!stat.isDirectory())
                    throw err0;
                break;
        }
    }
    return made;
};
//# sourceMappingURL=mkdirp.js.map