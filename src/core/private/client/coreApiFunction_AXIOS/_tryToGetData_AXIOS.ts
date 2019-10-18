import axios from 'axios';
import { CoreApiConfig, LogErrors } from '../../../typescript';

export const _tryToGetData = <R, D>(_config: CoreApiConfig<D>) => {
  return async (_logError: LogErrors): Promise<R> => {
    console.log('CONFIG:::', JSON.stringify(_config));

    try {
      const res = await axios(_config);
      // console.log(':::RESPONSE==>');
      // console.dir(res);
      // console.log('void 0', void 0);
      // console.log('<==RESPONSE:::');

      const data: void | R = res.data;
      if (!data) {
        throw _logError(new Error("Can't retrive data from call to API"));
      }
      // console.log('DATA:::', data);
      // console.log('JSON STRING DATA:::', JSON.stringify(data));

      return data;
    } catch (error) {
      _logError(error);
      throw error;
    }
  };
};
