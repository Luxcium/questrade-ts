export async function promiseOf<V>(value: V | Promise<V>): Promise<V> {
  return Promise.resolve(value).then(async x => x);
}
