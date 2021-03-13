import { ech0 } from '../../resources/side-effects';
import { id0 } from '../../utils';
import { mainRedis } from './mainRedis';

export async function getExecutions() {
  const { qtApi } = await mainRedis();
  const executions = qtApi.account.getExecutions('2021-02-01')('2021-02-10');

  ech0(await executions);

  return id0(qtApi);
}
