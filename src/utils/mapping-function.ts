import {
  CurriedListMapping,
  CurriedMappingList,
  MappingFunction,
} from '../typescript';
import { promiseOf } from '.';

// export function awaited<U>(
//   value: Promise<U>,
// ): U extends Promise<infer RR> ? RR : U {
//   return value as any;
// }

const mappingFunction: MappingFunction = async (
  mappableList,
  mapperFunction,
) => {
  const awaitedList = await promiseOf(mappableList);
  const awaitedItems = await Promise.all(awaitedList);

  return Promise.all([...awaitedItems.map(mapperFunction)]) as any;
};

export const applyMappingList: CurriedMappingList = mapFn => async mList =>
  Promise.all(await mappingFunction(mList, mapFn));

export const applyListMapping: CurriedListMapping = mList => async mapFn =>
  Promise.all(await mappingFunction(mList, mapFn));

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
