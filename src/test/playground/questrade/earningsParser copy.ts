// tslint:disable: no-any

import { earningList01 } from './earnings';
import ramda from 'ramda';
export const R = ramda;
export const {} = ramda;
export { earningList01 };

export const tab = '\t';
export const newLine = '\n';

export const headers: string[] = [
  'companySymbol',
  'companyName',
  'callTime',
  'estimateEPS',
  'reportedEPS',
  'surprisePercent',
];

export const C = <S, U, V>(f: (b: U) => (a: S) => V) => (x: S) => (y: U) =>
  f(y)(x);
export const split = R.split;
export const zip = R.zip;
export const map = R.map;
export const tail = R.tail;

export const splitTabs = split(tab);
// variableName 

export const splitNewLines = split(newLine);
export const splitTabsMaper = map(splitTabs);
export const ziper = C(zip);
export const ziped = ziper([])([]);
export const  = 
export const getEarningsRaw = R.compose(
  map,
  (st: string[][]) => (map(ziped)) => st,
  tail,
  splitTabsMaper,
  splitNewLines
);

// const afterClose = 'After Market Close';
// const timeNotSuplied = 'Time Not Supplied';
// const beforeOpen = 'Before Market Open';
// const tas = 'TAS';

// // type GetCallTime = <T>(obj: Record<'callTime', T>) => T;

// const listFilter = (
//   list: any[],
//   getCallTime: <T>(obj: Record<'callTime', T>) => T,
//   stringToCompare: string
// ) => {
//   return list.filter(item => {
//     return getCallTime(item) === stringToCompare;
//   });
// };

// const { compose, prop } = ramda;

// const myGetCallTime = prop('callTime');

// const listPerCallTime = (list: any[], callTime: string) =>
//   listFilter(list, myGetCallTime, callTime);

// export const splitToListOfArrays = (earningList: string) => {
//   return earningList.split('\n').map(item => item.split('\t'));
//   // return tail;
// };

// export const getAfterClose = (myList: any[]) =>
//   listPerCallTime(myList, afterClose);
// export const getTimeNotSuplied = (myList: any[]) =>
//   listPerCallTime(myList, timeNotSuplied);
// export const getBeforeOpen = (myList: any[]) =>
//   listPerCallTime(myList, beforeOpen);
// export const getTas = (myList: any[]) => listPerCallTime(myList, tas);

// export const curListPerCallTime = R.curry(listPerCallTime);
// // export const myMap = map(splitTabs);
// export const map2 = R.map;

// export const tailSubForEach = (subObject: any) => (
//   subItem: string,
//   i: number
// ) => {
//   subObject[headers[i]] = subItem === '-' ? null : subItem;
//   return void 0;
// };
// export const mapTail = (myTail: string[]) => myTail;

// const getMyList = (myTail: string[][]) => {
//   return myTail.map(item => {
//     zipHead(item);
//   });
// };

// const split = R.split;
// const zip = R.zip;
// const map = R.map;
// const tail = R.tail;

// const tab = '\t';
// const newLine = '\n';

// const headers: string[] = [
//   'companySymbol',
//   'companyName',
//   'callTime',
//   'estimateEPS',
//   'reportedEPS',
//   'surprisePercent',
// ];

// export const Tx = R.curry((x, f) => f(x));
// export const C2 = <S, U, V>(f: (a: S) => (b: U) => V) => (x: S) => (y: U) =>
//   f(x)(y);
// export const C = <S, U, V>(f: (b: U) => (a: S) => V) => (x: S) => (y: U) =>
//   f(y)(x);
// // ##########---------------------------------------------- -->
// const splitNewLines = split(newLine);
// const splitTabs = split(tab);
// export const maper = C2(map);
// export const splitTabsMaper = maper(splitTabs);

// export const ziper = C(zip);
// export const ziped = ziper([])([]);
// const zipHead = zip(headers);
// const mapZipHead = map(zipHead);

// /*  TENTATIVE  */
// export const composition = compose(
//   compose(
//     mapZipHead,
//     tail,
//     splitTabsMaper,
//     splitNewLines
//   )
// );
// // import { earningList01 } from './earnings';
// const myResult = composition(earningList01);
// console.log(myResult);
// // tenta1(earningList01)
// // export const pipeTentativ = R.pipe(splitNewLines,map)
// // export const tentative = compose(
// //   getMyList,
// //   tail,
// //   splitTabs
// //   // myMap,

// //   // splitNewLines
// //   // splitToListOfArrays
// // );

// export const listCallTime = (earningList: string) => {
//   const [, ...myTail] = earningList.split('\n').map(item => item.split('\t'));

//   const myList = getMyList(myTail);

//   return {
//     afterMarketClose() {
//       return listPerCallTime(myList, afterClose);
//     },
//     timeNotSupplied() {
//       return listPerCallTime(myList, timeNotSuplied);
//     },
//     beforeMarketOpen() {
//       return listPerCallTime(myList, beforeOpen);
//     },
//     tas() {
//       return listPerCallTime(myList, tas);
//     },
//   };
// };
// console.log(listCallTime(earningList01).beforeMarketOpen());
