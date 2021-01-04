import { OrderSide } from 'questrade-api-enumerations';

import { IExecution } from '../../../../typescript';

export const execution: IExecution = {
  symbol: 'X4Oct19P11.00',
  symbolId: 26_984_775,
  quantity: 2,
  side: OrderSide.STC,
  price: 0.18,
  id: 466_390_918,
  orderId: 583_589_227,
  orderChainId: 583_583_078,
  exchangeExecId: '617869062',
  timestamp: '2019-10-04T09:33:09.000000-04:00',
  notes: '',
  venue: 'ROPT',
  totalCost: 36,
  orderPlacementCommission: 0,
  commission: 6.45,
  executionFee: 0,
  secFee: 0.000_745,
  legId: 0,
  canadianExecutionFee: 0,
  parentId: 466_390_918,
};
