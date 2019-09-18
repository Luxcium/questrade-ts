// // - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// // - Licensed under the MIT License.
// // - See License.txt in the project root for license information.
// import { _accountEndPoinFactory } from '.';
// import { QtApi } from '../../../libraries';
// import { IBalances, ICurencyBalance } from '../../../types';

// export const _getBalances = (qtApi: QtApi) => async () => {
//   let {
//     perCurrencyBalances,
//     combinedBalances,
//     sodPerCurrencyBalances,
//     sodCombinedBalances,
//   } = (await _accountEndPoinFactory<IBalances>('/balances')(qtApi)()) as any;
//   [
//     perCurrencyBalances,
//     combinedBalances,
//     sodPerCurrencyBalances,
//     sodCombinedBalances,
//   ] = [
//     perCurrencyBalances,
//     combinedBalances,
//     sodPerCurrencyBalances,
//     sodCombinedBalances,
//   ].map(item => {
//     const [CAD, USD] = item;
//     return { CAD, USD };
//   });
//   return {
//     perCurrencyBalances: perCurrencyBalances as ICurencyBalance,
//     combinedBalances: combinedBalances as ICurencyBalance,
//     sodPerCurrencyBalances: sodPerCurrencyBalances as ICurencyBalance,
//     sodCombinedBalances: sodCombinedBalances as ICurencyBalance,
//   };
// };
