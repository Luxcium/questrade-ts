import { IQuestradeAPIv2_0 } from '..';
import { IEquitySymbol, SymbolList } from '.';

export type GetEquitySymbol = ({
  qtApi,
  symbolList,
}: {
  qtApi: IQuestradeAPIv2_0;
  symbolList: SymbolList | (() => SymbolList);
}) => Promise<{
  equityList: IEquitySymbol[][];
}>;
