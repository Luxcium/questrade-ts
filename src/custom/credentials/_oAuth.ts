import { AxiosResponse, default as axios } from 'axios';
import { axiosConfigBuilder, writeToken } from '..';
import { QuestradeAPIOptions } from '../../core/types';

export const _oAuth = async (options: QuestradeAPIOptions) => {
  const { axiosConfig, credentials }: any = axiosConfigBuilder(options);

  const response: AxiosResponse<any> = await axios(axiosConfig);

  if (!response.data) {
    throw new Error(
      '!! validate credntials Invalid data back from axios client'
    );
  }
  return writeToken(credentials, response);
};
