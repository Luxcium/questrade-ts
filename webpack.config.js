const path = require('path');

module.exports = {
  mode: 'development',
  cache: true,
  devtool: false, // 'eval',
  performance: {
    hints: 'error',
  },
  entry: './build/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      path: false,
      crypto: false,
      fs: false,
    },
    // configuration options
  },
};

// { "path": require.resolve("path-browserify") }
/*

WARNING in ./node_modules/questrade-api-enumerations/qtEnumerations.js 3:24-31
WARNING in configuration
ERROR in ./build/src/private/auth/axiosCredentials_oAUTH/_validateToken.js 5:11-24
ERROR in ./build/src/private/auth/axiosCredentials_oAUTH/_validateToken.js 6:37-52
ERROR in ./build/src/private/auth/axiosCredentials_oAUTH/_writeToken.js 4:11-24
ERROR in ./build/src/utils/create-url-and-data-hashes.js 4:15-32
ERROR in ./build/src/utils/getHash.js 5:39-56
ERROR in ./build/src/utils/mkdirp.js 8:35-48
ERROR in ./build/src/utils/mkdirp.js 9:37-52
ERROR in ./node_modules/dotenv/lib/main.js 24:11-24
ERROR in ./node_modules/dotenv/lib/main.js 25:13-28


- add a fallback 'resolve.fallback:
{ "path": require.resolve("path-browserify") }'
        - add a fallback 'resolve.fallback:
        { "crypto": require.resolve("crypto-browserify") }'
        - add a fallback 'resolve.fallback:
        { "querystring": require.resolve("querystring-es3") }'
        - add a fallback 'resolve.fallback:
        { "crypto": require.resolve("crypto-browserify") }'
        - add a fallback 'resolve.fallback:
        { "path": require.resolve("path-browserify") }'
        - add a fallback 'resolve.fallback:
        { "path": require.resolve("path-browserify") }'

        npx webpack
assets by status 82.6 KiB [cached] 1 asset
runtime modules 668 bytes 3 modules
modules by path ./build/src/ 139 KiB
  modules by path ./build/src/private/ 109 KiB 48 modules
  modules by path ./build/src/utils/ 24.7 KiB 14 modules
  modules by path ./build/src/public/*.js 3.78 KiB 3 modules
  modules by path ./build/src/*.js 982 bytes 2 modules
modules by path ./node_modules/ 118 KiB
  modules by path ./node_modules/axios/lib/ 41.2 KiB 26 modules
  modules by path ./node_modules/questrade-api-enumerations/ 63.8 KiB 2 modules
  ./node_modules/dotenv/lib/main.js 2.93 KiB [built] [code generated]
  ./node_modules/tslib/tslib.es6.js 10.5 KiB [built] [code generated]
  ./node_modules/axios/index.js 40 bytes [built] [code generated]
path (ignored) 15 bytes [built] [code generated]
crypto (ignored) 15 bytes [built] [code generated]

WARNING in ./node_modules/questrade-api-enumerations/qtEnumerations.js 3:24-31
Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
 @ ./build/src/private/api/AccountsCalls/_getBalances/_myBalances.js 5:35-72
 @ ./build/src/private/api/AccountsCalls/index.js 10:20-57
 @ ./build/src/private/api/_getQuestradeApi.js 6:22-48
 @ ./build/src/private/api/index.js 4:25-54
 @ ./build/src/private/index.js 4:12-28
 @ ./build/src/public/redeemToken.js 5:16-37
 @ ./build/src/public/index.js 4:20-44
 @ ./build/src/index.js 6:15-34

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

ERROR in ./build/src/private/auth/axiosCredentials_oAUTH/_validateToken.js 5:11-24
Module not found: Error: Can't resolve 'fs' in '/home/luxcium/dev/questrade-ts/build/src/private/auth/axiosCredentials_oAUTH'
 @ ./build/src/private/auth/axiosCredentials_oAUTH/X_axiosCredentials_oAUTH_X.js 6:23-50
 @ ./build/src/private/auth/axiosCredentials_oAUTH/index.js 4:35-74
 @ ./build/src/private/auth/credentialsFactory/_credentialsFactory.js 6:31-67
 @ ./build/src/private/auth/credentialsFactory/index.js 6:28-60
 @ ./build/src/private/auth/index.js 4:27-58
 @ ./build/src/private/index.js 6:13-30
 @ ./build/src/public/redeemToken.js 5:16-37
 @ ./build/src/public/index.js 4:20-44
 @ ./build/src/index.js 6:15-34

ERROR in ./build/src/private/auth/axiosCredentials_oAUTH/_writeToken.js 4:11-24
Module not found: Error: Can't resolve 'fs' in '/home/luxcium/dev/questrade-ts/build/src/private/auth/axiosCredentials_oAUTH'
 @ ./build/src/private/auth/axiosCredentials_oAUTH/X_axiosCredentials_oAUTH_X.js 7:20-44
 @ ./build/src/private/auth/axiosCredentials_oAUTH/index.js 4:35-74
 @ ./build/src/private/auth/credentialsFactory/_credentialsFactory.js 6:31-67
 @ ./build/src/private/auth/credentialsFactory/index.js 6:28-60
 @ ./build/src/private/auth/index.js 4:27-58
 @ ./build/src/private/index.js 6:13-30
 @ ./build/src/public/redeemToken.js 5:16-37
 @ ./build/src/public/index.js 4:20-44
 @ ./build/src/index.js 6:15-34

ERROR in ./build/src/utils/mkdirp.js 8:35-48
Module not found: Error: Can't resolve 'fs' in '/home/luxcium/dev/questrade-ts/build/src/utils'
 @ ./build/src/utils/index.js 16:15-34
 @ ./build/src/private/api/_getQuestradeApi.js 5:14-36
 @ ./build/src/private/api/index.js 4:25-54
 @ ./build/src/private/index.js 4:12-28
 @ ./build/src/public/redeemToken.js 5:16-37
 @ ./build/src/public/index.js 4:20-44
 @ ./build/src/index.js 6:15-34

ERROR in ./node_modules/dotenv/lib/main.js 24:11-24
Module not found: Error: Can't resolve 'fs' in '/home/luxcium/dev/questrade-ts/node_modules/dotenv/lib'
 @ ./build/src/get-token.js 4:15-32
 @ ./build/src/index.js 4:18-40

webpack 5.11.1 compiled with 4 errors and 2 warnings in 1197 ms
npm ERR! code 1
npm ERR! path /home/luxcium/dev/questrade-ts
npm ERR! command failed
npm ERR! command sh -c webpack

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/luxcium/.npm/_logs/2021-01-03T17_08_54_075Z-debug.log
 */
