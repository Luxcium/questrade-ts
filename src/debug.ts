/** @format */

import { IQuestradeAPIOptions } from '.';
import { QuestradeClient } from './v1.0.0/QuestradeClient';

export const qtOptions: IQuestradeAPIOptions = {
  seedToken: 'euSIu8S4g1DxyJqegQrRW66JAK9VGElV0',
};
export const qt1 = new QuestradeClient(qtOptions);
qt1.on('ready', async (_obj: QuestradeClient) => {
  console.log('READY');
  console.log(await qt1.getAccounts());
  console.log(await qt1.qtAccountNumber);
  console.log(await qt1.qtMarketsNames);
  // console.dir(obj);
  // console.log(obj);
  // console.log('__________');
  // console.log(JSON.stringify(obj.getAccounts));
});
