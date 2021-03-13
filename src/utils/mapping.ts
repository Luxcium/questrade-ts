export async function mapping<T, R>({
  list,
  mapper,
}: {
  list: Promise<T[]>;
  mapper: (item: T) => R;
}): Promise<R[]> {
  return (await list).map(mapper);
}
