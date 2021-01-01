import { Credentials } from '../../../typescript';

export const _defaultCredentials: Credentials = {
  accessToken: '',
  accountNumber: '',
  apiServer: '',
  apiUrl: '',
  apiVersion: 'v1',
  authUrl: '',
  expiresAt: undefined,
  tokenExpiration: undefined,
  expiresIn: 0,
  keyDir: './keys',
  keyFile: '',
  practice: false,
  refreshToken: '',
  seedToken: '',
  serverTime: undefined,
  tokenType: '',
  // config_:null = _config;
  // response_:null = response;
  // configurl_:null = `${_config.url}`.split('questrade.com/')[1];

  // urlTimeUTC:null = new Date(credentials.response_.headers.date);
  toValue() {
    return JSON.parse(
      JSON.stringify({
        ...this,
        config_: {
          ...this.config_,
          headers: {
            ...this.config_?.headers,
            Authorization: `${(
              (this.config_?.headers?.Authorization as string) ?? ''
            ).slice(0, 15)} [Redacted] ...`,
          },
        },
        response_: {
          ...this.response_,
          headers: {
            ...this.response_?.headers,

            Authorization: `${(
              (this.config_?.headers?.Authorization as string) ?? ''
            ).slice(0, 15)} [Redacted] ...`,
          },
          config: {
            ...this.response_?.config,
            // ...this.response_?.config?.headers,
            Authorization: `${(
              (this.config_?.headers?.Authorization as string) ?? ''
            ).slice(0, 15)} [Redacted] ...`,
          },
          request: {
            ...this.response_?.request,
            res: '[IncomingMessage]',
            _redirectable: '[Writable]',
            agent: '[Agent]',
            socket: '[TLSSocket]',
            _header: '[HTTP Header Fields]',
          },
        },
        accessToken: '[string:Private]',
        keyFile: './keys/[Private]',
        refreshToken: '[string:Private]',
        seedToken: '[string:Private]',
      })
    );
  },
  toString(indent: string | number | undefined = 4) {
    // ?.Authorization
    return JSON.stringify(
      {
        ...{
          ...this,

          config_: {
            ...this.config_,
            headers: {
              ...this.config_?.headers,
              Authorization: `${(
                (this.config_?.headers?.Authorization as string) ?? ''
              ).slice(0, 15)} [Redacted] ...`,
            },
          },
        },
        response_: {
          ...this.response_,
          headers: {
            ...this.response_?.headers,

            Authorization: `${(
              (this.config_?.headers?.Authorization as string) ?? ''
            ).slice(0, 15)} [Redacted] ...`,
          },
          request: {
            ...this.response_?.request,
            res: ' [IncomingMessage]',
            _redirectable: '[Writable]',
            agent: '[Agent]',
            socket: '[TLSSocket]',
            _header: '[HTTP Header Fields]',
          },
          ...{
            ...this.response_?.config,
            config: {
              ...this.response_?.config?.headers,
              headers: {
                // ...this.response_?.config?.headers?.Authorization,

                Authorization: `${
                  (this.config_?.headers?.Authorization as string).slice(
                    0,
                    15
                  ) ?? ''
                } [Redacted] ...`,
              },
            },
          },
        },
        accessToken: '[string:Private]',
        keyFile: './keys/[Private]',
        refreshToken: '[string:Private]',
        seedToken: '[string:Private]',
      },
      null,
      indent
    );
  },
};

// response_: {
//     status: 200,
//     statusText: 'OK',
//     headers: {
//       Accept: 'application/json, text/plain, */*',
//       Authorization: 'Bearer cM-cS45DkMr1ASRGUslOf1p7bkoP2yGa0',
//       location: '',
//       'User-Agent': 'axios/0.21.1'
//     },
//     config: {
//       Accept: 'application/json, text/plain, */*',
//       Authorization: 'Bearer cM-cS45DkMr1ASRGUslOf1p7bkoP2yGa0',
//       location: '',
//       'User-Agent': 'axios/0.21.1',
//       headers: [Object]
//     },

// #region https://github.com/ericmuyser/stringy/issues/1
void function stringy() {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  function filter(item?: any) {
    let i = 0;

    return function (_key?: any, value?: any) {
      if (
        i !== 0 &&
        typeof item === 'object' &&
        typeof value === 'object' &&
        item === value
      ) {
        return '[Circular]';
      }
      // console.log(i, value);
      if (i >= 100) {
        // seems to be a harded maximum of 30 serialized objects?
        return '[Unknown]';
      }

      ++i; // so we know we aren't using the original object anymore

      return value;
    };
  }

  function stringify(item?: any, censor?: any, space: any = ' ') {
    return JSON.stringify(item, censor ? censor : filter(item), space);
  }

  var b: any = { foo: { bar: null } };

  b.foo.bar = b; // it's circular!

  console.log('Filtering:', b);
  // console.log(stringify(b)); // works!
  // console.log(JSON.stringify(b)); // exception
  // eslint-disable-next-line unicorn/no-process-exit
  // process.exit();

  // export { stringify };
  return stringify;
};
// #endregion https://github.com/ericmuyser/stringy/issues/1

