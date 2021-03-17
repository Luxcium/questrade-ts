export type MapperFunction<T, R> = (item: T) => R;
export type MappableListAsync<T> = MappableList<T> | Promise<MappableList<T>>;
export interface MappableList<T> {
  map<R>(callbackfn: (value: T) => R): R[];
  map<R>(
    callbackfn: (value: T, index: number, array: T[]) => R,
    thisArg?: any,
  ): R[];
}
export type UnwrapPromise<R> = R extends Promise<infer RR> ? RR : R[];
export type MappingFunction = <T, R>(
  mappableList: MappableListAsync<T>,
  mapperFunction: MapperFunction<T, R>,
) => Promise<UnwrapPromise<R>>;

// Promise<R extends Promise<infer RR> ? RR : R[]>
// Promise<R extends Promise<infer P> ? P : R[]>
