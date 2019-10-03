// import * as api from '../api';
import { testEnumerations } from '../';
// import * as apiUtils from '../api/utils';
// const log = apiUtils.log;
const timeout = 5000;

describe('Enumerations', () => {
  it(
    'should have a Currency Enumeration',
    async (done: any) => {
      const doneFnct = done;
      const enumTests = await testEnumerations();
      await enumTests.testCurrency(false);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a ListingExchange Enumeration',
    async (done: any) => {
      const doneFnct = done;
      const enumTests: any = await testEnumerations();

      await enumTests.testListingExchange(false);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a AccountType Enumeration',
    async (done: any) => {
      const doneFnct = done;
      const enumTests: any = await testEnumerations();

      await enumTests.testAccountType(false);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a ClientAccountType Enumeration',
    async (done: any) => {
      const doneFnct = done;
      const enumTests: any = await testEnumerations();

      await enumTests.testClientAccountType(false);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a AccountStatus Enumeration',
    async (done: any) => {
      const doneFnct = done;
      const enumTests: any = await testEnumerations();

      await enumTests.testAccountStatus(false);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a TickType Enumeration',
    async (done: any) => {
      const doneFnct = done;
      const enumTests: any = await testEnumerations();

      await enumTests.testTickType(false);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a OptionType Enumeration',
    async (done: any) => {
      const doneFnct = done;
      const enumTests: any = await testEnumerations();

      await enumTests.testOptionType(false);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a OptionDurationType Enumeration',
    async (done: any) => {
      const doneFnct = done;
      const enumTests: any = await testEnumerations();

      await enumTests.testOptionDurationType(false);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a OptionExerciseType Enumeration',
    async (done: any) => {
      const doneFnct = done;
      const enumTests: any = await testEnumerations();

      await enumTests.testOptionExerciseType(false);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a SecurityType Enumeration',
    async (done: any) => {
      const doneFnct = done;
      const enumTests: any = await testEnumerations();

      await enumTests.testSecurityType(false);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a OrderStateFilterType Enumeration',
    async (done: any) => {
      const doneFnct = done;
      const enumTests: any = await testEnumerations();

      await enumTests.testOrderStateFilterType(false);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a OrderAction Enumeration',
    async (done: any) => {
      const doneFnct = done;
      const enumTests: any = await testEnumerations();

      await enumTests.testOrderAction(false);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a OrderSide Enumeration',
    async (done: any) => {
      const doneFnct = done;
      const enumTests: any = await testEnumerations();

      await enumTests.testOrderSide(false);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a OrderType Enumeration',
    async (done: any) => {
      const doneFnct = done;
      const enumTests: any = await testEnumerations();

      await enumTests.testOrderType(false);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a OrderTimeInForce Enumeration',
    async (done: any) => {
      const doneFnct = done;
      const enumTests: any = await testEnumerations();

      await enumTests.testOrderTimeInForce(false);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a OrderState Enumeration',
    async (done: any) => {
      const doneFnct = done;
      const enumTests: any = await testEnumerations();

      await enumTests.testOrderState(false);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a HistoricalDataGranularity Enumeration',
    async (done: any) => {
      const doneFnct = done;
      const enumTests: any = await testEnumerations();

      await enumTests.testHistoricalDataGranularity(false);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a OrderClass Enumeration',
    async (done: any) => {
      const doneFnct = done;
      const enumTests: any = await testEnumerations();

      await enumTests.testOrderClass(false);
      doneFnct();
    },
    timeout
  );

  it(
    'Should have a StrategyTypes Enumeration',
    async (done: any) => {
      const doneFnct = done;
      const enumTests: any = await testEnumerations();

      await enumTests.testStrategyTypes(false);
      doneFnct();
    },
    timeout
  );
});
