import { ech0, errorlog } from '../../resources/side-effects';
import { main } from './redis-modeling';

try {
  main().catch(error => errorlog('PLAYGROUND MAIN:', error));
} catch (error) {
  ech0(error);
}
