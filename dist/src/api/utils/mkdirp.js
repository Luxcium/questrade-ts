"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = tslib_1.__importDefault(require("fs"));
var path_1 = tslib_1.__importDefault(require("path"));
var _0777 = parseInt('0777', 8);
exports.sync = function (p, opts, made) {
    if (!opts || typeof opts !== 'object') {
        opts = { mode: opts };
    }
    var mode = opts.mode;
    var xfs = opts.fs || fs_1.default;
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
                var stat = void 0;
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