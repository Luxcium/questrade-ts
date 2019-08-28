import { axios, AxiosRequestConfig, AxiosResponse } from '.';
export { axios, AxiosRequestConfig, AxiosResponse };
export type AxiosClient<T> = (
  axiosConfig: AxiosRequestConfig
) => Promise<AxiosResponse<T>>;
export async function axiosClient<T>(
  axiosConfig: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  try {
    const response: AxiosResponse<T> = await axios(axiosConfig);
    // validating response.data is not: NaN, "", '', 0, false, null or undefined
    if (!response.data) {
      throw new Error();
    } else {
      return response as AxiosResponse<T>;
    }
  } catch (error) {
    // error handling must be taken care of when calling axioClient Function
    throw error;
  }
}
