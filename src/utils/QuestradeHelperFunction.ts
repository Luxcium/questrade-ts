/** @format */

import { IQuestradeAPIOptions, QuestradeClass } from '../core/types';
export async function QuestradeHelperFunction(
  opts: IQuestradeAPIOptions,
  cb?: (qt: QuestradeClass) => Promise<QuestradeClass>
) {
  // tslint:disable-next-line: max-line-length
  //  Promise<QuestradeClass> (value?: QuestradeClass |  Promise<QuestradeClass> | undefined) => void
  return new Promise((
    resolve: (qt: QuestradeClass) => any /*  Promise<QuestradeClass> */,
    _reject: (error: Error) => any
  ) => {
    const qt = new QuestradeClass(opts);
    qt.on('ready', async () => {
      if (typeof cb === 'function') {
        console.log('ready', 'ready');
        return resolve(await cb(qt));
      }
      return resolve(qt);
    });
    // reject(new Error('cb is not a functions callback'));
  });
}
export const tokenConnection = async (token: string) => {
  const questrade = await QuestradeHelperFunction({ seedToken: token });
  return { questrade };
};

// (async () => {
// const seedToken: string = '';

//   try {
//     const quest = await QuestradeHelperFunction(
//       {
//         seedToken: 'CG2KoNyuaNM2ryQBfgBopwxZdbLP4cp30',
//       },
//       async qt => {
//         console.log('QT', qt);
//         return qt;
//       }
//     );
//     console.log('quest => aapl', (await quest.getEquitySymbols('AAPL'))[0]);
//     const { questrade } = await tokenConnection(seedToken);
//     console.log(
//       'questrade => aapl.description',
//       (await questrade.getEquitySymbols('AAPL'))[0].description
//     );
//   } catch (error) {
//     console.log('error.message', error.message);
//   }
// })(); /* .catch(err => console.log('err', err)); */

// // code to test async await from call back

// export const checkIfNumber = (numberCandidate: any, callback: any) => {
//   if (typeof numberCandidate === 'number') {
//     return callback(false, true);
//   }
//   return callback(true, false);
// };

// checkIfNumber('1', (err: any, _ok: any) => {
//   if (err) {
//     console.log('Is not a number');
//   } else {
//     console.log('Is a number');
//   }
// }); // logs "Is not a number"

// const checkIfNumberAgain = (numberCandidate: any, callback: any) => {
//   setTimeout(() => {
//     if (typeof numberCandidate === 'number') {
//       return callback(false, true);
//     }
//     return callback(true, false);
//   }, 1);
// };

// const result = checkIfNumberAgain('x', (err: any, _ok: any) => {
//   if (err) {
//     return 'Is not a number';
//   }
//   return 'Is a number';
// });

// console.log(result); // logs undefined

// export const checkIfNumberAgainAndAgain = async (numberCandidate: any) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof numberCandidate === 'number') {
//         return resolve();
//       }
//       return reject();
//     }, 1);
//   });
// };

// const resultAgain = checkIfNumberAgainAndAgain(4);
// resultAgain
//   .then((_ok: any) => {
//     console.log('Is a number');
//   })
//   .catch(_err => {
//     console.log('Is not a number');
//   }); // logs "Is a number"

// const checkIfNumberOneMoreTime = async (numberCandidate: any) => {
//   return new Promise((resolve, _reject) => {
//     if (typeof numberCandidate === 'number') {
//       return resolve(true);
//     }
//     return resolve(false);
//   });
// };

// const resultOneMoreTime = checkIfNumberOneMoreTime('word');
// resultOneMoreTime.then((status: any) => {
//   status ? console.log('Is a number') : console.log('Is not a number');
// });

// const checkIfNumberOneLastTime = async (numberCandidate: any) => {
//   return new Promise((resolve, _reject) => {
//     if (typeof numberCandidate === 'number') {
//       return resolve(true);
//     }
//     return resolve(false);
//   });
// };

// (async () => {
//   // async keyword so we are able to use await
//   // wait for a Promise to resolve
//   const data = await checkIfNumberOneLastTime(32);
//   // logs "Is a number"
//   data ? console.log('Is a number') : console.log('Is not a number');
// })();
