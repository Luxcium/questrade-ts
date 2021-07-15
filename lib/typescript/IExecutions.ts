import { OrderSide } from 'questrade-api-enumerations';

export interface IExecutions {
  readonly executions: IExecution[];
}

export interface IExecution {
  /** execution symbol. */
  readonly symbol: string;
  /** internal symbol identifier */
  readonly symbolId: number;
  /** execution quantity. */
  readonly quantity: number;

  /**
   * client side of the order to which execution belongs.
   * See Client Order Side section for all allowed values.
   */
  readonly side: OrderSide;
  /**
   * execution price.
   */
  readonly price: number;
  /** internal identifier of the execution. */
  readonly id: number;
  /** internal identifier of the order to which the execution belongs. */
  readonly orderId: number;
  /**
   * internal identifier of the order chain to
   * which the execution belongs.
   */
  readonly orderChainId: number;
  /** identifier of the execution at the market where it originated. */
  readonly exchangeExecId: string;
  /** execution timestamp. */
  readonly timestamp: Date | string;
  /** manual notes that may have been entered by Trade Desk staff */
  readonly notes: string;
  /** trading venue where execution originated. */
  readonly venue: string;
  /** execution cost (price x quantity). */
  readonly totalCost: number;
  /** questrade commission for orders placed with Trade Desk. */
  readonly orderPlacementCommission: number;
  /** questrade commission. */
  readonly commission: number;
  /** liquidity fee charged by execution venue. */
  readonly executionFee: number;
  /** sEC fee charged on all sales of US securities. */
  readonly secFee: number;
  /** additional execution fee charged by TSX (if applicable). */
  readonly canadianExecutionFee: number;
  /** internal identifierof the parent order. */
  readonly parentId: number;
  readonly legId?: number;
}
