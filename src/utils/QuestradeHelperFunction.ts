/** @format */

import { IQuestradeAPIOptions, QuestradeClass } from '../core/types';

export async function QuestradeHelperFunction(
  opts: IQuestradeAPIOptions,
  cb?: (qt: QuestradeClass) => any
) {
  const qt = new QuestradeClass(opts);
  qt.on('ready', () => {
    if (typeof cb === 'function') {
      cb(qt);
    }
  });
}
export const tokenConnection = async (seedToken: string) => {
  const questrade = await QuestradeHelperFunction({ seedToken });
  return { questrade };
};

(async () => {
  QuestradeHelperFunction(
    {
      seedToken: 'kimLnE0IgQwT4a4Un0tjAEpGJHXG6z6d0',
    },
    async qt => {
      const eqSym = await qt.getEquitySymbols('AAPL');
      console.log('eqSym', eqSym);
      return qt;
    }
  );
})().catch(err => console.log('err', err));
