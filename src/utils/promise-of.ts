export async function promiseOf<V, R = V>(value: V | Promise<V>): Promise<R> {
  return (Promise.resolve(value) as unknown) as R;
}
