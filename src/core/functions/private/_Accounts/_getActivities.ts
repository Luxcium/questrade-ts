// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
import { _accountEndPoinFactory } from '.';
import { QtApi } from '../../../libraries';
import { IAccountActivity, IActivities } from '../../../types';

export const _getActivities = (qtApi: QtApi) => (startDate: string) => (
  endDate: string
) => async (): Promise<IAccountActivity[]> => {
  return (await _accountEndPoinFactory<Promise<IActivities>>(
    `/activities?startTime=${new Date(
      startDate
    ).toISOString()}&endTime=${new Date(endDate).toISOString()}`
  )(qtApi)).activities;
};
