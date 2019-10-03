import { testAll } from '../testExamples';
const timeout = 50000;
it(
  'should tast all',
  () => {
    testAll();
  },
  timeout
);
