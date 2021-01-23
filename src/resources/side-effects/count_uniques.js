/* eslint-disable import/no-commonjs */
/* eslint-disable import/unambiguous */
const Redis = require('ioredis');

const redis = new Redis();
const uniqueIds = require('./unique_ids.json');

const countUniques = async () => {
  const HLL_KEY_NAME = 'hlldemo';
  const SET_KEY_NAME = 'setdemo';

  const BATCH_SIZE = 50;
  let startIndex = 0;
  let endIndex = BATCH_SIZE;
  let tmpArray = [];

  await redis.del(HLL_KEY_NAME, SET_KEY_NAME);

  do {
    tmpArray = uniqueIds.slice(startIndex, endIndex);

    if (tmpArray.length === 0) {
      break;
    }

    const pipeline = redis.pipeline();

    pipeline.pfadd(HLL_KEY_NAME, ...tmpArray);
    pipeline.sadd(SET_KEY_NAME, ...tmpArray);
    await pipeline.exec();

    startIndex += BATCH_SIZE;
    endIndex += BATCH_SIZE;
  } while (tmpArray.length === BATCH_SIZE);

  const [hllCount, hllMemoryUsed, setCount, setMemoryUsed] = await Promise.all([
    redis.pfcount(HLL_KEY_NAME),
    redis.call('MEMORY', 'USAGE', HLL_KEY_NAME),
    redis.scard(SET_KEY_NAME),
    redis.call('MEMORY', 'USAGE', SET_KEY_NAME),
  ]);

  console.log(
    `HyperLogLog method: counted ${hllCount} unique items, memory used ${hllMemoryUsed} bytes.`,
  );
  console.log(
    `Set method: counted ${setCount} unique items, memory used ${setMemoryUsed} bytes.`,
  );

  redis.quit();
};

countUniques();
