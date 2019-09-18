// // - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// // - Licensed under the MIT License.
// // - See License.txt in the project root for license information.
// import {
//   _getAccounts,
//   _getActivities,
//   _getBalances,
//   _getExecutions,
//   _getOrders,
//   _getTime,
// } from '.';
// import { QtApi } from '../../../libraries';

// export const _rawApiAccountCalls = () => {
//   return {
//     ACTIVITIES: _getActivities,
//     ORDERS: _getOrders,
//     EXECUTIONS: _getExecutions,
//     BALANCES: _getBalances,
//     LIST_ACCOUNTS: _getAccounts,
//     TIME: _getTime,
//   };
// };

// export const _getApiAccountCalls = (qtApi: QtApi) => {
//   return {
//     activities: _getActivities(qtApi),
//     orders: _getOrders(qtApi),
//     executions: _getExecutions(qtApi),
//     balances: _getBalances(qtApi),
//     listAccounts: _getAccounts(qtApi),
//     time: _getTime(qtApi),
//   };
// };
