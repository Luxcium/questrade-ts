/** @format */

import { IQuestradeAPIOptions, QuestradeClass } from './core/types';
export async function QuestradeHelperFunction(
  opts: IQuestradeAPIOptions,
  cb?: (qt: QuestradeClass) => Promise<QuestradeClass>
) {
  return new Promise(
    (resolve: (qt: QuestradeClass) => any, _reject: (error: Error) => any) => {
      const qt = new QuestradeClass(opts);
      qt.on('ready', async () => {
        if (typeof cb === 'function') {
          console.log('ready', 'ready');
          return resolve(await cb(qt));
        }
        return resolve(qt);
      });
    }
  );
}
export const tokenConnection = async (token: string) => {
  const questrade = await QuestradeHelperFunction({ seedToken: token });
  return { questrade };
};
