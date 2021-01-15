import { redeemToken } from '../..';
import { sideEffects } from '../../resources/side-effects';
import { clientConsoleLogHashesHandler } from '../../resources/side-effects/proxies';
import { void0 } from '../../utils';

const { echo, errorlog, getMyToken } = sideEffects;

export const parser = (obj: any) => JSON.parse(JSON.stringify(obj));
async function main() {
  const { qtApi, credentials } = await redeemToken(
    getMyToken(),
    clientConsoleLogHashesHandler({
      debug: false,
      httpDataEndPointConnector: true,
      oAuthHttpCredentials: false,
    }),
  );
  void0(credentials);

  void0(qtApi);
  async function leadingPrime() {
    echo(await qtApi.account.getServerTime());
  }
  leadingPrime().catch(error => errorlog(error.message));
}

main().catch(error => errorlog(error.message));
