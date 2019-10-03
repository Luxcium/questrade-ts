import { utils } from '../../index';
// import {  } from '../../utils';
const day = utils.day;
const void0 = utils.void0;
const log = utils.log;
// import * as api from '../api';
// import * as apiCore from '../api/core';
// import * as _axiosApi from '../api/core/_axiosApi';
// import * as _credentialsFactory from '../api/core/_credentialsFactory';
// import * as _getQuestradeApi from '../api/core/_getQuestradeApi';
// import * as _marketsQuotesOptions from '../api/core/_getQuestradeApi/_marketsQuotesOptions';
// import * as apiUtils from '../api/utils';
// const log = apiUtils.log;
const timeout = 10000;
describe('Testing utils functions', () => {
  it(
    'should convert days to miliseconds',
    () => {
      expect(day(100)).toBe(100 * 24 * 60 * 60 * 1000);
    },
    timeout
  );
  it(
    'void0 return undefined',
    () => {
      expect(void0(100)).toBe(undefined);
    },
    timeout
  );

  it(
    'log is an alias to console.log',
    () => {
      expect(log(100)).toBe(undefined);
    },
    timeout
  );
});
//   it(
//     'should log and return void',
//     () => {
//       expect(api.log(api.id0(() => 100))).toBe(undefined);
//     },
//     timeout
//   );
//   it(
//     'should vvoid and return undefined',
//     () => {
//       expect(api.void0(api.id0(() => 100))).toBe(undefined);
//     },
//     timeout
//   );

//   it.skip(
//     'should ',
//     async (done: any) => {
//       log(apiCore._defaultCredentials);
//       apiUtils.log(api.testEnumerations(api.Enumerations));
//       apiUtils.void0(apiCore);
//       // apiUtils.void0();
//       // await apiUtils.testAll('410AeVxJ1W8e01YCTWTh8GGrfMEZ7k5r0', done)

//       apiUtils.void0(_axiosApi);
//       apiUtils.void0(_credentialsFactory);
//       apiUtils.void0(_getQuestradeApi);
//       apiUtils.void0(_marketsQuotesOptions);
//       apiUtils.void0();
//       done();
//     },
//     timeout
//   );
// });

// // describe('Name of the group', () => {
// //   it(
// //     'should test Enumerations Enumeration  ',
// //     async (done: any) => {
// //       let doneFnct = done;
// //       const enumTests: any = await api.testEnumerations(api.Enumerations);
// //       doneFnct = await enumTests.testCurrency(doneFnct);
// //       doneFnct();
// //     },
// //     timeout
// //   );

// //   it(
// //     'Should test ListingExchange Enumeration  ',
// //     async (done: any) => {
// //       let doneFnct = done;
// //       const enumTests: any = await api.testEnumerations(api.Enumerations);

// //       doneFnct = await enumTests.testListingExchange(doneFnct);
// //       doneFnct();
// //     },
// //     timeout
// //   );

// //   it(
// //     'Should test AccountType Enumeration  ',
// //     async (done: any) => {
// //       let doneFnct = done;
// //       const enumTests: any = await api.testEnumerations(api.Enumerations);

// //       doneFnct = await enumTests.testAccountType(doneFnct);
// //       doneFnct();
// //     },
// //     timeout
// //   );

// //   it(
// //     'Should test ClientAccountType Enumeration  ',
// //     async (done: any) => {
// //       let doneFnct = done;
// //       const enumTests: any = await api.testEnumerations(api.Enumerations);

// //       doneFnct = await enumTests.testClientAccountType(doneFnct);
// //       doneFnct();
// //     },
// //     timeout
// //   );

// //   it(
// //     'Should test AccountStatus Enumeration  ',
// //     async (done: any) => {
// //       let doneFnct = done;
// //       const enumTests: any = await api.testEnumerations(api.Enumerations);

// //       doneFnct = await enumTests.testAccountStatus(doneFnct);
// //       doneFnct();
// //     },
// //     timeout
// //   );

// //   it(
// //     'Should test TickType Enumeration  ',
// //     async (done: any) => {
// //       let doneFnct = done;
// //       const enumTests: any = await api.testEnumerations(api.Enumerations);

// //       doneFnct = await enumTests.testTickType(doneFnct);
// //       doneFnct();
// //     },
// //     timeout
// //   );

// //   it(
// //     'Should test OptionType Enumeration  ',
// //     async (done: any) => {
// //       let doneFnct = done;
// //       const enumTests: any = await api.testEnumerations(api.Enumerations);

