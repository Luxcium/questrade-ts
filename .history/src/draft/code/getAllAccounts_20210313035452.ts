import { ech0 } from '../../resources/side-effects';
import { id0 } from '../../utils';
import { mainRedis } from './mainRedis';

export async function getAllAccounts() {
  const { qtApi } = await mainRedis();
  const accounts = qtApi.account.getAllAccounts();

  ech0(await accounts);

  return id0(qtApi);
}
