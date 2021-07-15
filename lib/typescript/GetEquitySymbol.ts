import { QuestradeAPIv2_0 } from '..';
import { IEquitySymbol, StockTickerList } from '.';

export type GetEquitySymbol = ({
  qtApi,
  stockTickerList,
}: {
  qtApi: QuestradeAPIv2_0;
  stockTickerList: StockTickerList;
}) => Promise<{
  equityList: IEquitySymbol[][];
}>;
