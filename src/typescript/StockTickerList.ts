export type StockTickerList =
  | string[]
  | Promise<string[]>
  | (() => string[])
  | (() => Promise<string[]>);
