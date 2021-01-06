import { sideEffects } from '../../../resources/side-effects/default-behaviour';
import { testIt } from '../testingWithRamda';

const { echo } = sideEffects;

void echo('testIt()');

testIt();
