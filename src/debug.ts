/** @format */

import { IQuestradeAPIOptions } from '.';
import { Questrade } from './v1.0.0/v1.0.0QuestradeClass';

export const qtOptions: IQuestradeAPIOptions = {
  seedToken: 'gv3X68BHQTnkAMRDxFmMCscftZae8hzl0',
};
export const qt1 = new Questrade(qtOptions);
qt1.on('ready', () => console.log('READY'));
// (async (): Promise<void> => {
//   // const somInterval = {};
//   // const { questrade: qt } = await tokenConnection(qtOptions.seedToken!);
//   try {
//     const serverTime = await qt1.getTime();
//     console.log('serverTime:', serverTime);
//     // console.log((await qt.getAccounts())[0].isBilling); //
//     // console.log(await qt.getPrimaryAccountNumber()); //
//     // qt.
//     // const aapl = JSON.stringify(await qt.searchSymbol('AAPL'));
//     // return aapl;
//     // console.log(aapl.split(',')
//     // /* JSON.parse(aapl).symbols[0].symbolId */);
//     // console.log(await );
//     // console.log(await qt.getCandles(symbolId));
//     // console.log('done');
//     // console.log(await qt.getCandles('aapl'));
//     return void 0;
//   } catch (error) {
//     return void 0;
//   }
// })();
