// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
import { QtApi } from '../../../libraries';
import { Time } from '../../../types';

export const _getTime = (qtApi: QtApi) => async (): Promise<string> => {
  try {
    const { time } = await qtApi.get<Time>('/time');
    return time;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};
