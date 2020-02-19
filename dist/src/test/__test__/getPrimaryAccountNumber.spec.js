"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var private_1 = require("../../private");
test('should ', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var dummyAccount;
    return tslib_1.__generator(this, function (_a) {
        dummyAccount = [
        //
        ];
        expect(private_1._getPrimaryAccountNumber(dummyAccount)).toEqual('00000000');
        dummyAccount = [
            {
                type: 'TFSA',
                number: '22222222',
                status: 'Active',
                isPrimary: false,
                isBilling: true,
                clientAccountType: 'Individual',
            },
        ];
        expect(private_1._getPrimaryAccountNumber(dummyAccount)).toEqual('22222222');
        dummyAccount = [
            {
                type: 'TFSA',
                number: '33333333',
                status: 'Active',
                isPrimary: false,
                isBilling: true,
                clientAccountType: 'Individual',
            },
            {
                type: 'TFSA',
                number: '44444444',
                status: 'Active',
                isPrimary: true,
                isBilling: true,
                clientAccountType: 'Individual',
            },
        ];
        expect(private_1._getPrimaryAccountNumber(dummyAccount)).toEqual('44444444');
        dummyAccount = [
            {
                type: 'TFSA',
                number: '55555555',
                status: 'Active',
                isPrimary: false,
                isBilling: true,
                clientAccountType: 'Individual',
            },
            {
                type: 'TFSA',
                number: '66666666',
                status: 'Active',
                isPrimary: false,
                isBilling: true,
                clientAccountType: 'Individual',
            },
        ];
        expect(private_1._getPrimaryAccountNumber(dummyAccount)).toEqual('55555555');
        done();
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=getPrimaryAccountNumber.spec.js.map