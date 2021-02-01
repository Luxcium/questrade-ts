import { questradeAPI } from '..';
import { getMyToken } from '../resources/side-effects';

export async function main() {
  questradeAPI({ token: getMyToken });
}

main();
