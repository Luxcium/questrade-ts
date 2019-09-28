// // tslint:disable: variable-name
// import { OrderStateFilterType } from 'questrade-api-enumerations';
// import { _balances, _getOrders, _getPrimaryAccountNumber } from '.';
// import { QtApi } from '../../../libraries';
// export const _accounts = (qtApi: QtApi) => ({
//   get: {
//     PrimaryAccountNumber: _getPrimaryAccountNumber(qtApi),
//     BALANCES: _balances(qtApi),
//     ORDERS: {
//       all: {
//         from: (startDate: string) => ({
//           to: (endDate: string) =>
//             _getOrders(qtApi)(startDate)(endDate)(OrderStateFilterType.ALL),
//         }),
//       },
//       closed: {
//         from: (startDate: string) => ({
//           to: (endDate: string) =>
//             _getOrders(qtApi)(startDate)(endDate)(OrderStateFilterType.CLOSED),
//         }),
//       },
//       open: {
//         from: (startDate: string) => ({
//           to: (endDate: string) =>
//             _getOrders(qtApi)(startDate)(endDate)(OrderStateFilterType.OPEN),
//         }),
//       },
//     },
//   },
// });