// //       doneFnct = await enumTests.testOptionType(doneFnct);
// //       doneFnct();
// //     },
// //     timeout
// //   );

// //   it(
// //     'Should test OptionDurationType Enumeration  ',
// //     async (done: any) => {
// //       let doneFnct = done;
// //       const enumTests: any = await api.testEnumerations(api.Enumerations);

// //       doneFnct = await enumTests.testOptionDurationType(doneFnct);
// //       doneFnct();
// //     },
// //     timeout
// //   );

// //   it(
// //     'Should test OptionExerciseType Enumeration  ',
// //     async (done: any) => {
// //       let doneFnct = done;
// //       const enumTests: any = await api.testEnumerations(api.Enumerations);

// //       doneFnct = await enumTests.testOptionExerciseType(doneFnct);
// //       doneFnct();
// //     },
// //     timeout
// //   );

// //   it(
// //     'Should test SecurityType Enumeration  ',
// //     async (done: any) => {
// //       let doneFnct = done;
// //       const enumTests: any = await api.testEnumerations(api.Enumerations);

// //       doneFnct = await enumTests.testSecurityType(doneFnct);
// //       doneFnct();
// //     },
// //     timeout
// //   );

// //   it(
// //     'Should test OrderStateFilterType Enumeration  ',
// //     async (done: any) => {
// //       let doneFnct = done;
// //       const enumTests: any = await api.testEnumerations(api.Enumerations);

// //       doneFnct = await enumTests.testOrderStateFilterType(doneFnct);
// //       doneFnct();
// //     },
// //     timeout
// //   );

// //   it(
// //     'Should test OrderAction Enumeration  ',
// //     async (done: any) => {
// //       let doneFnct = done;
// //       const enumTests: any = await api.testEnumerations(api.Enumerations);

// //       doneFnct = await enumTests.testOrderAction(doneFnct);
// //       doneFnct();
// //     },
// //     timeout
// //   );

// //   it(
// //     'Should test OrderSide Enumeration  ',
// //     async (done: any) => {
// //       let doneFnct = done;
// //       const enumTests: any = await api.testEnumerations(api.Enumerations);

// //       doneFnct = await enumTests.testOrderSide(doneFnct);
// //       doneFnct();
// //     },
// //     timeout
// //   );

// //   it(
// //     'Should test OrderType Enumeration  ',
// //     async (done: any) => {
// //       let doneFnct = done;
// //       const enumTests: any = await api.testEnumerations(api.Enumerations);

// //       doneFnct = await enumTests.testOrderType(doneFnct);
// //       doneFnct();
// //     },
// //     timeout
// //   );

// //   it(
// //     'Should test OrderTimeInForce Enumeration  ',
// //     async (done: any) => {
// //       let doneFnct = done;
// //       const enumTests: any = await api.testEnumerations(api.Enumerations);

// //       doneFnct = await enumTests.testOrderTimeInForce(doneFnct);
// //       doneFnct();
// //     },
// //     timeout
// //   );

// //   it(
// //     'Should test OrderState Enumeration  ',
// //     async (done: any) => {
// //       let doneFnct = done;
// //       const enumTests: any = await api.testEnumerations(api.Enumerations);

// //       doneFnct = await enumTests.testOrderState(doneFnct);
// //       doneFnct();
// //     },
// //     timeout
// //   );

// //   it(
// //     'Should test HistoricalDataGranularity Enumeration  ',
// //     async (done: any) => {
// //       let doneFnct = done;
// //       const enumTests: any = await api.testEnumerations(api.Enumerations);

// //       doneFnct = await enumTests.testHistoricalDataGranularity(doneFnct);
// //       doneFnct();
// //     },
// //     timeout
// //   );

// //   it(
// //     'Should test OrderClass Enumeration  ',
// //     async (done: any) => {
// //       let doneFnct = done;
// //       const enumTests: any = await api.testEnumerations(api.Enumerations);

// //       doneFnct = await enumTests.testOrderClass(doneFnct);
// //       doneFnct();
// //     },
// //     timeout
// //   );

// //   it(
// //     'Should test StrategyTypes Enumeration  ',
// //     async (done: any) => {
// //       let doneFnct = done;
// //       const enumTests: any = await api.testEnumerations(api.Enumerations);

// //       doneFnct = await enumTests.testStrategyTypes(doneFnct);
// //       doneFnct();
// //     },
// //     timeout
// //   );
// // });

// /*

//     doneFnct();

//   }, timeout);

//    it('should ', async (done: any) => {
//     let doneFnct = done;
//     const enumTests: any = await api.testEnumerations(api.Enumerations);

