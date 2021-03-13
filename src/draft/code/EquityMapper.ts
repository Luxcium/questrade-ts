import { IEquitySymbol } from '../../typescript';


export type EquityMapper = (item: IEquitySymbol[]) => {
  symbolId: number;
  symbolItem: IEquitySymbol;
  symbolItems: IEquitySymbol[];
};
