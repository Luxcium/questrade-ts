// tslint:disable: variable-name
import { _accountEndPoinFactory } from '.';
import { QtApi } from '../../libraries';
import { IPositions } from '../../types';
export const _getPositions = async (qtApi: Promise<QtApi>) =>
  _accountEndPoinFactory<Promise<IPositions>>('/positions')(qtApi);
