import { main } from './debug/redis-modeling';
import { ech0, errorlog } from './resources/side-effects';

try {
  main().catch(error => errorlog('PLAYGROUND MAIN:', error));
} catch (error) {
  ech0(error);
}
