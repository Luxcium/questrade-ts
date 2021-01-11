import { OrderSide } from 'questrade-api-enumerations';

import { IExecution } from '../../../../typescript';

export const execution: IExecution = {
  canadianExecutionFee: 0,
  commission: 6.45,
  exchangeExecId: '617869062',
  executionFee: 0,
  id: 466_390_918,
  legId: 0,
  notes: '',
  orderChainId: 583_583_078,
  orderId: 583_589_227,
  orderPlacementCommission: 0,
  parentId: 466_390_918,
  price: 0.18,
  quantity: 2,
  secFee: 0.000_745,
  side: OrderSide.STC,
  symbol: 'X4Oct19P11.00',
  symbolId: 26_984_775,
  timestamp: '2019-10-04T09:33:09.000000-04:00',
  totalCost: 36,
  venue: 'ROPT',
};
