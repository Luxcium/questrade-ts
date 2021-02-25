"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sync = void 0;
const tslib_1 = require("tslib");
/* eslint-disable no-param-reassign */
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
function sync(p, opts, made) {
    if (!opts || typeof opts !== 'object') {
        opts = { mode: opts };
    }
    let { mode } = opts;
    const xfs = opts.fs || fs_1.default;
    // const _0777 = 0o0777;
    if (!mode) {
        // hACK:  mode = _0777 & ~process.umask();
        // hACK:  mode = /* _0777 & ~ */ process.umask(_0777);
        mode = /* _0777 & ~ */ process.umask(0o0777);
    }
    if (!made) {
        made = null;
    }
    p = path_1.default.resolve(p);
    try {
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        xfs.mkdirSync(p, { mode });
        made = made || p;
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            made = sync(path_1.default.dirname(p), opts, made);
            sync(p, opts, made);
        }
        else {
            let stat;
            try {
                // eslint-disable-next-line security/detect-non-literal-fs-filename
                stat = xfs.statSync(p);
            }
            catch (_a) {
                throw error;
            }
            if (!stat.isDirectory()) {
                throw error;
            }
        }
    }
    return made;
}
exports.sync = sync;
/*
copyright 2010 James Halliday (mail@substack.net)

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWtkaXJwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3Jlc291cmNlcy9zaWRlLWVmZmVjdHMvYXV0aC9ta2RpcnAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNDQUFzQztBQUN0QyxvREFBb0I7QUFDcEIsd0RBQXdCO0FBY3hCLFNBQWdCLElBQUksQ0FBQyxDQUFTLEVBQUUsSUFBeUIsRUFBRSxJQUFXO0lBQ3BFLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQ3JDLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztLQUN2QjtJQUVELElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDcEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsSUFBSSxZQUFFLENBQUM7SUFDMUIsd0JBQXdCO0lBRXhCLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCwwQ0FBMEM7UUFDMUMsc0RBQXNEO1FBQ3RELElBQUksR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM5QztJQUVELElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ2I7SUFFRCxDQUFDLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixJQUFJO1FBQ0YsbUVBQW1FO1FBQ25FLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMzQixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztLQUNsQjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUMzQixJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3JCO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQztZQUVULElBQUk7Z0JBQ0YsbUVBQW1FO2dCQUNuRSxJQUFJLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QjtZQUFDLFdBQU07Z0JBQ04sTUFBTSxLQUFLLENBQUM7YUFDYjtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQ3ZCLE1BQU0sS0FBSyxDQUFDO2FBQ2I7U0FDRjtLQUNGO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBN0NELG9CQTZDQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBc0JFO0FBQ0YsaURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IHR5cGUgTWFkZSA9IHN0cmluZyB8IG51bGw7XG5leHBvcnQgdHlwZSBNb2RlID0gbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcblxuZXhwb3J0IGludGVyZmFjZSBGc0ltcGxlbWVudGF0aW9uU3luYyB7XG4gIG1rZGlyU3luYzogdHlwZW9mIGZzLm1rZGlyU3luYztcbiAgc3RhdFN5bmM6IHR5cGVvZiBmcy5zdGF0U3luYztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uc1N5bmMge1xuICBtb2RlPzogTW9kZTtcbiAgZnM/OiBGc0ltcGxlbWVudGF0aW9uU3luYztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN5bmMocDogc3RyaW5nLCBvcHRzPzogTW9kZSB8IE9wdGlvbnNTeW5jLCBtYWRlPzogTWFkZSk6IE1hZGUge1xuICBpZiAoIW9wdHMgfHwgdHlwZW9mIG9wdHMgIT09ICdvYmplY3QnKSB7XG4gICAgb3B0cyA9IHsgbW9kZTogb3B0cyB9O1xuICB9XG5cbiAgbGV0IHsgbW9kZSB9ID0gb3B0cztcbiAgY29uc3QgeGZzID0gb3B0cy5mcyB8fCBmcztcbiAgLy8gY29uc3QgXzA3NzcgPSAwbzA3Nzc7XG5cbiAgaWYgKCFtb2RlKSB7XG4gICAgLy8gaEFDSzogIG1vZGUgPSBfMDc3NyAmIH5wcm9jZXNzLnVtYXNrKCk7XG4gICAgLy8gaEFDSzogIG1vZGUgPSAvKiBfMDc3NyAmIH4gKi8gcHJvY2Vzcy51bWFzayhfMDc3Nyk7XG4gICAgbW9kZSA9IC8qIF8wNzc3ICYgfiAqLyBwcm9jZXNzLnVtYXNrKDBvMDc3Nyk7XG4gIH1cblxuICBpZiAoIW1hZGUpIHtcbiAgICBtYWRlID0gbnVsbDtcbiAgfVxuXG4gIHAgPSBwYXRoLnJlc29sdmUocCk7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHNlY3VyaXR5L2RldGVjdC1ub24tbGl0ZXJhbC1mcy1maWxlbmFtZVxuICAgIHhmcy5ta2RpclN5bmMocCwgeyBtb2RlIH0pO1xuICAgIG1hZGUgPSBtYWRlIHx8IHA7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICdFTk9FTlQnKSB7XG4gICAgICBtYWRlID0gc3luYyhwYXRoLmRpcm5hbWUocCksIG9wdHMsIG1hZGUpO1xuICAgICAgc3luYyhwLCBvcHRzLCBtYWRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHN0YXQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzZWN1cml0eS9kZXRlY3Qtbm9uLWxpdGVyYWwtZnMtZmlsZW5hbWVcbiAgICAgICAgc3RhdCA9IHhmcy5zdGF0U3luYyhwKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzdGF0LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1hZGU7XG59XG5cbi8qXG5jb3B5cmlnaHQgMjAxMCBKYW1lcyBIYWxsaWRheSAobWFpbEBzdWJzdGFjay5uZXQpXG5cblRoaXMgcHJvamVjdCBpcyBmcmVlIHNvZnR3YXJlIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQvWDExIGxpY2Vuc2U6XG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byB3aGljaGV2ZXIgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cbiovXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc3Vic3RhY2svbm9kZS1ta2RpcnAjcmVhZG1lXG4iXX0=