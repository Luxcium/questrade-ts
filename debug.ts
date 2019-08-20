/** @format */

import { IQuestradeAPIOptions, tokenConnection } from './src';
const qtOptions: IQuestradeAPIOptions = {
  seedToken: 'IEQ6p8dqR3a4cccAIfCizwcKFqon7dQh0',
};
(async (): Promise<void> => {
  // const somInterval = {};
  const { questrade: qt } = await tokenConnection(qtOptions.seedToken!);
  try {
    console.log((await qt.getAccounts())[0].isBilling);

    // const aapl = JSON.stringify(await qt.searchSymbol('AAPL'));
    // return aapl;
    // console.log(aapl.split(',') /* JSON.parse(aapl).symbols[0].symbolId */);
    // console.log(await );
    // console.log(await qt.getCandles(symbolId));
    // console.log('done');
    // console.log(await qt.getCandles('aapl'));
    return void 0;
  } catch (error) {
    // console.error();
    return void 0;
  }
})();
