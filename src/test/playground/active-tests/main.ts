import { redeemToken } from '../../..';
import { Credentials, QuestradeApi, QuestradeAPIOptions } from '../../../types';

// export function redeemTokenThen(refreshToken: QuestradeAPIOptions) {
//   const qtApi = new Promise<T>(executor: (resolve: (value: T) => void, reject: (reason?: any) => void) => void): Promise<T>;
//   return [qtApi, credentials]
// }

// const { qtApi, credentials } =  ;

// export { credentials, qtApi };

export function redeemTokenThen(
  refreshToken: QuestradeAPIOptions,
): PartialyResolved {
  const redeem: QtAPIOptionsThen = redeemToken(refreshToken);
  const qtApi = redeem.then(value => value.qtApi);
  const credentials = redeem.then(value => value.credentials);
  return { qtApi, credentials };
}

/*
    I would like to convert from  `QtAPIOptionsThen` into `PartialyResolved` is
    there a way I can build an utility function to do a conversion from an
    `Promise<Object>` type or an `Promise<Array>` type  into an 'Object' or 'Array'
    which is not a 'promise of' ... but that is containing the 'promises of' into
    its 'elements' ?
*/
export type QtAPIOptionsThen = Promise<{
  qtApi: QuestradeApi;
  credentials: Credentials;
}>;

export type PartialyResolved = {
  qtApi: Promise<QuestradeApi>;
  credentials: Promise<Credentials>;
};

// !! Scientia es lux principium ✨ 🌹

// Gerrit0 Hier à 23:56  december 30 2020 Typescipt Discord
// In a generic way - though I don't think this is necessarily a good idea...
type PromisifyProps<T> = { readonly [K in keyof T]: Promise<T[K]> };
type PartiallyResolve<T> = PromisifyProps<T extends Promise<infer U> ? U : T>;

function partiallyResolve<T extends Promise<any>>(obj: T): PartiallyResolve<T> {
  return new Proxy(obj, {
    async get(target, prop) {
      const data = await target;
      return data[prop];
    },
  }) as any;
}

export async function main() {
  const test = Promise.resolve({ x: 1, y: 'str' });
  const data = partiallyResolve(test);

  data.x; // Promise<number>
  data.y; // Promise<string>

  data;

  // console.info();
  // console.log('test');
  // console.log(test);
  // console.log(await test);
  // console.info();
  // console.log('data.x:');
  // console.log(data.x);
  // console.log(await data.x);
  // console.info();
  // console.log('data.y:');
  // console.log(data.y);
  // console.log(await data.y);
  // console.info();
  // console.log('data:');
  // console.log(data);
  // console.info();
  // console.info();
  // // Errored out →
  // console.log(await data);
}
// main();
