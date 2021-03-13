import { ech0 } from '../../resources/side-effects';
import { id0 } from '../../utils';
import { mainRedis } from './mainRedis_b';


export async function getActivities() {
  const { qtApi } = await mainRedis();
  const activities = qtApi.account.getActivities('2021-02-01')('2021-02-10');

  ech0(await activities);

  return id0(qtApi);
}
