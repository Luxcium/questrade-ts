/** @format */

// questrade-ts
import { QuestradeClass } from './core/types/classes/QuestradeClass';
import { QuestradeHelperFunction } from './utils/QuestradeHelperFunction';
export default QuestradeClass;
// tslint:disable-next-line: variable-name
const Questrade = QuestradeClass;
const questradeTS = QuestradeClass;
export {
  AccountStatus,
  ClientAccountType,
  Currency,
  HistoricalDataGranularity,
  ListingExchange,
  OptionDurationType,
  OptionExerciseType,
  OptionType,
  OrderAction,
  OrderClass,
  OrderSide,
  OrderState,
  OrderStateFilterType,
  OrderTimeInForce,
  OrderType,
  SecurityType,
  StrategyTypes,
  TickType,
  UserAccountType,
} from './core/types';
// export { QuestradeClass } from './core/types/classes/QuestradeClass';
export {
  IQuestradeAPIOptions,
  QuestradeAPIOptions,
} from './core/types/IQuestradeAPIOptions';
export { QuestradeHelperFunction, questradeTS, Questrade, QuestradeClass };
export const tokenConnection = async (seedToken: string) => {
  const questrade = await QuestradeHelperFunction({ seedToken });
  return { questrade };
};
