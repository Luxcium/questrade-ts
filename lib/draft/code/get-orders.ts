import { QuestradeAPIv2_0 } from '../..';
import { ech0 } from '../../resources/side-effects';
import { id0 } from '../../utils';

export async function getOrders(qtApi: QuestradeAPIv2_0) {
  const orders = qtApi.account.getOrders()('2021-02-01')('2021-02-10');

  ech0(await orders);

  return id0(qtApi);
}
