import { AxiosRequestConfig, AxiosResponse } from 'axios';
export type AxiosClient<T> = (
  axiosConfig: AxiosRequestConfig
) => Promise<AxiosResponse<T>>;
