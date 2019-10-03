import { testAll } from '../testExamples';
const timeout = 50000;
it(
  'should tast all',
  async (done: any) => {
    await testAll('408wO9My1ob41fxWAA3L9ApqqkefkOnr0');
    done();
  },
  timeout
);
