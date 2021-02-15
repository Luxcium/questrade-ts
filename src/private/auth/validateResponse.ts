import { echo } from '../../resources/side-effects';
import { ClientResponse } from '../../resources/side-effects/typescript';
import { IRefreshCreds } from '../../typescript';

export async function validateResponse(
  _response: Promise<ClientResponse>,
): Promise<ClientResponse<IRefreshCreds>> {
  const response = await _response;

  if (!response.data) {
    if (response) {
      void echo<any>('________________________________________________');
      void echo<any>(response.status, response.statusText);
      void echo<any>(response.headers);
      void echo<any>(response.request);
      void echo<any>(response.status, response.statusText);
      void echo<any>('________________________________________________');
      void echo<any>('++++++++++++++++++++++++++++++++++++++++++++++++');
    }

    throw new Error(
      '!!! validate credntials Invalid data back from http client !!!',
    );
  }

  return response;
}
