export async function getAllPromises<T>(list: Promise<T>[]) {
  return Promise.all<T>(list);
}
