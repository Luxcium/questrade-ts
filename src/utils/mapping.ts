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
