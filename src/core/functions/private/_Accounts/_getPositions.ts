// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
import { _accountEndPoinFactory } from '.';
import { QtApi } from '../../../libraries';
import { IPositions } from '../../../types';

export const _getPositions = (qtApi: QtApi) => async () =>
  _accountEndPoinFactory<Promise<IPositions>>('/positions')(qtApi)();
