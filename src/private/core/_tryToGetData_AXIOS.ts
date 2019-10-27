import axios from 'axios';
import { pareHeader } from '../../test/headers';
import { CoreApiConfig, LogErrors } from '../../typescript';

export const _tryToGetData = <R, D>(_config: CoreApiConfig<D>) => {
  return async (_logError: LogErrors): Promise<R> => {
    // console.log('CONFIG:::', JSON.stringify(_config));

    //  const requester = () =>''
    //  requester()
    try {
      const response = await axios(_config);
      // console.log(':::RESPONSE==>');
      // console.dir(res);
      // console.log('void 0', void 0);
      // console.log('<==RESPONSE:::');
      const { config, data, headers, status, statusText } = response;

      console.log('status ==============================');
      console.log(status);
      console.log('');
      console.log('statusText ==============================');
      console.log(statusText);
      console.log('');
      console.log('data ==============================');
      console.log(data);
      console.log('');
      console.log('request ==============================');
      console.log('console.log(request);');
      console.log('');
      console.log('config ==============================');
      console.log(config);
      console.log('');
      console.log('headers ==============================');
      console.log(headers);
      pareHeader(headers);

      console.log('');
      console.log('');

      // const data: void | R = response.data;

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

// export const rateLimiter = ()=>''
