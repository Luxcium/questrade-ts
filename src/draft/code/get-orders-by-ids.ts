import { QuestradeAPIv2_0 } from '../..';
import { ech0 } from '../../resources/side-effects';
import { id0 } from '../../utils';

export async function getOrdersByIds(qtApi: QuestradeAPIv2_0) {
  const order = qtApi.account.getOrdersByIds([793_393_477]);

  ech0(await order);

  return id0(qtApi);
}
