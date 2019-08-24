/** @format */

import { QuestradeClass } from '../core/types';

export async function allOfGetAccounts(qt: QuestradeClass, done: any) {
  const getAccounts = await qt.getAccounts();
  const account = getAccounts[0];
  console.log('\n\n\n\nCLIENTACCOUNTTYPE (for each):');
  console.log('\n\nclientAccountType:');
  console.dir(account.clientAccountType);
  console.log('isBilling:');
  console.dir(account.isBilling);
  console.log('isPrimary:');
  console.dir(account.isPrimary);
  console.log('number:');
  console.dir(account.number);
  console.log('status:');
  console.dir(account.status);
  console.log('type:');
  console.dir(account.type);
  done();
}
