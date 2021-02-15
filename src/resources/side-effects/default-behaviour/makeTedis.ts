// Import RedisStatic, { Redis, RedisOptions } from 'ioredis';
// Import JSONCache from 'redis-json';
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
) {
  return new Tedis(options);
}
// // new Redis
// Export function makeRedis(options?: RedisOptions): Redis {
//   Return new RedisStatic(options);
// }

// // options?: RedisOptions,
// // redis. //call('MEMORY', 'USAGE', 'mykey');
// // new Redis(options); //as any;

// Export function makeJsonRedis(
//   RedisFactory: (opt?: RedisOptions) => Redis = makeRedis,
// ) /*  Promise<Redis> */ {
//   Return async (
//     Options?: RedisOptions,
//     Prefix: string = 'JSON',
//   )  => {
//     Const redis = redisFactory(options);

//     Const jsonCache = new JSONCache<Example>(makeTedis(), { prefix });

//     Const user = {
//       Address: {
//         DoorNo: '12B',
//         Locality: 'pentagon',
//         Pincode: 123_456,
//       },
//       Age: 80,
//       Cars: ['BMW 520i', 'Audo A8'],
//       Name: 'redis-json',
//     };

//     Void user;
//     // await jsonCache.set('123', user);

//     Echo(await jsonCache.get('123'));
//     Return redis;
//   };
// }
// MakeJsonRedis(makeRedis)({ port: 6379 }, 'cache:')
//   .then((redis: Redis) => redis.disconnect())
//   .catch(error => errorlog(error));

// Type Example = {
//   Name: string;
//   Age: number;
//   Address: {
//     DoorNo: string;
//     Locality: string;
//     Pincode: number;
//   };
// };
/*
MakeJsonRedis({ port: 6379 })
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
