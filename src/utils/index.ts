import { qtEnumerations } from 'questrade-api-enumerations';
import { id0, void0 } from './id0';
import {
  dateISOStringNow,
  dateNumericNow,
  dates,
  dateToNumeric,
  dateToString,
  day,
  endpointFormatDateTool,
  naive,
  rangeTool,
} from './timeutil';
export { FsImplementationSync, Made, Mode, OptionsSync, sync } from './mkdirp';
export { qtEnumerations as Enumerations };
export {
  dateISOStringNow,
  dateNumericNow,
  dates,
  dateToNumeric,
  dateToString,
  day,
  endpointFormatDateTool,
  naive,
  rangeTool,
  id0,
  void0,
};
export const log = console.log;

export const utils = {
  dateISOStringNow,
  dateNumericNow,
  dates,
  dateToNumeric,
  dateToString,
  day,
  endpointFormatDateTool,
  naiveDate: naive,
  rangeTool,
  id0,
  void0,
  log,
};
