import { ech0, errorLog } from '../../resources/side-effects';
import { main } from './redis-modeling';

try {
  main().catch(error => errorLog('PLAYGROUND MAIN:', error));
} catch (error) {
  ech0(error);
}
