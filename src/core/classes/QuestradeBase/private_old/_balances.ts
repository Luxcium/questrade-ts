// // tslint:disable: variable-name
// export const _balances = () => {
//   const combinedCADCurrent = async () =>
//     (await _getBalances()).combinedBalances.USD;
//   const combinedUSDCurrent = async () =>
//     (await _getBalances()).combinedBalances.USD;
//   const CADCurrent = async () =>
//     (await _getBalances()).perCurrencyBalances.CAD;
//   const USDCurrent = async () =>
//     (await _getBalances()).perCurrencyBalances.USD;
//   const combinedCADStartOfDay = async () =>
//     (await _getBalances()).sodCombinedBalances.CAD;
//   const combinedUSDStartOfDay = async () =>
//     (await _getBalances()).sodCombinedBalances.USD;
//   const CADStartOfDay = async () =>
//     (await _getBalances()).sodPerCurrencyBalances.CAD;
//   const USDStartOfDay = async () =>
//     (await _getBalances()).sodPerCurrencyBalances.USD;

//   return {
//     current: {
//       CAD: CADCurrent,
//       USD: USDCurrent,
//       allInCAD: combinedCADCurrent,
//       allInUSD: combinedUSDCurrent,
//     },
//     startOfDay: {
//       CAD: CADStartOfDay,
//       USD: USDStartOfDay,
//       allInCAD: combinedCADStartOfDay,
//       allInUSD: combinedUSDStartOfDay,
//     },
//   };
// };
