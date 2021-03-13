import { ech0 } from '../../resources/side-effects';
import { id0 } from '../../utils';
import { mainRedis } from './mainRedis_b';


export async function getOrdersByIds() {
  const { qtApi } = await mainRedis();
  const order = qtApi.account.getOrdersByIds([793393477]);

  ech0(await order);

  return id0(qtApi);
}
