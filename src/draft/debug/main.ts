/* eslint-disable new-cap */
import { SimpleQueue } from '../../private/core/next-rate-limiter/simple-queue';
import { echo } from '../../resources/side-effects';
import { mainRedis } from '../code/main-redis';
import { mogooseConnect } from '../code/mogoose-connect';
import { SCIENTIA_ES_LUX_PRINCIPIUM } from './SCIENTIA_ES_LUX_PRINCIPIUM';

export const once = { onlyOnceMain: true, onlyOnceMongoose: 0 };

export async function main() {
  echo(`Will execute main: ${once.onlyOnceMain}`);
  if (!once.onlyOnceMain) {
    return false;
  }

  once.onlyOnceMain = false;
  const { qtApi } = await mainRedis();
  const connectionString = 'mongodb://127.0.0.1:27017/test';
  const apiCallQ = new SimpleQueue();
  const connection = await mogooseConnect(once, connectionString);
  await SCIENTIA_ES_LUX_PRINCIPIUM(apiCallQ, qtApi);

  apiCallQ.addToQueue({
    config: 'any',
    fn(_): any {
      return connection.disconnect();
    },
  });

  return true;
}

main();
