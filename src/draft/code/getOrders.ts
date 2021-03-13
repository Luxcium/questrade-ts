import { ech0 } from '../../resources/side-effects';
import { id0 } from '../../utils';
import { mainRedis } from './mainRedis_b';


export async function getOrders() {
  const { qtApi } = await mainRedis();
  const orders = qtApi.account.getOrders()('2021-02-01')('2021-02-10');

  ech0(await orders);

  return id0(qtApi);
}
