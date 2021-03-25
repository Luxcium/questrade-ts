/* eslint-disable no-undefined */
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

  return Promise.all(awaitedItems.map(mapperFunction)) as any;
};

export const applyMappingList: CurriedMappingList = mapFn => async mList =>
  Promise.all(await mappingFunction(mList, mapFn));

export const applyListMapping: CurriedListMapping = mList => async mapFn =>
  Promise.all(await mappingFunction(mList, mapFn));

export async function flatMapFirstElement<T>(listOfArrays: T[][]): Promise<T[]>;
export async function flatMapFirstElement<T>(
  listOfArrays: Promise<T[][]>,
): Promise<T[]>;
export async function flatMapFirstElement<T>(
  listOfArrays: Promise<T[][]> | T[][],
  spliceIndex: [number, number] = [0, 1],
): Promise<T[]> {
  const list = await promiseOf(listOfArrays);

  return list.flatMap(array => array.splice(...spliceIndex));
}

export function mapFirstElment<T, R = T, S = any>(item: T[][], nullItem?: S) {
  if (typeof nullItem === 'undefined') {
    return item.map(subItem => subItem[0] ?? null) as (R | null)[];
  }

  return item.map(subItem => subItem[0] ?? nullItem) as (R | typeof nullItem)[];
}

export function mapFirstElement<T, R = T>(listOfArrays: T[][]) {
  return listOfArrays.map(array => array[0] ?? null) as (R | null)[];
}

export function mapFirstElmentX<T, S>(item: T[][], nullItem?: S) {
  const zero = nullItem === undefined ? null : nullItem;

  return item.map(subItem => subItem[0] ?? zero);
}

export function mapFirstEllement3<T>(listOfArrays: T[][]) {
  return listOfArrays.map(array => array[0] ?? null).flat();
  // return item.map(subItem => subItem[0] ?? null) as (R | null)[];
}

// arrayOfArrays.map(array => array.splice(0,1)).flat()
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
