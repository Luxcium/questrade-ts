export type MapperFn<T, R> = (item: T) => R;
export type MappableListAsync<T> = MappableList<T> | Promise<MappableList<T>>;
export interface MappableList<T> extends Iterable<T> {
  // callback(value: number[], index: number, array: number[][]): string | readonly string[]
  flatMap<R>(callback: (value: T) => R): R[];
  flatMap<R>(callback: (value: T, index: number, array: T[]) => R): R[];
  map<R>(callbackfn: (value: T) => R): R[];
  map<R>(
    callbackfn: (value: T, index: number, array: T[]) => R,
    thisArg?: any,
  ): R[];
}
export type X<T> = T;
export type Xx<T> = X<T>[] & T[];

export type Y<T> = Promise<Xx<T>> & Promise<X<T>[]> & Promise<T[]>;
export type Yy<T> = Y<T>[] &
  Promise<Xx<T>>[] &
  Promise<X<T>[]>[] &
  Promise<T[]>[];

export type Z<T> = Promise<Yy<T>> &
  Promise<Y<T>[]> &
  Promise<Promise<Xx<T>>[]> &
  Promise<Promise<X<T>[]>[]> &
  Promise<Promise<T[]>[]>;

// Promise<Promise<IQuote[]>[]>
// Promise<IQuote[]>[]
// IQuote[]
export type UnwrapAwaitedList<U> = U extends Promise<infer P> ? P : U;
export type UnwrapList<Q> = Q extends Array<infer P> ? P : Q;
export type MappingFunction = <T, R>(
  mappableList: MappableListAsync<T>,
  mapperFunction: MapperFn<T, R>,
) => Promise<UnwrapAwaitedList<R[]>>;

export type CurriedMappingList = <R>(
  mapFn: MapperFn<any, R>,
) => <T>(mList: MappableListAsync<T>) => Promise<UnwrapAwaitedList<R[]>>;
export type CurriedListMapping = <T>(
  mList: MappableListAsync<T>,
) => <R>(mapFn: MapperFn<T, R>) => Promise<UnwrapAwaitedList<R[]>>;
// export type UnwrapAwaitedListB<U> = (U extends Promise<infer P> ? P : U)[];

// void function someVoid(unwrapAwaitedListB: UnwrapAwaitedListB<number>) {
//   return unwrapAwaitedListB;
// };

// export const mappingFunction: MappingFunction = async (
//   mappableList,
//   mapperFunction,
// ) => {
//   const awaitedList = await promiseOf(mappableList);
//   const returnValue = Promise.all(awaitedList.map(mapperFunction));
//   void returnValue;

//   return returnValue; // as any;
// };

// mappingFunction([1, 2, 3], item => item * 2);
