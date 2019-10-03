// import * as api from '../api';
import { qtEnumerations } from 'questrade-api-enumerations';
import { testEnumerations } from './testExamples/testExamples';
const api: any = {};
api.Enumerations = qtEnumerations;
api.testEnumerations = testEnumerations as () => any;
// import * as apiUtils from '../api/utils';
// const log = apiUtils.log;
const timeout = 5000;

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
