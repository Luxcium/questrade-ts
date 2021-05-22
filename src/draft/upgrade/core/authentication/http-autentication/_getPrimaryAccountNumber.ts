import type { IAccount } from '../../../../../typescript';
import { _warn } from '../../../resources/side-effects';
import {
  getPrimary,
  hasLenght,
  head,
  isLenghtOne,
} from '../../../resources/utils';

export function _getPrimaryAccountNumber(accounts: IAccount[]) {
  return !hasLenght(accounts)
    ? _warn('11111111')
    : isLenghtOne(accounts)
    ? head(accounts).number
    : hasLenght(getPrimary(accounts))
    ? head(getPrimary(accounts)).number
    : head(accounts).number;
}
