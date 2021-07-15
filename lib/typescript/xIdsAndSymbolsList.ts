import { IEquitySymbol } from '.';

export type xIdsAndSymbList = Promise<
  {
    symbolId: number;
    symbolItem: IEquitySymbol;
    symbolItems: IEquitySymbol[];
  }[]
>;
