// export type Mappable = <R>(mapper: <T>(item: T) => R) => R[];

//

// export type MappingFn = <R>(
//   mappableList: MappableListAsync<R>,
//   mapper: MapperFn<R>,
// ) => Promise<R[]>;

export type MappableListAsync<T> = MappableList<T> | Promise<MappableList<T>>;
export interface MappableList<T> {
  map<R>(callbackfn: (value: T) => R): R[];
  map<R>(
    callbackfn: (value: T, index: number, array: T[]) => R,
    thisArg?: any,
  ): R[];
}
export type MapperFunction<T, R> = (item: T) => R;
export type MappingFunction = <T, R>(
  mappableList: MappableListAsync<T>,
  mapperFunction: MapperFunction<T, R>,
) => Promise<R[]>;

const mappingFunction: MappingFunction = async (
  mappableList,
  mapperFunction,
) => {
  const step1 = await promiseOf(mappableList);
  const returnValue = await Promise.all(step1.map(mapperFunction));
  void returnValue;

  return returnValue;
};

async function main() {
  const mappableList = ['one', 'two', 'three'];
  const mapperFunction = async (item: string) => promiseOf(item.length);
  const mappedResult = await mappingFunction(mappableList, mapperFunction);
  console.log(mappedResult);
}

main();

export async function promiseOf<V>(value: V | Promise<V>): Promise<V> {
  const returnValue = await Promise.resolve(value);
  void returnValue;

  return returnValue;
}

// https://www.typescriptlang.org/play?#code/AQKBFMA8AcHsCcAuxEE9rmAWQIbWjgEYA24AMgJYDOiAglagHYDGAPACoB8wAvNngRLlqiDtwA+wAArxYAW2rhWufEVKUaYzgG4IMBMgqNE4eADMczTCsHqRY4AG8QwYHLysASpwAUzHMTEhJYA1maMAFzAPgBuAQCu4FHsAJS83J4pUZ4A2gC6uq7u0F6+Lq7A-oHBzGGR0XHEickANMBGACZQUYzxcoSmbTjw8DioyflpPBkt5a6IABbUtPAA5gD8UTiMqLOuWcC5BSAAvnpwSCjo1gKmAGLxLIgUsIwcbd680RQmcslTGV0UAuyDQGH4+CMqweTxejC+70OZSKAjUwhoURsaI0dAYLDEezct3gMOYz1emOJpPJb3YH04swB0lkCioSiOOjAzFeNCJkMY0MeZLhlP5gthry+ODxzGi5WKtnRiEJCvuQppjPSTnK3MYvJo4GgAEYpQB3HA-YDQFmKADyZh8CuxIhShUqPOQ8HAiHi8EYADUEpg+DhzZaZPJFAA6ALEHwG41R4qOqnquEpV3lGKwCgdYBen1+wNNcC6coF33witFoO6E5l6VMWVmNOS9xGHxpZyuXW8p1CHFfHIAcle4GHbWHiFNsAnwCnCy94+OPY9fIwJNb8JDMu+vyiNHgUKZ1sjbPtPh+4DkUdIAsWmdXeuQqo6nnAVHixGQIbDL4EULUnCKaqAOIhtKqm4Sowj7unqsCkLesCrCBGBvh+X6IJmZwgO2jCdmWwIGMAjYsMALbQVaNrnmYrD+r4jTNMA-rAJIEasko9EHOxih0dw3Zwby1YBkGZoWsgPFslGXpUAhMTgLEQawdmub5t6lbFokZauMJamFiJJZ1iAQA
