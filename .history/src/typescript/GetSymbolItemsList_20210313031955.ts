import { IEquitySymbol } from '.';

export type GetSymbolItemsList = ({
  equityList,
}: {
  equityList: Promise<IEquitySymbol[][]>;
}) => Promise<
  {
    symbolId: number;
    symbolItem: IEquitySymbol;
    symbolItems: IEquitySymbol[];
  }[]
>;
