import { ICandleWithInfos } from '.';

export type GetCandelStick = (
  symbol: string | Promise<string>,
) => Promise<ICandleWithInfos[]>;
