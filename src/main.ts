import { main } from './debug/main';
import { ech0, errorLog } from './resources/side-effects';

try {
  main().catch(error => errorLog('PLAYGROUND MAIN:', error));
} catch (error) {
  ech0(error);
}
