export type MappableListAsync<T> = MappableList<T> | Promise<MappableList<T>>;
export type MapperFn<T, R> = (item: T) => R;

export type MappingFunction = <T, R>(
  mappableList: MappableListAsync<T>,
  mapperFunction: MapperFn<T, R>,
) => Promise<any>; // Promise<U> // : U extends Promise<infer RR> ? RR : U

export type CurriedMappingList = <R, T>(
  mapFn: MapperFn<T, R>,
) => (mList: MappableListAsync<T>) => Promise<R[]>;
export type CurriedListMapping = <T>(
  mList: MappableListAsync<T>,
) => <R>(mapFn: MapperFn<T, R>) => Promise<R[]>;

// Promise<R>

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

export type UnwrapAwaitedList<R> = (R extends Promise<infer RR> ? RR : R[])[]; // = U extends Promise<infer P> ? P : U[];
export type UnwrapList<R> = R extends Array<infer P> ? P : R;
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

export function typeCorrection<U>(
  value: Promise<U>,
): U extends Promise<infer RR> ? RR : U {
  return value as any;
}

// (U extends Promise<infer RR> ? RR : U)

export type MappingFunctionX = <T, R>(
  mappableList: MappableListAsync<T>,
  mapperFunction: MapperFn<T, R>,
) => Promise<UnwrapList<UnwrapAwaitedList<R>>>;
