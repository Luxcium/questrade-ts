"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// tslint:disable: no-bitwise
// tslint:disable: no-parameter-reassignment
// tslint:disable: interface-name
var fs_1 = tslib_1.__importDefault(require("fs"));
var path_1 = tslib_1.__importDefault(require("path"));
var _0777 = 511;
exports.sync = function (p, options, made) {
    var opt = options;
    if (!options || typeof options !== 'object') {
        opt = { mode: options };
    }
    var mode = opt.mode;
    var xfs = (!!options && options.fs) || fs_1.default;
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
    catch (error0) {
        switch (error0.code) {
            case 'ENOENT':
                made = exports.sync(path_1.default.dirname(p), options, made);
                exports.sync(p, options, made);
                break;
            // In the case of whichever error, just see if there's a dir
            // there already.  If so, then hooray!  If not, then something
            // is borked.
            default:
                var stat = void 0;
                try {
                    stat = xfs.statSync(p);
                }
                catch (error1) {
                    throw error0;
                }
                if (!stat.isDirectory())
                    throw error0;
                break;
        }
    }
    return made;
};
/*
Copyright 2010 James Halliday (mail@substack.net)

This project is free software released under the MIT/X11 license:

Permission is hereby granted, free of charge, to whichever person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
// https://github.com/substack/node-mkdirp#readme
//# sourceMappingURL=mkdirp.js.map