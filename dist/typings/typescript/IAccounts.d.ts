import { AccountStatus, AccountType, ClientAccountType } from 'questrade-api-enumerations';
export declare type AcountNumberString = string;
export interface IAccount {
    type: AccountType;
    number: AcountNumberString;
    status: AccountStatus;
    isPrimary: boolean;
    isBilling: boolean;
    clientAccountType: ClientAccountType;
}
export interface IAccounts {
    accounts: IAccount[];
}
//# sourceMappingURL=IAccounts.d.ts.map