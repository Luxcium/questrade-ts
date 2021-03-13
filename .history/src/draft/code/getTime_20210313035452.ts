import { ech0 } from '../../resources/side-effects';
import { id0 } from '../../utils';
import { mainRedis } from './mainRedis';

export async function getTime() {
  const { qtApi } = await mainRedis();
  const time = qtApi.account.getServerTime();

  ech0(await time);

  return id0(qtApi);
}
