import { AxiosStatic, default as axios } from 'axios';
import { _axiosApiPost } from '../../..';
import { IStrategiesQuotes } from '../../../../typescript';
import { Credentials } from '../../../typescript';

export const _marketsQuotesStrategies = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (
  strategyVariantRequestData: StrategyVariantRequest
): Promise<IStrategiesQuotes> =>
  _axiosApiPost(_axios)(credentials)<StrategyVariantRequest>(
    strategyVariantRequestData
  )<IStrategiesQuotes>('markets/quotes/strategies')();

/** Input array of Strategy Variants */
export type Variants = StrategyVariant[];
/**
 * Variant ID
 * The variantId parameter will be echoed so you can match the quotes to the request
 */
export type VariantId = number;

/**
 * Strategy type (e.g. “Custom”)
 * See Strategy Types section for all allowed values
 */
export type Strategy = string;
/** Array of Strategy legs. Maximum of 4 legs is allowed */
export type Legs = [Leg, Leg?, Leg?, Leg?];

/**
 * Strategy record for strategy quotes
 * Leg quantities will be factorized
 */
export interface Leg {
  /**
   * Order side (e.g. “Buy”)
   * See Order Action section for all allowed values
   */
  action?: string;
  /** Numeric ration of the leg in strategy */
  ratio?: number;
  /** Internal symbol identifier */
  symbolId?: number;
}
/**
 * Single or many multi-leg strategies
 * Retrieve a calculated L1 market data quote for one or many multi-leg strategies
 */
export interface StrategyVariantRequest {
  variants?: Variants;
}

/** Strategy record for strategy quotes. */
export interface StrategyVariant {
  /**
   * Variant ID
   * The variantId parameter will be echoed so you can match the quotes to the request.
   */
  variantId?: VariantId;
  /**
   * Strategy type (e.g. “Custom”)
   * See Strategy Types section for all allowed values.
   */
  strategy?: Strategy;
  /** Array of Strategy legs. Maximum of 4 legs is allowed. */
  legs?: Legs;
}
