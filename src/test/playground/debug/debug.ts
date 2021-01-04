import { sideEffects } from '../../../default-behaviour';
import { testIt } from '../testingWithRamda';

const { echo } = sideEffects;

void echo('testIt()');

testIt();
