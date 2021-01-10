import { sideEffects } from '../../../resources/side-effects';
import { testIt } from '../testingWithRamda';

const { echo } = sideEffects;

void echo('testIt()');

testIt();
