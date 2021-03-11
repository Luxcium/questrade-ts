import { IEquitySymbol } from '.';

export type GetSymbolItemsList = ({
  equitySymbolsList,
}: {
  equitySymbolsList: Promise<IEquitySymbol[][]>;
}) => Promise<
  {
    symbolId: number;
    symbolItem: IEquitySymbol;
    symbolItems: IEquitySymbol[];
  }[]
>;
