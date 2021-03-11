import { IQuestradeAPIv2_0 } from '..';
import { IEquitySymbol } from '.';

export type GetEquitySymbol = ({
  qtApi,
  symbolList,
}: {
  qtApi: IQuestradeAPIv2_0;
  symbolList: Promise<string[]>;
}) => Promise<IEquitySymbol[][]>;
