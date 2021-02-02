import { questradeAPI } from '..';
import { ech0, getMyToken } from '../resources/side-effects';
import { void0 } from '../utils';

const once = { onlyOnce: false };
async function main() {
  // if (once.onlyOnce) process.exit;

  const { credentials, qtApi } = await questradeAPI({ token: getMyToken });
  void0(credentials);
  ech0(qtApi);

  once.onlyOnce = true;
  return true;
}

main();
// main();
export { main };
