import { IEquitySymbol } from '.';

export type GetSymbolItemsList = (
  {allEquitiesList}:{allEquitiesList: Promise<IEquitySymbol[][]>},
) => Promise<
  {
    symbolId: number;
    symbolItem: IEquitySymbol;
    symbolItems: IEquitySymbol[];
  }[]
>;
