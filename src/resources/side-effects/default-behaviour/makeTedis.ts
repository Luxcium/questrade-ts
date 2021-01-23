// import RedisStatic, { Redis, RedisOptions } from 'ioredis';
// import JSONCache from 'redis-json';
import { Tedis } from 'tedis';

export function makeTedis(
  options?:
    | {
        host?: string | undefined;
        port?: number | undefined;
        password?: string | undefined;
        timeout?: number | undefined;
        tls?: { key: Buffer; cert: Buffer } | undefined;
      }
    | undefined,
): Tedis {
  return new Tedis(options);
}
// // new Redis
// export function makeRedis(options?: RedisOptions): Redis {
//   return new RedisStatic(options);
// }

// // options?: RedisOptions,
// // redis. //call('MEMORY', 'USAGE', 'mykey');
// // new Redis(options); //as any;

// export function makeJsonRedis(
//   redisFactory: (opt?: RedisOptions) => Redis = makeRedis,
// ) /*  Promise<Redis> */ {
//   return async (
//     options?: RedisOptions,
//     prefix: string = 'JSON',
//   ): Promise<Redis> => {
//     const redis = redisFactory(options);

//     const jsonCache = new JSONCache<Example>(makeTedis(), { prefix });

//     const user = {
//       address: {
//         doorNo: '12B',
//         locality: 'pentagon',
//         pincode: 123_456,
//       },
//       age: 80,
//       cars: ['BMW 520i', 'Audo A8'],
//       name: 'redis-json',
//     };

//     void user;
//     // await jsonCache.set('123', user);

//     echo(await jsonCache.get('123'));
//     return redis;
//   };
// }
// makeJsonRedis(makeRedis)({ port: 6379 }, 'cache:')
//   .then((redis: Redis) => redis.disconnect())
//   .catch(error => errorlog(error));

// type Example = {
//   name: string;
//   age: number;
//   address: {
//     doorNo: string;
//     locality: string;
//     pincode: number;
//   };
// };
/*
makeJsonRedis({ port: 6379 })
❯ ts-node "/home/luxcium/dev/questrade-ts/src/resources/side-effects/default-behaviour/makeTedis.ts"
{
  address: { doorNo: '12B', locality: 'pentagon', pincode: 123456 },
  age: 79,
  cars: [ 'BMW 520i', 'Audo A8' ],
  name: 'redis-json'
}

makeJsonRedis({ port: 6380 })
❯ ts-node "/home/luxcium/dev/questrade-ts/src/resources/side-effects/default-behaviour/makeTedis.ts"
{
  address: { doorNo: '12B', locality: 'pentagon', pincode: 123456 },
  age: 80,
  cars: [ 'BMW 520i', 'Audo A8' ],
  name: 'redis-json'
}
*/
