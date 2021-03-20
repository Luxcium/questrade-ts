import { IEquitySymbol, MapperFn } from '../../typescript';

export type MappedEquity = {
  symbolId: number;
  symbolItem: IEquitySymbol;
  symbolItems: IEquitySymbol[];
};

export interface EquityMapper<
  T extends IEquitySymbol[] = IEquitySymbol[],
  R extends MappedEquity = MappedEquity,
> extends MapperFn<T, R> {
  (item: T): R;
}
