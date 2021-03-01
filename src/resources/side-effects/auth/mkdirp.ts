/* eslint-disable no-param-reassign */
import { mkdir } from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

import { void0 } from '../default-behaviour';

export async function mkDirP(p: string) {
  const myPath = resolve(p);
  const newmask = 0o0777;
  const mode = newmask;
  const oldmask = process.umask(newmask);
  void0(`Changed umask from ${oldmask.toString(8)} to ${newmask.toString(8)}`);

  return promisify(mkdir)(myPath, { mode, recursive: true });
}
