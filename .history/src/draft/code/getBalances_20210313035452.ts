import { ech0 } from '../../resources/side-effects';
import { id0 } from '../../utils';
import { mainRedis } from './mainRedis';

export async function getBalances() {
  const { qtApi } = await mainRedis();
  const balances = qtApi.account.getBalances();

  ech0(await balances);

  return id0(qtApi);
}
