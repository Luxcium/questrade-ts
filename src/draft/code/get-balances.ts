import { IQuestradeAPIv2_0 } from '../..';
import { ech0 } from '../../resources/side-effects';
import { id0 } from '../../utils';

export async function getBalances(qtApi: IQuestradeAPIv2_0) {
  const balances = qtApi.account.getBalances();

  ech0(await balances);

  return id0(qtApi);
}
