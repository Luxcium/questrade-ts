import { IEquitySymbol } from '.';

export type GetSymbolItemsList = (
  allEquitiesList: Promise<IEquitySymbol[][]>,
) => Promise<
  {
    symbolId: number;
    symbolItem: IEquitySymbol;
    symbolItems: IEquitySymbol[];
  }[]
>;
