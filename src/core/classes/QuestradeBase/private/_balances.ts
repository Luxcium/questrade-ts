// const _balances = (credentials: Credentials) => {
//   const combinedCADCurrent = async () =>
//     (await _getBalances(credentials)()).combinedBalances.USD;
//   const combinedUSDCurrent = async () =>
//     (await _getBalances(credentials)).combinedBalances.USD;
//   const CADCurrent = async () =>
//     (await _getBalances(credentials)).perCurrencyBalances.CAD;
//   const USDCurrent = async () =>
//     (await _getBalances(credentials)).perCurrencyBalances.USD;
//   const combinedCADStartOfDay = async () =>
//     (await _getBalances(credentials)).sodCombinedBalances.CAD;
//   const combinedUSDStartOfDay = async () =>
//     (await _getBalances(credentials)).sodCombinedBalances.USD;
//   const CADStartOfDay = async () =>
//     (await _getBalances(credentials)).sodPerCurrencyBalances.CAD;
//   const USDStartOfDay = async () =>
//     (await _getBalances(credentials)).sodPerCurrencyBalances.USD;

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
