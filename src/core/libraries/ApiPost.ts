export type ApiPost = <T, P = any>(endpoint: string, postData: P) => Promise<T>;
