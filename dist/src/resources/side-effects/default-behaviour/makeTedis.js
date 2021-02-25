"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeTedis = void 0;
// import RedisStatic, { Redis, RedisOptions } from 'ioredis';
// import JSONCache from 'redis-json';
const tedis_1 = require("tedis");
function makeTedis(options) {
    return new tedis_1.Tedis(options);
}
exports.makeTedis = makeTedis;
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
//   )  => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFrZVRlZGlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3Jlc291cmNlcy9zaWRlLWVmZmVjdHMvZGVmYXVsdC1iZWhhdmlvdXIvbWFrZVRlZGlzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhEQUE4RDtBQUM5RCxzQ0FBc0M7QUFDdEMsaUNBQThCO0FBRTlCLFNBQWdCLFNBQVMsQ0FDdkIsT0FRYTtJQUViLE9BQU8sSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQVpELDhCQVlDO0FBQ0QsZUFBZTtBQUNmLDZEQUE2RDtBQUM3RCxxQ0FBcUM7QUFDckMsSUFBSTtBQUVKLDZCQUE2QjtBQUM3QixnREFBZ0Q7QUFDaEQsbUNBQW1DO0FBRW5DLGlDQUFpQztBQUNqQyw2REFBNkQ7QUFDN0QsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQiw4QkFBOEI7QUFDOUIsK0JBQStCO0FBQy9CLFlBQVk7QUFDWiwyQ0FBMkM7QUFFM0MseUVBQXlFO0FBRXpFLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkIseUJBQXlCO0FBQ3pCLGdDQUFnQztBQUNoQyw0QkFBNEI7QUFDNUIsV0FBVztBQUNYLGlCQUFpQjtBQUNqQix1Q0FBdUM7QUFDdkMsNEJBQTRCO0FBQzVCLFNBQVM7QUFFVCxpQkFBaUI7QUFDakIsMkNBQTJDO0FBRTNDLHdDQUF3QztBQUN4QyxvQkFBb0I7QUFDcEIsT0FBTztBQUNQLElBQUk7QUFDSixxREFBcUQ7QUFDckQsZ0RBQWdEO0FBQ2hELHNDQUFzQztBQUV0QyxtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2Ysc0JBQXNCO0FBQ3RCLHdCQUF3QjtBQUN4Qix1QkFBdUI7QUFDdkIsT0FBTztBQUNQLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlZGlzU3RhdGljLCB7IFJlZGlzLCBSZWRpc09wdGlvbnMgfSBmcm9tICdpb3JlZGlzJztcbi8vIGltcG9ydCBKU09OQ2FjaGUgZnJvbSAncmVkaXMtanNvbic7XG5pbXBvcnQgeyBUZWRpcyB9IGZyb20gJ3RlZGlzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VUZWRpcyhcbiAgb3B0aW9ucz86XG4gICAgfCB7XG4gICAgICAgIGhvc3Q/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICAgIHBvcnQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgICAgIHBhc3N3b3JkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgICAgICB0aW1lb3V0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgICAgICB0bHM/OiB7IGtleTogQnVmZmVyOyBjZXJ0OiBCdWZmZXIgfSB8IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB8IHVuZGVmaW5lZCxcbikge1xuICByZXR1cm4gbmV3IFRlZGlzKG9wdGlvbnMpO1xufVxuLy8gLy8gbmV3IFJlZGlzXG4vLyBleHBvcnQgZnVuY3Rpb24gbWFrZVJlZGlzKG9wdGlvbnM/OiBSZWRpc09wdGlvbnMpOiBSZWRpcyB7XG4vLyAgIHJldHVybiBuZXcgUmVkaXNTdGF0aWMob3B0aW9ucyk7XG4vLyB9XG5cbi8vIC8vIG9wdGlvbnM/OiBSZWRpc09wdGlvbnMsXG4vLyAvLyByZWRpcy4gLy9jYWxsKCdNRU1PUlknLCAnVVNBR0UnLCAnbXlrZXknKTtcbi8vIC8vIG5ldyBSZWRpcyhvcHRpb25zKTsgLy9hcyBhbnk7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBtYWtlSnNvblJlZGlzKFxuLy8gICByZWRpc0ZhY3Rvcnk6IChvcHQ/OiBSZWRpc09wdGlvbnMpID0+IFJlZGlzID0gbWFrZVJlZGlzLFxuLy8gKSAvKiAgUHJvbWlzZTxSZWRpcz4gKi8ge1xuLy8gICByZXR1cm4gYXN5bmMgKFxuLy8gICAgIG9wdGlvbnM/OiBSZWRpc09wdGlvbnMsXG4vLyAgICAgcHJlZml4OiBzdHJpbmcgPSAnSlNPTicsXG4vLyAgICkgID0+IHtcbi8vICAgICBjb25zdCByZWRpcyA9IHJlZGlzRmFjdG9yeShvcHRpb25zKTtcblxuLy8gICAgIGNvbnN0IGpzb25DYWNoZSA9IG5ldyBKU09OQ2FjaGU8RXhhbXBsZT4obWFrZVRlZGlzKCksIHsgcHJlZml4IH0pO1xuXG4vLyAgICAgY29uc3QgdXNlciA9IHtcbi8vICAgICAgIGFkZHJlc3M6IHtcbi8vICAgICAgICAgZG9vck5vOiAnMTJCJyxcbi8vICAgICAgICAgbG9jYWxpdHk6ICdwZW50YWdvbicsXG4vLyAgICAgICAgIHBpbmNvZGU6IDEyM180NTYsXG4vLyAgICAgICB9LFxuLy8gICAgICAgYWdlOiA4MCxcbi8vICAgICAgIGNhcnM6IFsnQk1XIDUyMGknLCAnQXVkbyBBOCddLFxuLy8gICAgICAgbmFtZTogJ3JlZGlzLWpzb24nLFxuLy8gICAgIH07XG5cbi8vICAgICB2b2lkIHVzZXI7XG4vLyAgICAgLy8gYXdhaXQganNvbkNhY2hlLnNldCgnMTIzJywgdXNlcik7XG5cbi8vICAgICBlY2hvKGF3YWl0IGpzb25DYWNoZS5nZXQoJzEyMycpKTtcbi8vICAgICByZXR1cm4gcmVkaXM7XG4vLyAgIH07XG4vLyB9XG4vLyBtYWtlSnNvblJlZGlzKG1ha2VSZWRpcykoeyBwb3J0OiA2Mzc5IH0sICdjYWNoZTonKVxuLy8gICAudGhlbigocmVkaXM6IFJlZGlzKSA9PiByZWRpcy5kaXNjb25uZWN0KCkpXG4vLyAgIC5jYXRjaChlcnJvciA9PiBlcnJvcmxvZyhlcnJvcikpO1xuXG4vLyB0eXBlIEV4YW1wbGUgPSB7XG4vLyAgIG5hbWU6IHN0cmluZztcbi8vICAgYWdlOiBudW1iZXI7XG4vLyAgIGFkZHJlc3M6IHtcbi8vICAgICBkb29yTm86IHN0cmluZztcbi8vICAgICBsb2NhbGl0eTogc3RyaW5nO1xuLy8gICAgIHBpbmNvZGU6IG51bWJlcjtcbi8vICAgfTtcbi8vIH07XG4vKlxubWFrZUpzb25SZWRpcyh7IHBvcnQ6IDYzNzkgfSlcbuKdryB0cy1ub2RlIFwiL2hvbWUvbHV4Y2l1bS9kZXYvcXVlc3RyYWRlLXRzL3NyYy9yZXNvdXJjZXMvc2lkZS1lZmZlY3RzL2RlZmF1bHQtYmVoYXZpb3VyL21ha2VUZWRpcy50c1wiXG57XG4gIGFkZHJlc3M6IHsgZG9vck5vOiAnMTJCJywgbG9jYWxpdHk6ICdwZW50YWdvbicsIHBpbmNvZGU6IDEyMzQ1NiB9LFxuICBhZ2U6IDc5LFxuICBjYXJzOiBbICdCTVcgNTIwaScsICdBdWRvIEE4JyBdLFxuICBuYW1lOiAncmVkaXMtanNvbidcbn1cblxubWFrZUpzb25SZWRpcyh7IHBvcnQ6IDYzODAgfSlcbuKdryB0cy1ub2RlIFwiL2hvbWUvbHV4Y2l1bS9kZXYvcXVlc3RyYWRlLXRzL3NyYy9yZXNvdXJjZXMvc2lkZS1lZmZlY3RzL2RlZmF1bHQtYmVoYXZpb3VyL21ha2VUZWRpcy50c1wiXG57XG4gIGFkZHJlc3M6IHsgZG9vck5vOiAnMTJCJywgbG9jYWxpdHk6ICdwZW50YWdvbicsIHBpbmNvZGU6IDEyMzQ1NiB9LFxuICBhZ2U6IDgwLFxuICBjYXJzOiBbICdCTVcgNTIwaScsICdBdWRvIEE4JyBdLFxuICBuYW1lOiAncmVkaXMtanNvbidcbn1cbiovXG4iXX0=