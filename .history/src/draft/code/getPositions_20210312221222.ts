import { ech0 } from '../../resources/side-effects';
import { id0 } from '../../utils';
import { mainRedis } from './mainRedis_b';


export async function getPositions() {
  const { qtApi } = await mainRedis();
  const positions = qtApi.account.getPositions();

  ech0(await positions);

  return id0(qtApi);
}
