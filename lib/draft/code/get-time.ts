import { QuestradeAPIv2_0 } from '../..';
import { ech0 } from '../../resources/side-effects';
import { id0 } from '../../utils';

export async function getTime(qtApi: QuestradeAPIv2_0) {
  const time = qtApi.account.getServerTime();

  ech0(await time);

  return id0(qtApi);
}
