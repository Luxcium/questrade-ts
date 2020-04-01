"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** PROVIDE: IAccount[] THEN GET:  a 'primaryAccountNumber string'  */
function _getPrimaryAccountNumber(accounts) {
    if (!accounts || accounts.length < 1) {
        console.warn("WARNING('No account number found') will default to '11111111' ");
        return '11111111';
    }
    if (accounts.length === 1) {
        return accounts[0].number;
    }
    var primary = accounts.filter(function (account) { return account.isPrimary; });
    if (primary.length >= 1) {
        return primary[0].number;
    }
    return accounts[0].number;
}
exports._getPrimaryAccountNumber = _getPrimaryAccountNumber;
//# sourceMappingURL=_getPrimaryAccountNumber.js.map