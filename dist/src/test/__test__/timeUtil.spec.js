"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var utils_1 = require("../../utils");
describe('valiate dateRangeFromNow has 4 properties', function () {
    it('should valiate startTime is same value as startDate', function () {
        var range = utils_1.dateRangeFromNow(1);
        expect(range).toBeDefined();
        expect(range.startTime).toEqual(range.startDate);
        expect(range.startDate).toEqual(range.startTime);
    });
    it('should valiate endTime is same value as endDate', function () {
        var range = utils_1.dateRangeFromNow(2);
        expect(range).toBeDefined();
        expect(range.endTime).toEqual(range.endDate);
        expect(range.endDate).toEqual(range.endTime);
    });
    it('should valiate dateRangeFromNow has startTime property', function () {
        var range = utils_1.dateRangeFromNow(15);
        expect(range).toBeDefined();
        expect(range.startTime).toBeDefined();
    });
    it('should valiate dateRangeFromNow has startDate property', function () {
        var range = utils_1.dateRangeFromNow(30);
        expect(range).toBeDefined();
        expect(range.startDate).toBeDefined();
    });
    it('should valiate dateRangeFromNow has endTime property', function () {
        var range = utils_1.dateRangeFromNow(40);
        expect(range).toBeDefined();
        expect(range.endTime).toBeDefined();
    });
    it('should valiate dateRangeFromNow has endDate property', function () {
        var range = utils_1.dateRangeFromNow(50);
        expect(range).toBeDefined();
        expect(range.endDate).toBeDefined();
    });
    it('should use absolute value of the passed value', function () {
        var _a = tslib_1.__read([
            utils_1.dateRangeFromNow(50),
            utils_1.dateRangeFromNow(-50),
        ], 2), range = _a[0], rangeNegative = _a[1];
        expect(range).toBeDefined();
        utils_1.log(range);
        expect(range).toEqual(rangeNegative);
    });
});
describe('Name of the group', function () {
    it('should produce a valid date value number when using dateNowNumeric', function () {
        var dateNowNumericValue = utils_1.dateNowNumeric();
        var dateNow = new Date(dateNowNumericValue);
        console.log(dateNow);
    });
});
//# sourceMappingURL=timeUtil.spec.js.map