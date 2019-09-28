// tslint:disable: variable-name
import { QtApi } from '../../../libraries';
import { Time } from '../../../types';
export const _getTime = (qtApi: QtApi) => async (): Promise<string> => {
  try {
    const { time } = await (await qtApi).get<Time>('/time');
    return time;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};
