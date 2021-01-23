export const NULL = null;

// defineProperty(
//   target: T,
//   p: PropertyKey,
//   attributes: PropertyDescriptor,
// ): any {
//   if (this.handlerOptions.debug === true) {
//     void echo<unknown>(
//       'PROXY:',
//       '!!→ defineProperty',
//       'target →',
//       target,
//       'p →',
//       p,
//       'attributes →',
//       attributes,
//     );

//     echo('redisClientProxyHandlerClass');
//   }
//   return Reflect.defineProperty(target, p, attributes);
// }

// getOwnPropertyDescriptor(
//   target: T,
//   p: PropertyKey,
// ): PropertyDescriptor | undefined {
//   if (this.handlerOptions.debug === true) {
//     void echo<unknown>(
//       'PROXY:',
//       '!!→ getOwnPropertyDescriptor',
//       'target →',
//       target,
//       'p →',
//       p,
//     );

//     echo('redisClientProxyHandlerClass');
//   }
//   return Reflect.getOwnPropertyDescriptor(target, p);
// }

// set(target: T, p: PropertyKey, value: any, receiver: any): boolean {
//   if (this.handlerOptions.debug === true) {
//     void echo<unknown>(
//       'PROXY:',
//       '!!→ set',
//       'target →',
//       target,
//       'p →',
//       p,
//       'value →',
//       value,
//       'receiver →',
//       receiver,
//     );

//     echo('redisClientProxyHandlerClass');
//   }

//   return Reflect.set(target, p, value, receiver);
// }

// get(target: T, p: PropertyKey, receiver: any): any {
//   if (this.handlerOptions.debug === true) {
//     void echo<unknown>(
//       'PROXY:',
//       '!!→ get',
//       'target →',
//       target,
//       'p →',
//       p,
//       'receiver →',
//       receiver,
//     );

//     echo('redisClientProxyHandlerClass');
//   }

//   return Reflect.get(target, p, receiver);
// }

// void echo('URL_HASH_HEX:', proxyData.URL_HASH_HEX);
// void echo('DATA_HASH_HEX:', proxyData.DATA_HASH_HEX);
// void echo('URLDATA_HEX:', proxyData.URLDATA_HEX);
// void echo('URL_PATH:', proxyData.URL_PATH);
// void ech0('no redis write');

// void0(
//   await this.tedis.command(
//     'PFADD',
//     `count:${proxyData.URL_HASH_HEX}:data:unique`,
//     `${proxyData.DATA_HASH_HEX}`,
//   ),
// );

// void0(
//   await this.tedis.command(
//     'PFADD',
//     `count:${proxyData.URL_HASH_HEX}:data:same:${proxyData.URLDATA_HEX}`,
//     `${Date.now()}`,
//   ),
// );
/*
// TTL mykey
        setTimeout(async () => {
          echo<any>(myKey, await this.tedis.command('TTL', myKey));
        }, 1000);

        setTimeout(async () => {
          echo<any>(myKey, await this.tedis.command('TTL', myKey));
        }, 2000);
        setTimeout(async () => {
          echo<any>(myKey, await this.tedis.command('TTL', myKey));
        }, 3000);

         // echo(response);
      echo<any>('\nresponse.status:\n\n', response.status);
      echo('\nresponse.statusText', response.statusText);
      echo('\nresponse.headers', response.headers);
      echo(
        "\nresponse.headers['strict-transport-security']:\n\n",
        response.headers['strict-transport-security'],
      );
      echo(
        "\nresponse.headers['x-ratelimit-remaining']:\n\n",
        response.headers['x-ratelimit-remaining'],
      );
      echo(
        "\nresponse.headers['x-ratelimit-reset']:\n\n",
        response.headers['x-ratelimit-reset'],
      );
      echo(
        "\nresponse.headers['content-type']:\n\n",
        response.headers['content-type'],
      );
      echo(
        "\nresponse.headers['content-length']:\n\n",
        response.headers['content-length'],
      );
      echo<any>(
        '\nresponse.config as ClientRequestConfig:\n\n',
        response.config as ClientRequestConfig,
      );
      echo(
        '\n(response.config as ClientRequestConfig).headers:\n\n',
        (response.config as ClientRequestConfig).headers,
      );
      echo(
        '\n(response.config as ClientRequestConfig).url:\n\n',
        (response.config as ClientRequestConfig).url,
      );
      echo(
        '\n(response.config as ClientRequestConfig).method:\n\n',
        (response.config as ClientRequestConfig).method,
      );
      echo(
        '\n(response.config as ClientRequestConfig).headers.Accept:\n\n',
        (response.config as ClientRequestConfig).headers.Accept,
      );
      echo(
        '\n(response.config as ClientRequestConfig).headers.Authorization:\n\n',
        (response.config as ClientRequestConfig).headers.Authorization,
      );
      echo(
        '\n(response.config as ClientRequestConfig).headers.location:\n\n',
        (response.config as ClientRequestConfig).headers.location,
      );
      echo(
        "\nresponse.headers['x-ratelimit-remaining']:\n\n",
        response.headers['x-ratelimit-remaining'],
      );
      echo(
        "\nresponse.headers['x-ratelimit-reset']:\n\n",
        response.headers['x-ratelimit-reset'],
      );
      // echo(response.request);
      // echo(response.data);
 */
