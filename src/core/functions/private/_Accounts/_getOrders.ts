// // - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// // - Licensed under the MIT License.
// // - See License.txt in the project root for license information.
// import { OrderStateFilterType } from 'questrade-api-enumerations';
// import { _accountEndPoinFactory } from '.';
// import { QtApi } from '../../../libraries';
// import { IOrders } from '../../../types';

// export const _getOrders = (qtApi: QtApi) => (
//   orderStateFilterType?: OrderStateFilterType
// ) => (startDate?: string) => (endDate?: string) => async (): Promise<
//   IOrders
// > => {
//   let stateFilter = '';
//   if (!!orderStateFilterType) {
//     stateFilter = `stateFilter=${orderStateFilterType}`;
//   }
//   let requstRange = '';
//   if (startDate && endDate) {
//     requstRange = `startTime=${new Date(
//       startDate
//     ).toISOString()}&endTime=${new Date(endDate).toISOString()}`;
//   }
//   return _accountEndPoinFactory<Promise<IOrders>>(
//     `/orders?${stateFilter}&${requstRange}`
//   )(qtApi)();
// };
