import axios, { AxiosResponse } from 'axios';

// =============================================================================≈
/**
 * Will get data from the api using AXIOS.
 *
 * @param url -
 * @param logging -
 * @param callBack -
 *
 */
export async function _unSafeAxiosGetData<R>(
  url: string,
  logging = false,
  callBack: (responseValue: AxiosResponse<R>) => unknown = () => void url,
): Promise<R> {
  const responseValue = await axios.get<R>(url);
  if (logging === true) {
    const { status, statusText } = responseValue;
    void console.log(`${statusText} (${status}) -> url`);
  }

  void callBack(responseValue);

  return responseValue.data;
}
// =============================================================================≈
