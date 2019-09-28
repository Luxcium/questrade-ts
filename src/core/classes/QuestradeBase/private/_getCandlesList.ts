// // !! _getCandles
// /** _getCandles */
// const _getCandles = (credentials: Credentials) => (startDate: string) => (
//   endDate: string
// ) => (interval: string = 'OneDay') => async (
//   symbolID: number[]
// ): Promise<ICandle[][]> =>
//   Promise.all(
//     symbolID.map(
//       async item =>
//         (await _axiosGetApi(credentials)<ICandles>(
//           `/markets/candles/${item}?startTime=${startDate}&endTime=${endDate}&interval=${interval}`
//         )()).candles
//     )
//   );
