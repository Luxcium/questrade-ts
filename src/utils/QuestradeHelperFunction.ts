/** @format */

import { IQuestradeAPIOptions, QuestradeClass } from '../core/types';

export async function QuestradeHelperFunction(
  opts: IQuestradeAPIOptions,
  cb?: (qt: QuestradeClass) => Promise<void | QuestradeClass>
) {
  const qt = await new QuestradeClass(opts);
  return qt.on('ready', () => {
    if (typeof cb === 'function') {
      return cb(qt);
    }
    return qt;
  });
}
