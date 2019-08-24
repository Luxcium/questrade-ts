/** @format */

import { QuestradeClass } from '../core/types';

export async function allOfGetOrder(qt: QuestradeClass, done: any) {
  const orders = await qt.getOrder(); //
  const getOrder = orders[0];
  console.log('\n\n\n\nGETORDER:');
  console.log('\n\ngetOrder.id:');
  console.log(getOrder.id);
  console.log('getOrder.symbol:');
  console.log(getOrder.symbol);
  console.log('getOrder.symbolId:');
  console.log(getOrder.symbolId);
  console.log('getOrder.totalQuantity:');
  console.log(getOrder.totalQuantity);
  console.log('getOrder.openQuantity:');
  console.log(getOrder.openQuantity);
  console.log('getOrder.filledQuantity:');
  console.log(getOrder.filledQuantity);
  console.log('getOrder.canceledQuantity:');
  console.log(getOrder.canceledQuantity);
  console.log('getOrder.side:');
  console.log(getOrder.side);
  console.log('getOrder.orderType:');
  console.log(getOrder.orderType);
  console.log('getOrder.limitPrice:');
  console.log(getOrder.limitPrice);
  console.log('getOrder.stopPrice:');
  console.log(getOrder.stopPrice);
  console.log('getOrder.isAllOrNone:');
  console.log(getOrder.isAllOrNone);
  console.log('getOrder.isAnonymous:');
  console.log(getOrder.isAnonymous);
  console.log('getOrder.icebergQuantity:');
  console.log(getOrder.icebergQuantity);
  console.log('getOrder.minQuantity:');
  console.log(getOrder.minQuantity);
  console.log('getOrder.avgExecPrice:');
  console.log(getOrder.avgExecPrice);
  console.log('getOrder.lastExecPrice:');
  console.log(getOrder.lastExecPrice);
  console.log('getOrder.source:');
  console.log(getOrder.source);
  console.log('getOrder.timeInForce:');
  console.log(getOrder.timeInForce);
  console.log('getOrder.gtdDate:');
  console.log(getOrder.gtdDate);
  console.log('getOrder.state:');
  console.log(getOrder.state);
  console.log('getOrder.clientReasonStr:');
  console.log(getOrder.clientReasonStr);
  console.log('getOrder.chainId:');
  console.log(getOrder.chainId);
  console.log('getOrder.creationTime:');
  console.log(getOrder.creationTime);
  console.log('getOrder.updateTime:');
  console.log(getOrder.updateTime);
  console.log('getOrder.notes:');
  console.log(getOrder.notes);
  console.log('getOrder.primaryRoute:');
  console.log(getOrder.primaryRoute);
  console.log('getOrder.secondaryRoute:');
  console.log(getOrder.secondaryRoute);
  console.log('getOrder.orderRoute:');
  console.log(getOrder.orderRoute);
  console.log('getOrder.venueHoldingOrder:');
  console.log(getOrder.venueHoldingOrder);
  console.log('getOrder.commissionCharged:');
  console.log(getOrder.commissionCharged);
  console.log('getOrder.exchangeOrderId:');
  console.log(getOrder.exchangeOrderId);
  console.log('getOrder.isSignificantShareholder:');
  console.log(getOrder.isSignificantShareholder);
  console.log('getOrder.isInsider:');
  console.log(getOrder.isInsider);
  console.log('getOrder.isLimitOffsetInDollar:');
  console.log(getOrder.isLimitOffsetInDollar);
  console.log('getOrder.userId:');
  console.log(getOrder.userId);
  console.log('getOrder.placementCommission:');
  console.log(getOrder.placementCommission);
  console.log('getOrder.legs:');
  console.log(getOrder.legs);
  console.log('getOrder.OrderLeg:');
  console.log(getOrder.OrderLeg);
  console.log('getOrder.strategyType:');
  console.log(getOrder.strategyType);
  console.log('getOrder.triggerStopPrice:');
  console.log(getOrder.triggerStopPrice);
  console.log('getOrder.orderGroupId:');
  console.log(getOrder.orderGroupId);
  console.log('getOrder.orderClass:');
  console.log(getOrder.orderClass);
  done();
}
