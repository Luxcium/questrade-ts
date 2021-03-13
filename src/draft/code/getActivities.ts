import { IQuestradeAPIv2_0 } from '../..';
import { ech0 } from '../../resources/side-effects';
import { id0 } from '../../utils';

export async function getActivities(qtApi: IQuestradeAPIv2_0) {
  const activities = qtApi.account.getActivities('2021-02-01')('2021-02-10');

  ech0(await activities);

  return id0(qtApi);
}
