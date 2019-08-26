/** @format */

import { IQuestradeAPIOptions } from '.';
import { Questrade } from './v1.0.0/Questrade';

export const qtOptions: IQuestradeAPIOptions = {
  seedToken: '2ZzJ3MhdpwmzhPprcwAhmnf1nQ4cRUYV0',
};
export const qt1 = new Questrade(qtOptions);
qt1.on('ready', async () => {
  console.log('READY');
  console.log(await qt1.getAccounts());
  console.log(await qt1.accountNumber);
  console.log(await qt1);
});
