// tslint:disable-next-line: no-any
export type CallBack<T> = (
  error: Error | null,
  returnValue: Promise<T>
) => void;
