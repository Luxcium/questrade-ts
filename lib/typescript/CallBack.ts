export type CallBack<T> = (
  error: Error | null,
  returnValue: Promise<T>,
) => void;
