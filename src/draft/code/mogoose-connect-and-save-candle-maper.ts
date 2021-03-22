export async function mogooseConnectAndSaveCandleMaper<T>(
  val: T,
  index: number,
  array: T[],
) {
  const value = JSON.parse(JSON.stringify(val)) as T;

  void index;
  void array;

  return value;
}