export function JSONjs() {
  /*
    cycle.js
    2018-05-15
    Public Domain.
    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html
    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.
*/

  // The file uses the WeakMap feature of ES6.

  /*jslint eval */

  /*property
    $ref, decycle, forEach, get, indexOf, isArray, keys, length, push,
    retrocycle, set, stringify, test
*/
  let decycle: any;
  let retrocycle: any;
  const myJsonjs = { decycle, retrocycle };
  if (typeof myJsonjs.decycle !== 'function') {
    myJsonjs.decycle = function decycle(object: any, replacer: any) {
      'use strict';

      // Make a deep copy of an object or array, assuring that there is at most
      // one instance of each object or array in the resulting structure. The
      // duplicate references (which might be forming cycles) are replaced with
      // an object of the form

      //      {"$ref": PATH}

      // where the PATH is a JSONPath string that locates the first occurance.

      // So,

      //      var a = [];
      //      a[0] = a;
      //      return JSON.stringify(JSON.decycle(a));

      // produces the string '[{"$ref":"$"}]'.

      // If a replacer function is provided, then it will be called for each value.
      // A replacer function receives a value and returns a replacement value.

      // JSONPath is used to locate the unique object. $ indicates the top level of
      // the object or array. [NUMBER] or [STRING] indicates a child element or
      // property.

      var objects = new WeakMap(); // object to path mappings

      return (function derez(value, path) {
        // The derez function recurses through the object, producing the deep copy.

        var old_path; // The path of an earlier occurance of value
        var nu: any; // The new object or array

        // If a replacer function was provided, then call it to get a replacement value.

        if (replacer !== undefined) {
          value = replacer(value);
        }

        // typeof null === "object", so go on if this value is really an object but not
        // one of the weird builtin objects.

        if (
          typeof value === 'object' &&
          value !== null &&
          !(value instanceof Boolean) &&
          !(value instanceof Date) &&
          !(value instanceof Number) &&
          !(value instanceof RegExp) &&
          !(value instanceof String)
        ) {
          // If the value is an object or array, look to see if we have already
          // encountered it. If so, return a {"$ref":PATH} object. This uses an
          // ES6 WeakMap.

          old_path = objects.get(value);
          if (old_path !== undefined) {
            return { $ref: old_path };
          }

          // Otherwise, accumulate the unique value and its path.

          objects.set(value, path);

          // If it is an array, replicate the array.

          if (Array.isArray(value)) {
            nu = [];
            value.forEach(function (element, i) {
              nu[i] = derez(element, path + '[' + i + ']');
            });
          } else {
            // If it is an object, replicate the object.

            nu = {};
            Object.keys(value).forEach(function (name) {
              nu[name] = derez(
                value[name],
                path + '[' + JSON.stringify(name) + ']'
              );
            });
          }
          return nu;
        }
        return value;
      })(object, '$');
    };
  }

  if (typeof myJsonjs.retrocycle !== 'function') {
    myJsonjs.retrocycle = function retrocycle($: any) {
      'use strict';

      // Restore an object that was reduced by decycle. Members whose values are
      // objects of the form
      //      {$ref: PATH}
      // are replaced with references to the value found by the PATH. This will
      // restore cycles. The object will be mutated.

      // The eval function is used to locate the values described by a PATH. The
      // root object is kept in a $ variable. A regular expression is used to
      // assure that the PATH is extremely well formed. The regexp contains nested
      // * quantifiers. That has been known to have extremely bad performance
      // problems on some browsers for very long strings. A PATH is expected to be
      // reasonably short. A PATH is allowed to belong to a very restricted subset of
      // Goessner's JSONPath.

      // So,
      //      var s = '[{"$ref":"$"}]';
      //      return JSON.retrocycle(JSON.parse(s));
      // produces an array containing a single element which is the array itself.

      // !! eslint-disable-next-line unicorn/no-unsafe-regex
      //  eslint-disable-next-line unicorn/no-unsafe-regex
      var px = /^\$(?:\[(?:\d+|"(?:[^\u0000-\u001F"\\]|\\(?:["/\\bfnrt]|u[\dA-Za-z]{4}))*")])*$/;

      (function rez(value) {
        // The rez function walks recursively through the object looking for $ref
        // properties. When it finds one that has a value that is a path, then it
        // replaces the $ref object with a reference to the value that is found by
        // the path.

        if (value && typeof value === 'object') {
          if (Array.isArray(value)) {
            value.forEach(function (element, i) {
              if (typeof element === 'object' && element !== null) {
                var path = element.$ref;
                if (typeof path === 'string' && px.test(path)) {
                  value[i] = eval(path);
                } else {
                  rez(element);
                }
              }
            });
          } else {
            Object.keys(value).forEach(function (name) {
              var item = value[name];
              if (typeof item === 'object' && item !== null) {
                var path = item.$ref;
                if (typeof path === 'string' && px.test(path)) {
                  value[name] = eval(path);
                } else {
                  rez(item);
                }
              }
            });
          }
        }
      })($);
      return $;
    };
  }
  return myJsonjs;
}
