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
  expect(_getPrimaryAccountNumber(dummyAccount)).toEqual('00000000');
  dummyAccount = [
    {
      type: 'TFSA' as AccountType,
      number: '22222222',
      status: 'Active' as AccountStatus,
      isPrimary: false,
      isBilling: true,
      clientAccountType: 'Individual' as ClientAccountType,
    },
  ];
  expect(_getPrimaryAccountNumber(dummyAccount)).toEqual('22222222');
  dummyAccount = [
    {
      type: 'TFSA' as AccountType,
      number: '33333333',
      status: 'Active' as AccountStatus,
      isPrimary: false,
      isBilling: true,
      clientAccountType: 'Individual' as ClientAccountType,
    },
    {
      type: 'TFSA' as AccountType,
      number: '44444444',
      status: 'Active' as AccountStatus,
      isPrimary: true,
      isBilling: true,
      clientAccountType: 'Individual' as ClientAccountType,
    },
  ];
  expect(_getPrimaryAccountNumber(dummyAccount)).toEqual('44444444');

  dummyAccount = [
    {
      type: 'TFSA' as AccountType,
      number: '55555555',
      status: 'Active' as AccountStatus,
      isPrimary: false,
      isBilling: true,
      clientAccountType: 'Individual' as ClientAccountType,
    },
    {
      type: 'TFSA' as AccountType,
      number: '66666666',
      status: 'Active' as AccountStatus,
      isPrimary: false,
      isBilling: true,
      clientAccountType: 'Individual' as ClientAccountType,
    },
  ];
  expect(_getPrimaryAccountNumber(dummyAccount)).toEqual('55555555');
  done();
});