/*
export interface ClientResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: ClientRequestConfig;
  request?: any;
}
  echo(response.headers['strict-transport-security']);
  echo(response.headers['x-ratelimit-remaining']);
  echo(response.headers['x-ratelimit-reset']);
  echo(response.headers['content-type']);
  echo(response.headers['content-length']);

   void proxyData;
      void this.tedis;
      // void ech0(proxyData.path);

      // Data exists in Redis ?
      // Yes: Get Data from Redis !
      // No: Get Data from ApiClient !
      //      Save Data in Redis !

      const myKey = proxyData.URL_HSH;
      const hash = [
        'URL_HSH:',
        proxyData.URL_HSH,
        'path:',
        proxyData.path,
        'DATA_HSH:',
        proxyData.DATA_HSH,
        'data:',
        proxyData.data,
        'URLDATA_HSH:',
        proxyData.URLDATA_HSH,
      ];

      // const convertArrayToObject = (array:any[], key:any) => {
      //   return array.reduce((obj: any, item: any, currentIndex,) => {
      //     array.length
      //     return {
      //       ...obj,
      //       [item[key]]: item,
      //     };
      //   }, initialValue);
      // };

      // void convertArrayToObject
      void0(await this.tedis.command('HSET', myKey, ...hash));
      void0(await this.tedis.command('EXPIRE', myKey, 300));
      echo<any>(myKey, await this.tedis.command('TTL', myKey));
      ech0(await this.tedis.command('TTL', myKey));

      const parsed = id0(
        parser<any[]>(await this.tedis.command('HGETALL', myKey)),
      );
      const initialValue: any = {};
      for (let i = 0; i < parsed.length; i += 2) {
        initialValue[parser((parsed[i] as string).split(':')[0])] =
          parsed[i + 1];
      }
      // const returnedData =

      // ech0(parser(initialValue['data']));
      // await this.tedis.command('HSET', ...hash);
      // const alternativeReturnValue = {
      //   data: returnedData,
      //   status: 200,
      //   statusText: 'OK',
      // };
      // void alternativeReturnValue;
      //      Then return the Data ...
      const response: ClientResponse = await returnValue;
      void response;

      return returnValue;

      // + echo(response.headers['x-ratelimit-remaining']);
      // + echo(response.headers['x-ratelimit-reset']);

      // + echo(response.config as ClientRequestConfig);
      // + echo((response.config as ClientRequestConfig).headers);
      // + echo((response.config as ClientRequestConfig).url);
      // + echo((response.config as ClientRequestConfig).method);
      // + echo((response.config as ClientRequestConfig).headers.Accept);
      // + echo((response.config as ClientRequestConfig).headers.Authorization);
      // + echo((response.config as ClientRequestConfig).headers.location);
      // + echo(response.headers['x-ratelimit-remaining']);
      // + echo(response.headers['x-ratelimit-reset']);
      // + echo(response.headers);
      // echo(response.request);
      // echo(response.data);

Promise {
  {
    status: 200,
    statusText: 'OK',
    headers: {
      'x-ratelimit-remaining': '29970',
      'x-ratelimit-reset': '1611038234',
      'content-type': 'application/json; charset=utf-8',
      'content-length': '152',
      date: 'Tue, 19 Jan 2021 06:09:06 GMT',
    },
    config: {
      url: 'https://api06.iq.questrade.com/v1/accounts',
      }
       request: ClientRequest {}
          data: { accounts: [Array], userId: 126691 }
  }
}


Promise {
  {
    status: 200,
    statusText: 'OK',
    headers: {
      // 'strict-transport-security': 'max-age=31536000; includeSubDomains;',
      'x-ratelimit-remaining': '29970',
      'x-ratelimit-reset': '1611038234',
      'content-type': 'application/json; charset=utf-8',
      'content-length': '152',
      date: 'Tue, 19 Jan 2021 06:09:06 GMT',
      // connection: 'close'
    },
    config: {
      url: 'https://api06.iq.questrade.com/v1/accounts',
      method: 'get',
      data: null,
      headers: [Object],
      transformRequest: [Array],
      transformResponse: [Array],
      timeout: 0,
      adapter: [Function: httpAdapter],
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      maxBodyLength: -1,
      validateStatus: [Function: validateStatus]
    },
    request: ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: true,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: false,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      _contentLength: 0,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      _closed: true,
      socket: [TLSSocket],
      _header: 'GET /v1/accounts HTTP/1.1\r\n' +
        'Accept: application/json, text/plain, * /*\r\n' +
        'Authorization: Bearer gqE8gnBsUconvwHds0NAC4bJOSuFuloa0\r\n' +
        'location: \r\n' +
        'User-Agent: axios/0.21.1\r\n' +
        'Host: api06.iq.questrade.com\r\n' +
        'Connection: close\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: {},
      agent: [Agent],
      socketPath: undefined,
      method: 'GET',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      path: '/v1/accounts',
      _ended: true,
      res: [IncomingMessage],
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      host: 'api06.iq.questrade.com',
      protocol: 'https:',
      _redirectable: [Writable],
      [Symbol(kCapture)]: false,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype]
    },
    data: { accounts: [Array], userId: 126691 }
  }
}
Promise {
  {
    status: 200,
    statusText: 'OK',
    headers: {
      'strict-transport-security': 'max-age=31536000; includeSubDomains;',
      'x-ratelimit-remaining': '29969',
      'x-ratelimit-reset': '1611038234',
      'content-type': 'application/json; charset=utf-8',
      'content-length': '43',
      date: 'Tue, 19 Jan 2021 06:09:06 GMT',
      connection: 'close'
    },
    config: {
      url: 'https://api06.iq.questrade.com/v1/time',
      method: 'get',
      data: null,
      headers: [Object],
      transformRequest: [Array],
      transformResponse: [Array],
      timeout: 0,
      adapter: [Function: httpAdapter],
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      maxBodyLength: -1,
      validateStatus: [Function: validateStatus]
    },
    request: ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: true,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: false,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      _contentLength: 0,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      _closed: true,
      socket: [TLSSocket],
      _header: 'GET /v1/time HTTP/1.1\r\n' +
        'Accept: application/json, text/plain, * /*\r\n' +
        'Authorization: Bearer gqE8gnBsUconvwHds0NAC4bJOSuFuloa0\r\n' +
        'location: \r\n' +
        'User-Agent: axios/0.21.1\r\n' +
        'Host: api06.iq.questrade.com\r\n' +
        'Connection: close\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: {},
      agent: [Agent],
      socketPath: undefined,
      method: 'GET',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      path: '/v1/time',
      _ended: true,
      res: [IncomingMessage],
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      host: 'api06.iq.questrade.com',
      protocol: 'https:',
      _redirectable: [Writable],
      [Symbol(kCapture)]: false,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype]
    },
    data: { time: '2021-01-19T01:09:06.282000-05:00' }
  }
}
Questrade Server Time: 2021-01-19T06:09:06.282Z
Status: ready

Promise {
  {
    status: 200,
    statusText: 'OK',
    headers: {
      'strict-transport-security': 'max-age=31536000; includeSubDomains;',
      'x-ratelimit-remaining': '29968',
      'x-ratelimit-reset': '1611038234',
      'content-type': 'application/json; charset=utf-8',
      'content-length': '1582',
      date: 'Tue, 19 Jan 2021 06:09:06 GMT',
      connection: 'close'
    },
    config: {
      url: 'https://api06.iq.questrade.com/v1/symbols/search?prefix=COUCHE%20TARD&offset=0',
      method: 'get',
      data: null,
      headers: [Object],
      transformRequest: [Array],
      transformResponse: [Array],
      timeout: 0,
      adapter: [Function: httpAdapter],
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      maxBodyLength: -1,
      validateStatus: [Function: validateStatus]
    },
    request: ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: true,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: false,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      _contentLength: 0,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      _closed: true,
      socket: [TLSSocket],
      _header: 'GET /v1/symbols/search?prefix=COUCHE%20TARD&offset=0 HTTP/1.1\r\n' +
        'Accept: application/json, text/plain, * /*\r\n' +
        'Authorization: Bearer gqE8gnBsUconvwHds0NAC4bJOSuFuloa0\r\n' +
        'location: 51648972\r\n' +
        'User-Agent: axios/0.21.1\r\n' +
        'Host: api06.iq.questrade.com\r\n' +
        'Connection: close\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: {},
      agent: [Agent],
      socketPath: undefined,
      method: 'GET',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      path: '/v1/symbols/search?prefix=COUCHE%20TARD&offset=0',
      _ended: true,
      res: [IncomingMessage],
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      host: 'api06.iq.questrade.com',
      protocol: 'https:',
      _redirectable: [Writable],
      [Symbol(kCapture)]: false,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype]
    },
    data: { symbols: [Array] }
  }
}
       */
