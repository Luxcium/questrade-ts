import { SimpleQueue } from '../../private/core/next-rate-limiter/simple-queue';
import { echo } from '../../resources/side-effects';
import { getMain } from './getMain';
import { mainRedis } from './mainRedis';
import { mogooseConnect_DEPRECATED } from './mogooseConnect_DEPRECATED';
import { once } from './only-once-main';

export async function _main_deprecated() {
  echo(`Will execute main: ${once.onlyOnceMain}`);
  if (!once.onlyOnceMain) {
    return false;
  }

  once.onlyOnceMain = false;
  const { qtApi } = await mainRedis();
  const connection = await mogooseConnect_DEPRECATED();
  const apiCallQ = new SimpleQueue();
  await getMain(qtApi, apiCallQ, 0, 5)
    .then(x => x)
    .finally(() => null)
    .catch(error => console.error(error));

  void apiCallQ.addToQueue({
    config: 'any',
    fn(_): any {
      return connection.disconnect();
    },
  });

  return true;
}
