import { echo } from '../../resources/side-effects';
import type { ClientResponse } from '../../resources/side-effects/typescript';
import type { IRefreshCreds } from '../../typescript';

export async function validateResponse(
  _response: Promise<ClientResponse>,
): Promise<ClientResponse<IRefreshCreds>> {
  const response = await _response;

  if (!response.data) {
    if (response) {
      echo('________________________________________________');
      echo(response.status, response.statusText);
      echo(response.headers);
      echo(response.request);
      echo(response.status, response.statusText);
      echo('________________________________________________');
      echo('++++++++++++++++++++++++++++++++++++++++++++++++');
    }

    throw new Error(
      '!!! validate credntials Invalid data back from http client !!!',
    );
  }

  return response;
}
