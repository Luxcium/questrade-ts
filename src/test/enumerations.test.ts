import * as api from '../api';

// import * as apiUtils from '../api/utils';
// const log = apiUtils.log;
const timeout = 50000;

describe('Enumerations', () => {
  it(
    'should have a Currency Enumeration',
    async (done: any) => {
      let doneFnct = done;
      const enumTests: any = await api.testEnumerations(api.Enumerations);
      doneFnct = await enumTests.testCurrency(doneFnct);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a ListingExchange Enumeration',
    async (done: any) => {
      let doneFnct = done;
      const enumTests: any = await api.testEnumerations(api.Enumerations);

      doneFnct = await enumTests.testListingExchange(doneFnct);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a AccountType Enumeration',
    async (done: any) => {
      let doneFnct = done;
      const enumTests: any = await api.testEnumerations(api.Enumerations);

      doneFnct = await enumTests.testAccountType(doneFnct);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a ClientAccountType Enumeration',
    async (done: any) => {
      let doneFnct = done;
      const enumTests: any = await api.testEnumerations(api.Enumerations);

      doneFnct = await enumTests.testClientAccountType(doneFnct);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a AccountStatus Enumeration',
    async (done: any) => {
      let doneFnct = done;
      const enumTests: any = await api.testEnumerations(api.Enumerations);

      doneFnct = await enumTests.testAccountStatus(doneFnct);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a TickType Enumeration',
    async (done: any) => {
      let doneFnct = done;
      const enumTests: any = await api.testEnumerations(api.Enumerations);

      doneFnct = await enumTests.testTickType(doneFnct);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a OptionType Enumeration',
    async (done: any) => {
      let doneFnct = done;
      const enumTests: any = await api.testEnumerations(api.Enumerations);

      doneFnct = await enumTests.testOptionType(doneFnct);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a OptionDurationType Enumeration',
    async (done: any) => {
      let doneFnct = done;
      const enumTests: any = await api.testEnumerations(api.Enumerations);

      doneFnct = await enumTests.testOptionDurationType(doneFnct);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a OptionExerciseType Enumeration',
    async (done: any) => {
      let doneFnct = done;
      const enumTests: any = await api.testEnumerations(api.Enumerations);

      doneFnct = await enumTests.testOptionExerciseType(doneFnct);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a SecurityType Enumeration',
    async (done: any) => {
      let doneFnct = done;
      const enumTests: any = await api.testEnumerations(api.Enumerations);

      doneFnct = await enumTests.testSecurityType(doneFnct);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a OrderStateFilterType Enumeration',
    async (done: any) => {
      let doneFnct = done;
      const enumTests: any = await api.testEnumerations(api.Enumerations);

      doneFnct = await enumTests.testOrderStateFilterType(doneFnct);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a OrderAction Enumeration',
    async (done: any) => {
      let doneFnct = done;
      const enumTests: any = await api.testEnumerations(api.Enumerations);

      doneFnct = await enumTests.testOrderAction(doneFnct);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a OrderSide Enumeration',
    async (done: any) => {
      let doneFnct = done;
      const enumTests: any = await api.testEnumerations(api.Enumerations);

      doneFnct = await enumTests.testOrderSide(doneFnct);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a OrderType Enumeration',
    async (done: any) => {
      let doneFnct = done;
      const enumTests: any = await api.testEnumerations(api.Enumerations);

      doneFnct = await enumTests.testOrderType(doneFnct);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a OrderTimeInForce Enumeration',
    async (done: any) => {
      let doneFnct = done;
      const enumTests: any = await api.testEnumerations(api.Enumerations);

      doneFnct = await enumTests.testOrderTimeInForce(doneFnct);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a OrderState Enumeration',
    async (done: any) => {
      let doneFnct = done;
      const enumTests: any = await api.testEnumerations(api.Enumerations);

      doneFnct = await enumTests.testOrderState(doneFnct);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a HistoricalDataGranularity Enumeration',
    async (done: any) => {
      let doneFnct = done;
      const enumTests: any = await api.testEnumerations(api.Enumerations);

      doneFnct = await enumTests.testHistoricalDataGranularity(doneFnct);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a OrderClass Enumeration',
    async (done: any) => {
      let doneFnct = done;
      const enumTests: any = await api.testEnumerations(api.Enumerations);

      doneFnct = await enumTests.testOrderClass(doneFnct);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a StrategyTypes Enumeration',
    async (done: any) => {
      let doneFnct = done;
      const enumTests: any = await api.testEnumerations(api.Enumerations);

      doneFnct = await enumTests.testStrategyTypes(doneFnct);
      doneFnct();
    },
    timeout
  );
});

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