//     // apiUtils.void0(apiCore);
//     // apiUtils.void0();
//     // await apiUtils.testAll('410AeVxJ1W8e01YCTWTh8GGrfMEZ7k5r0', done)

//     // apiUtils.void0(_axiosApi);
//     // apiUtils.void0(_credentialsFactory);
//     // apiUtils.void0(_getQuestradeApi);
//     // apiUtils.void0(_marketsQuotesOptions);
//     // apiUtils.void0();
// afterAll(fn, timeout)
// afterEach(fn, timeout)
// beforeAll(fn, timeout)
// beforeEach(fn, timeout)
// describe(name, fn)
// describe.each(table)(name, fn, timeout)
// describe.only(name, fn)
// describe.only.each(table)(name, fn)
// describe.skip(name, fn)
// describe.skip.each(table)(name, fn)
// test(name, fn, timeout)
// test.each(table)(name, fn, timeout)
// test.only(name, fn, timeout)
// test.only.each(table)(name, fn)
// test.skip(name, fn)
// test.skip.each(table)(name, fn)
// test.todo(name)

// import    * as jest  from 'jest';
// import { tokenConnection } from '../api';
// test('should exist at least', async (done: any) => {
//   const { qt } = await tokenConnection('mock');
//   await qt.getServerTime();
//   await questrade('').catch(async (error: any) => {
//   await console.warn(error.message);
//   done();
// });

// piUrl: '',
//       apiVersion: 'v1',
//       authUrl: '',
//       expiresAt: undefined,
//       tokenExpiration: undefined,
//       expiresIn: 0,
//       keyDir: './keys',
//       keyFile: '',
//       practice: false,
//       refreshToken: '',
//       seedToken: '',
//       serverTime: undefined,
//       tokenType: '',
//       toValue: [Function: toValue],
//       toString: [Function: toString] }

//       -------------------------------------------------
// File
// -------------------------------------------------
// All files
// api
// index.ts

// testExamples.ts

// index.ts

// index.ts

// _axiosAccountGetApi.ts
// _axiosApi.ts
// _axiosApiPost.ts
// _axiosGetApi.ts
// _endpointFormatAccount.ts

// index.ts

// index.ts

// index.ts

// index.ts

// id0.ts
// mkdirp.ts
// timeutil.ts

// */
/*



    doneFnct();

  }, timeout);

   it('should ', async (done: any) => {
    let doneFnct = done;
    const enumTests: any = await api.testEnumerations(api.Enumerations);

    // apiUtils.void0(apiCore);
    // apiUtils.void0();
    // await apiUtils.testAll('410AeVxJ1W8e01YCTWTh8GGrfMEZ7k5r0', done)

    // apiUtils.void0(_axiosApi);
    // apiUtils.void0(_credentialsFactory);
    // apiUtils.void0(_getQuestradeApi);
    // apiUtils.void0(_marketsQuotesOptions);
    // apiUtils.void0();
afterAll(fn, timeout)
afterEach(fn, timeout)
beforeAll(fn, timeout)
beforeEach(fn, timeout)
describe(name, fn)
describe.each(table)(name, fn, timeout)
describe.only(name, fn)
describe.only.each(table)(name, fn)
describe.skip(name, fn)
describe.skip.each(table)(name, fn)
test(name, fn, timeout)
test.each(table)(name, fn, timeout)
test.only(name, fn, timeout)
test.only.each(table)(name, fn)
test.skip(name, fn)
test.skip.each(table)(name, fn)
test.todo(name)

import    * as jest  from 'jest';
import { tokenConnection } from '../api';
test('should exist at least', async (done: any) => {
  const { qt } = await tokenConnection('mock');
  await qt.getServerTime();
  await questrade('').catch(async (error: any) => {
  await console.warn(error.message);
  done();
});

piUrl: '',
      apiVersion: 'v1',
      authUrl: '',
      expiresAt: undefined,
      tokenExpiration: undefined,
      expiresIn: 0,
      keyDir: './keys',
      keyFile: '',
      practice: false,
      refreshToken: '',
      seedToken: '',
      serverTime: undefined,
      tokenType: '',
      toValue: [Function: toValue],
      toString: [Function: toString] }

      -------------------------------------------------
File
-------------------------------------------------
All files
api
index.ts

testExamples.ts


index.ts


index.ts

_axiosAccountGetApi.ts
_axiosApi.ts
_axiosApiPost.ts
_axiosGetApi.ts
_endpointFormatAccount.ts


index.ts


index.ts


index.ts


index.ts

id0.ts
mkdirp.ts
timeutil.ts


*/
