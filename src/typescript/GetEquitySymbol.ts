import { IQuestradeAPIv2_0 } from '..';
import { IEquitySymbol, SymbolList } from '.';

export type GetEquitySymbol = (
  qtApi: IQuestradeAPIv2_0,
) => (symbolList: SymbolList) => Promise<IEquitySymbol[][]>;
