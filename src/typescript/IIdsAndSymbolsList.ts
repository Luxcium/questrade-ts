import { IEquitySymbol } from '.';

export type IIdsAndSymbList = Promise<
  {
    symbolId: number;
    symbolItem: IEquitySymbol;
    symbolItems: IEquitySymbol[];
  }[]
>;
