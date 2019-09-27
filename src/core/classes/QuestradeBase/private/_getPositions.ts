// tslint:disable: variable-name
import { _accountEndPoinFactory } from '.';
import { QtApi } from '../../../libraries';
import { IPositions } from '../../../types';
export const _getPositions = (qtApi: QtApi) => async () =>
  (await _accountEndPoinFactory<IPositions>('/positions')(qtApi)).positions;
