import { MappingFunction } from '../typescript';
import { promiseOf } from '.';

export const mappingFunction: MappingFunction = async (
  mappableList,
  mapperFunction,
) => {
  const awaitedList = await promiseOf(mappableList);

  return Promise.all(awaitedList.map(mapperFunction));
};

/*
import { promiseOf } from '.';

export async function mapping<T, R>({
  list,
  mapper,
}: {
  list: T[] | Promise<T[]>;
  mapper: (item: T) => R;
}): Promise<R[]> {
  return (await promiseOf(list)).map(mapper);
}
*/
