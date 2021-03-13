import { ech0 } from '../../resources/side-effects';
import { id0 } from '../../utils';
import { mainRedis } from './mainRedis';

export async function getOrdersByIds() {
  const { qtApi } = await mainRedis();
  const order = qtApi.account.getOrdersByIds([793_393_477]);

  ech0(await order);

  return id0(qtApi);
}
