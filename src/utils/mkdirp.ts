// tslint:disable: no-bitwise
// tslint:disable: no-parameter-reassignment
// tslint:disable: interface-name
import fs from 'fs';
import path from 'path';

export type Made = string | null;
export type Mode = number | string | null;
export interface FsImplementationSync {
  mkdirSync: typeof fs.mkdirSync;
  statSync: typeof fs.statSync;
}
export interface OptionsSync {
  mode?: Mode;
  fs?: FsImplementationSync;
}

const _0777 = 0o0777;

export const sync = (p: string, options?: OptionsSync, made?: Made): Made => {
  let opt: any = options;
  if (!options || typeof options !== 'object') {
    opt = { mode: options };
  }

  let { mode } = opt;
  const xfs = (!!options && options.fs) || fs;

  if (!mode) {
    mode = _0777 & ~process.umask();
  }
  if (!made) made = null;

  p = path.resolve(p);

  try {
    xfs.mkdirSync(p, mode);
    made = made || p;
  } catch (error0) {
    switch (error0.code) {
      case 'ENOENT':
        made = sync(path.dirname(p), options, made);
        sync(p, options, made);
        break;

      // In the case of whichever error, just see if there's a dir
      // there already.  If so, then hooray!  If not, then something
      // is borked.
      default:
        let stat;
        try {
          stat = xfs.statSync(p);
        } catch (error1) {
          throw error0;
        }
        if (!stat.isDirectory()) throw error0;
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
