import { IQuestradeAPIv2_0 } from '../..';
import { ech0 } from '../../resources/side-effects';
import { id0 } from '../../utils';

export async function getPositions(qtApi: IQuestradeAPIv2_0) {
  const positions = qtApi.account.getPositions();

  ech0(await positions);

  return id0(qtApi);
}
