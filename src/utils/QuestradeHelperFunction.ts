/** @format */

import { IQuestradeAPIOptions, QuestradeClass } from '../core/types';
export async function QuestradeHelperFunction(
  opts: IQuestradeAPIOptions,
  cb?: (qt: QuestradeClass) => Promise<QuestradeClass>
) {
  // tslint:disable-next-line: max-line-length
  //  Promise<QuestradeClass> (value?: QuestradeClass |  Promise<QuestradeClass> | undefined) => void
  return new Promise((
    resolve: (qt: QuestradeClass) => any /*  Promise<QuestradeClass> */,
    _reject: (error: Error) => any
  ) => {
    const qt = new QuestradeClass(opts);
    qt.on('ready', async () => {
      if (typeof cb === 'function') {
        console.log('ready', 'ready');
        return resolve(await cb(qt));
      }
      return resolve(qt);
    });
    // reject(new Error('cb is not a functions callback'));
  });
}
export const tokenConnection = async (token: string) => {
  const questrade = await QuestradeHelperFunction({ seedToken: token });
  return { questrade };
};
