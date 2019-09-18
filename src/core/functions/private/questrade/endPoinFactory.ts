import { QtApi } from '../../../libraries';

export const _accountEndPoinFactory = <T>(endpoint: string) => {
  return (qtApi: QtApi) => async (): Promise<T> =>
    qtApi.accountGet<T>(endpoint);
};

export const _getEndPoinFactory = <T>(endpoint: string) => {
  return (qtApi: QtApi) => async (): Promise<T> => qtApi.get<T>(endpoint);
};

export const _postEndPoinFactory = <T>(endpoint: string) => {
  return (qtApi: QtApi) => async (): Promise<T> => qtApi.get<T>(endpoint);
};
