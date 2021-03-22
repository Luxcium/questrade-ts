/** input array of Strategy Variants */
export type Variants = StrategyVariant[];
/**
 * variant ID
 * The variantId parameter will be echoed so you can match the quotes to the request
 */
export type VariantId = number;

/**
 * strategy type (e.g. “Custom”)
 * See Strategy Types section for all allowed values
 */
export type Strategy = string;
/** array of Strategy legs. Maximum of 4 legs is allowed */
export type Legs = [Leg, Leg?, Leg?, Leg?];

/**
 * strategy record for strategy quotes
 * Leg quantities will be factorized
 */
export interface Leg {
  /**
   * order side (e.g. “Buy”)
   * See Order Action section for all allowed values
   */
  action: string;
  /** numeric ration of the leg in strategy */
  ratio: number;
  /** internal symbol identifier */
  symbolId: number;
}
/**
 * single or many multi-leg strategies
 * Retrieve a calculated L1 market data quote for one or many multi-leg strategies
 */
export interface StrategyVariantRequest {
  variants?: Variants;
}

/** strategy record for strategy quotes. */
export interface StrategyVariant {
  /**
   * variant ID
   * The variantId parameter will be echoed so you can match the quotes to the request.
   */
  variantId?: VariantId;
  /**
   * strategy type (e.g. “Custom”)
   * See Strategy Types section for all allowed values.
   */
  strategy?: Strategy;
  /** array of Strategy legs. Maximum of 4 legs is allowed. */
  legs?: Legs;
}
