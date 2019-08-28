/** @format */

import { IQuestradeAPIOptions } from '.';
import { Questrade } from './core/private/classes/Questrade';
// import { } from ;
export const qtOptions: IQuestradeAPIOptions = {
  seedToken: 'UN6KnAjJbxtEobLrBYJzYQDMKPuDqquE0',
};
export const qt1 = new Questrade(qtOptions);
qt1.on('ready', async () => {
  console.log('READY');
  console.log(await qt1.getAccounts());
  console.log(await qt1.accountNumber);
  console.log(await qt1);
});
