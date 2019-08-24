/** @format */

import { IQuestradeAPIOptions } from '.';
import { QuestradeClient } from './v1.0.0/QuestradeClient';

export const qtOptions: IQuestradeAPIOptions = {
  seedToken: 'yAs_xQBAVniAB2P3ODdHGvvoL9ThnCsj0',
};
export const qt1 = new QuestradeClient(qtOptions);
qt1.on('ready', async (_obj: QuestradeClient) => {
  console.log('READY');
  console.log(await qt1.getAccounts());
  console.log(await qt1.accountNumber);
  // // console.log(await qt1);
  // console.dir(obj);
  // console.log(obj);
  // console.log('__________');
  // console.log(JSON.stringify(obj.getAccounts));
});
