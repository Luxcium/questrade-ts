import { day } from '.';

export function timeUtil() {
  //
}
let startDate = '2019-08-25';
let endDate = '2019-09-14T00:00:00.000000-05:00';
const now = Date.now;
export const dates = [
  startDate,
  new Date(now()).toISOString(),
  new Date(now()).toUTCString(),
  new Date(now()).toString(),
  new Date(now()).toLocaleString(),
  new Date(now()).toJSON(),
  new Date(startDate).toISOString(),
  new Date(startDate).toUTCString(),
  new Date(endDate).toString(),
  new Date(startDate).toLocaleString(),
  new Date(startDate).toJSON(),
];
const offset = 9;
startDate = `2019-${offset}-13`;
endDate = `2019-${offset}-14`;

export const endpointFormatDateTool = (
  startTime: string,
  endTime: string
): string => {
  return `startTime=${dateToString(startTime)}&endTime=${dateToString(
    endTime
  )}&`;
};
export const dateISOStringNow = () => new Date(Date.now()).toISOString();
export const dateNumericNow = () => new Date(Date.now()).getTime();

export const dateToString = (dateTime: string | number): string =>
  new Date(dateTime).toISOString();

export const dateToNumeric = (dateTime: string): number =>
  new Date(dateTime).getTime();

export const rangeTool = (startTime?: string | null) => (
  endTime?: string | null
) => (numberOfDays?: number | null) => {
  const days = !!numberOfDays ? numberOfDays : 0;
  const endValue = !endTime ? dateNumericNow() : dateToNumeric(endTime);
  const startValue = !startTime ? dateNumericNow() : dateToNumeric(startTime);

  return [dateToString(endValue), dateToString(startValue + day(days))];
};

// endpointFormatDateTool(startTime, endTime);

// import { questrade } from '../../classes/questradeBase';
// questrade('0I55OUTM7zHQZbG9AiwA5vY3zQY6W6qt0').then(
//   async will => console.log(will)
// await will.get.orders(startDate, endDate)(), // .reduce(
// will.get.current.accountNumber(),
// will.get.markets
// await will.get.supported.markets(),
// await will.get.market.quotes([9292, 9292])
// (pre: number, curent, _index) =>
// console.log('\n', each.description, '\n')
// {
//   const void0: unknown =
//   if (!!curent.commission.valueOf()) console.log(curent.commission);
//   return curent.commission + pre;
//  },
// 0
// ()
// );
// );
// date :
// day
// month
// year
// 2014-01-02T00:00:00.000000-05:00
// 2019-09-14T09:07:37.461Z
