import { IEquitySymbol } from '.';

export type GetSymbolItemsList = ({
  equitiesList,
}: {
  equitiesList: Promise<IEquitySymbol[][]>;
}) => Promise<
  {
    symbolId: number;
    symbolItem: IEquitySymbol;
    symbolItems: IEquitySymbol[];
  }[]
>;
