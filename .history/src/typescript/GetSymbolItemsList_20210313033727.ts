import { IEquitySymbol } from '.';

export type GetSymbolItemsList = ({
  equityList,
}: {
  equityList: IEquitySymbol[][] | Promise<IEquitySymbol[][]>;
}) => Promise<
  {
    symbolId: number;
    symbolItem: IEquitySymbol;
    symbolItems: IEquitySymbol[];
  }[]
>;
