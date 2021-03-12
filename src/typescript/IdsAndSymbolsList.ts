import { IEquitySymbol } from '.';

export type IdsAndSymbList = Promise<
  {
    symbolId: number;
    symbolItem: IEquitySymbol;
    symbolItems: IEquitySymbol[];
  }[]
>;
