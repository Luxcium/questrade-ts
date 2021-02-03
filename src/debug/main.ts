import { questradeAPI } from '..';
import { ech0, echo, getMyToken } from '../resources/side-effects';
import { void0 } from '../utils';

const once = { onlyOnce: true };

async function main(): Promise<boolean> {
  echo(`Will execute main: ${once.onlyOnce}`);
  if (!once.onlyOnce) {
    return false;
  }
  once.onlyOnce = false;

  const { credentials, qtApi } = await questradeAPI({
    debug: 100,
    token: getMyToken,
  });

  void0(credentials);
  ech0(qtApi);

  return true;
}
main();
export { main };
