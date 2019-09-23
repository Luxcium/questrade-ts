// tslint:disable: variable-name
import { _accountEndPoinFactory } from '.';
import { QtApi } from '../../../libraries';
import { IAccountActivity, IActivities } from '../../../types';
export const _getActivities = (qtApi: QtApi) => (startDate: string) => async (
  endDate: string
): Promise<IAccountActivity[]> => {
  return (await _accountEndPoinFactory<IActivities>(
    `/activities?startTime=${new Date(
      startDate
    ).toISOString()}&endTime=${new Date(endDate).toISOString()}`
  )(qtApi)).activities;
};
