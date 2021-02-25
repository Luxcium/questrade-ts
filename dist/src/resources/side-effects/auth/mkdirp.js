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
    const _0777 = 0o0777;
    if (!mode) {
        // hACK:  mode = _0777 & ~process.umask();
        // hACK:  mode = /* _0777 & ~ */ process.umask(_0777);
        mode = /* _0777 & ~ */ process.umask(_0777);
    }
    if (!made) {
        made = null;
    }
    p = path_1.default.resolve(p);
    try {
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        xfs.mkdirSync(p, mode);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWtkaXJwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3Jlc291cmNlcy9zaWRlLWVmZmVjdHMvYXV0aC9ta2RpcnAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNDQUFzQztBQUN0QyxvREFBb0I7QUFDcEIsd0RBQXdCO0FBY3hCLFNBQWdCLElBQUksQ0FBQyxDQUFTLEVBQUUsSUFBeUIsRUFBRSxJQUFXO0lBQ3BFLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQ3JDLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztLQUN2QjtJQUVELElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDcEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsSUFBSSxZQUFFLENBQUM7SUFDMUIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDO0lBRXJCLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCwwQ0FBMEM7UUFDMUMsc0RBQXNEO1FBQ3RELElBQUksR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM3QztJQUVELElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ2I7SUFFRCxDQUFDLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVwQixJQUFJO1FBQ0YsbUVBQW1FO1FBQ25FLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO0tBQ2xCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzNCLElBQUksR0FBRyxJQUFJLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDO1lBRVQsSUFBSTtnQkFDRixtRUFBbUU7Z0JBQ25FLElBQUksR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hCO1lBQUMsV0FBTTtnQkFDTixNQUFNLEtBQUssQ0FBQzthQUNiO1lBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDdkIsTUFBTSxLQUFLLENBQUM7YUFDYjtTQUNGO0tBQ0Y7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUE5Q0Qsb0JBOENDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFzQkU7QUFDRixpREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgdHlwZSBNYWRlID0gc3RyaW5nIHwgbnVsbDtcbmV4cG9ydCB0eXBlIE1vZGUgPSBudW1iZXIgfCBzdHJpbmcgfCBudWxsO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZzSW1wbGVtZW50YXRpb25TeW5jIHtcbiAgbWtkaXJTeW5jOiB0eXBlb2YgZnMubWtkaXJTeW5jO1xuICBzdGF0U3luYzogdHlwZW9mIGZzLnN0YXRTeW5jO1xufVxuZXhwb3J0IGludGVyZmFjZSBPcHRpb25zU3luYyB7XG4gIG1vZGU/OiBNb2RlO1xuICBmcz86IEZzSW1wbGVtZW50YXRpb25TeW5jO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3luYyhwOiBzdHJpbmcsIG9wdHM/OiBNb2RlIHwgT3B0aW9uc1N5bmMsIG1hZGU/OiBNYWRlKTogTWFkZSB7XG4gIGlmICghb3B0cyB8fCB0eXBlb2Ygb3B0cyAhPT0gJ29iamVjdCcpIHtcbiAgICBvcHRzID0geyBtb2RlOiBvcHRzIH07XG4gIH1cblxuICBsZXQgeyBtb2RlIH0gPSBvcHRzO1xuICBjb25zdCB4ZnMgPSBvcHRzLmZzIHx8IGZzO1xuICBjb25zdCBfMDc3NyA9IDBvMDc3NztcblxuICBpZiAoIW1vZGUpIHtcbiAgICAvLyBoQUNLOiAgbW9kZSA9IF8wNzc3ICYgfnByb2Nlc3MudW1hc2soKTtcbiAgICAvLyBoQUNLOiAgbW9kZSA9IC8qIF8wNzc3ICYgfiAqLyBwcm9jZXNzLnVtYXNrKF8wNzc3KTtcbiAgICBtb2RlID0gLyogXzA3NzcgJiB+ICovIHByb2Nlc3MudW1hc2soXzA3NzcpO1xuICB9XG5cbiAgaWYgKCFtYWRlKSB7XG4gICAgbWFkZSA9IG51bGw7XG4gIH1cblxuICBwID0gcGF0aC5yZXNvbHZlKHApO1xuXG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHNlY3VyaXR5L2RldGVjdC1ub24tbGl0ZXJhbC1mcy1maWxlbmFtZVxuICAgIHhmcy5ta2RpclN5bmMocCwgbW9kZSk7XG4gICAgbWFkZSA9IG1hZGUgfHwgcDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJ0VOT0VOVCcpIHtcbiAgICAgIG1hZGUgPSBzeW5jKHBhdGguZGlybmFtZShwKSwgb3B0cywgbWFkZSk7XG4gICAgICBzeW5jKHAsIG9wdHMsIG1hZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc3RhdDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHNlY3VyaXR5L2RldGVjdC1ub24tbGl0ZXJhbC1mcy1maWxlbmFtZVxuICAgICAgICBzdGF0ID0geGZzLnN0YXRTeW5jKHApO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXN0YXQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWFkZTtcbn1cblxuLypcbmNvcHlyaWdodCAyMDEwIEphbWVzIEhhbGxpZGF5IChtYWlsQHN1YnN0YWNrLm5ldClcblxuVGhpcyBwcm9qZWN0IGlzIGZyZWUgc29mdHdhcmUgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVC9YMTEgbGljZW5zZTpcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIHdoaWNoZXZlciBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuKi9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zdWJzdGFjay9ub2RlLW1rZGlycCNyZWFkbWVcbiJdfQ==