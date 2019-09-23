import { AxiosRequestConfig, AxiosResponse, default as axios } from 'axios';

export const _axiosClient = async <T = any>(
  axiosConfig: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    let response: AxiosResponse<T>;

    try {
      response = await axios(axiosConfig);
    } catch (error) {
      console.log('ERROR response = await axios(axiosConfig);');

      console.error(error.message);
      throw new Error(error.message);
    }

    // validating response.data is not NaN, "", '', 0, false, null or undefined
    if (!response.data) {
      throw new Error('Invalid data back from axios client');
    } else {
      return response as AxiosResponse<T>;
    }
  } catch (error) {
    // error handling must be taken care of when calling axioClient Function
    throw error;
  }
};
