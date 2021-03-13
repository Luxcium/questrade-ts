export async function mapping<T, R>(
  list: Promise<T[]>,
  funct: (item: T) => R,
): Promise<R[]> {
  return (await list).map(funct);
}
