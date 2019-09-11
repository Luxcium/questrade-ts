import { IQuestradeAPIOptions, QuestradeClass } from '.';

// -------------------------------------------------------------------------- //
// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
// - ------------------------------------------------------------------------ //

export const questradeHelperFunction = async (
  opts: IQuestradeAPIOptions,
  cb?: (qt: QuestradeClass) => Promise<QuestradeClass>
) => {
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
};
export const tokenConnection: (
  token: string
) => Promise<{ questrade: QuestradeClass }> = async (token: string) => {
  const questrade = await questradeHelperFunction({ seedToken: token });
  return { questrade };
};
// - ------------------------------------------------------------------------ //
