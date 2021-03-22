import { QuestradeAPIv2_0 } from '../..';
import { ech0 } from '../../resources/side-effects';
import { id0 } from '../../utils';

export async function getAllAccounts(qtApi: QuestradeAPIv2_0) {
  const accounts = qtApi.account.getAllAccounts();

  ech0(await accounts);

  return id0(qtApi);
}
