import { AxiosResponse } from 'axios';

export type AxiosIntrospectRes<R> = AxiosResponse<R> & {
  introspect: { onOff: boolean };
};
