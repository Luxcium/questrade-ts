// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

export async function mapping<R, T>(
  list: Promise<T[]>,
  funct: (item: T) => R
): Promise<R[]> {
  return (await list).map(funct);
}
