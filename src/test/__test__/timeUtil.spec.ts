import { echo } from '../../resources/side-effects';
import { dateNowNumeric, dateRangeFromNow } from '../../utils';

// const { echo } = sideEffects;
describe('valiate dateRangeFromNow has 4 properties', () => {
  it('should valiate startTime is same value as startDate', () => {
    const range = dateRangeFromNow(1);
    expect(range).toBeDefined();
    expect(range.startTime).toEqual(range.startDate);
    expect(range.startDate).toEqual(range.startTime);
  });
  it('should valiate endTime is same value as endDate', () => {
    const range = dateRangeFromNow(2);
    expect(range).toBeDefined();
    expect(range.endTime).toEqual(range.endDate);
    expect(range.endDate).toEqual(range.endTime);
  });
  it('should valiate dateRangeFromNow has startTime property', () => {
    const range = dateRangeFromNow(15);
    expect(range).toBeDefined();
    expect(range.startTime).toBeDefined();
  });
  it('should valiate dateRangeFromNow has startDate property', () => {
    const range = dateRangeFromNow(30);
    expect(range).toBeDefined();
    expect(range.startDate).toBeDefined();
  });
  it('should valiate dateRangeFromNow has endTime property', () => {
    const range = dateRangeFromNow(40);
    expect(range).toBeDefined();
    expect(range.endTime).toBeDefined();
  });
  it('should valiate dateRangeFromNow has endDate property', () => {
    const range = dateRangeFromNow(50);
    expect(range).toBeDefined();
    expect(range.endDate).toBeDefined();
  });
  it('should use absolute value of the passed value', () => {
    const [range, rangeNegative] = [
      dateRangeFromNow(50),
      dateRangeFromNow(-50),
    ];
    expect(range).toBeDefined();
    echo(range);
    expect(range).toEqual(rangeNegative);
  });
});
describe('Name of the group', () => {
  it('should produce a valid date value number when using dateNowNumeric', () => {
    const dateNowNumericValue = dateNowNumeric();
    const dateNow = new Date(dateNowNumericValue);
    echo(dateNow);
  });
});
