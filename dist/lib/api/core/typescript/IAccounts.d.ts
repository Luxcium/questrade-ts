import { AccountStatus, AccountType as UserAccountType, ClientAccountType } from 'questrade-api-enumerations';
export declare type AcountNumberString = string;
export interface IAccount {
    type: UserAccountType;
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