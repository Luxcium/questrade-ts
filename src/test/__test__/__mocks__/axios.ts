import { AxiosStatic } from 'axios';

const _axios = jest.fn(() => Promise.resolve({ data: {} }));

export const axios = (_axios as unknown) as AxiosStatic;
