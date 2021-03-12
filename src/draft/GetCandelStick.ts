import { ICandleWithInfos } from '../typescript';

export type GetCandelStick = (
  symbol: string | Promise<string>,
) => Promise<ICandleWithInfos[]>;
