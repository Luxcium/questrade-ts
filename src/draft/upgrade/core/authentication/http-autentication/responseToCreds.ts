import { ClientPromise } from '../../../../../resources/side-effects/types';
import { ICreds, IRefreshCreds } from '../../../../../typescript';

export async function responseToCreds(
  response: ClientPromise<IRefreshCreds>,
): Promise<ICreds> {
  //  ClientPromise<IRefreshCreds> (await response).data as IRefreshCreds
  const refreshCreds = (await response).data as IRefreshCreds;
  if (refreshCreds) {
    return {
      accessToken: refreshCreds.access_token,
      apiServer: refreshCreds.api_server,
      expiresIn: refreshCreds.expires_in,
      refreshToken: refreshCreds.refresh_token,
      tokenType: refreshCreds.token_type,
    };
  }

  throw new Error(
    '!!! validate credntials Invalid data back from http client !!!',
  );
}
