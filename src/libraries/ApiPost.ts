export type ApiPost = <T, P = any>(
  endpoint: string
) => <D = P>(postData: D) => Promise<T>;
