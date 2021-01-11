import {
  AccountStatus,
  AccountType,
  ClientAccountType,
} from 'questrade-api-enumerations';

import { _getPrimaryAccountNumber } from '../../private';
import { IAccount } from '../../typescript';

test('should ', async done => {
  let dummyAccount: IAccount[] = [
    //
  ];
  expect(_getPrimaryAccountNumber(dummyAccount)).toEqual('11111111');
  dummyAccount = [
    {
      clientAccountType: 'Individual' as ClientAccountType,
      isBilling: true,
      isPrimary: false,
      number: '22222222',
      status: 'Active' as AccountStatus,
      type: 'TFSA' as AccountType,
    },
  ];
  expect(_getPrimaryAccountNumber(dummyAccount)).toEqual('22222222');
  dummyAccount = [
    {
      clientAccountType: 'Individual' as ClientAccountType,
      isBilling: true,
      isPrimary: false,
      number: '33333333',
      status: 'Active' as AccountStatus,
      type: 'TFSA' as AccountType,
    },
    {
      clientAccountType: 'Individual' as ClientAccountType,
      isBilling: true,
      isPrimary: true,
      number: '44444444',
      status: 'Active' as AccountStatus,
      type: 'TFSA' as AccountType,
    },
  ];
  expect(_getPrimaryAccountNumber(dummyAccount)).toEqual('44444444');

  dummyAccount = [
    {
      clientAccountType: 'Individual' as ClientAccountType,
      isBilling: true,
      isPrimary: false,
      number: '55555555',
      status: 'Active' as AccountStatus,
      type: 'TFSA' as AccountType,
    },
    {
      clientAccountType: 'Individual' as ClientAccountType,
      isBilling: true,
      isPrimary: false,
      number: '66666666',
      status: 'Active' as AccountStatus,
      type: 'TFSA' as AccountType,
    },
  ];
  expect(_getPrimaryAccountNumber(dummyAccount)).toEqual('55555555');
  done();
});
