import { OrderSide } from 'questrade-api-enumerations';

export interface IExecutions {
  executions: IExecution[];
}

export interface IExecution {
  /** Execution symbol. */
  symbol: string;
  /** Internal symbol identifier */
  symbolId: number;
  /** Execution quantity. */
  quantity: number;

  /**
   * Client side of the order to which execution belongs.
   * See Client Order Side section for all allowed values.
   */
  side: OrderSide;
  /**
   * Execution price.
   */
  price: number;
  /** Internal identifier of the execution. */
  id: number;
  /** Internal identifier of the order to which the execution belongs. */
  orderId: number;
  /**
   * Internal identifier of the order chain to
   * which the execution belongs.
   */
  orderChainId: number;
  /** Identifier of the execution at the market where it originated. */
  exchangeExecId: string;
  /** Execution timestamp. */
  timestamp: Date | string;
  /** Manual notes that may have been entered by Trade Desk staff */
  notes: string;
  /** Trading venue where execution originated. */
  venue: string;
  /** Execution cost (price x quantity). */
  totalCost: number;
  /** Questrade commission for orders placed with Trade Desk. */
  orderPlacementCommission: number;
  /** Questrade commission. */
  commission: number;
  /** Liquidity fee charged by execution venue. */
  executionFee: number;
  /** SEC fee charged on all sales of US securities. */
  secFee: number;
  /** Additional execution fee charged by TSX (if applicable). */
  canadianExecutionFee: number;
  /** Internal identifierof the parent order. */
  parentId: number;
  legId?: number;
}
