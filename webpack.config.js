const path = require('path');
//  false | "warning" | "error"
module.exports = {
  mode: 'production',
  cache: true,
  devtool: false, // 'eval',
  performance: {
    hints: 'warning',
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

 * ./build/src/private/api/AccountsCalls/_getBalances/_myBalances.js 5:35-72
 * ./build/src/private/api/AccountsCalls/index.js 10:20-57
 * ./build/src/private/api/_getQuestradeApi.js 6:22-48
 * ./build/src/private/api/index.js 4:25-54
 * ./build/src/private/index.js 4:12-28
 * ./build/src/public/redeemToken.js 5:16-37
 * ./build/src/public/index.js 4:20-44
 * ./build/src/index.js 6:15-34

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




yarn upgrade v1.22.10
[1/4] Resolving packages...

warning babel-jest > @jest/transform > jest-haste-map > sane > micromatch > snapdragon > source-map-resolve > resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated

warning babel-jest > @jest/transform > jest-haste-map > sane > micromatch > snapdragon > source-map-resolve > urix@0.1.0: Please see https://github.com/lydell/urix#deprecated

warning coveralls > request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142

warning coveralls > request > har-validator@5.1.5: this library is no longer supported

warning jest > jest-cli > jest-config > jest-environment-jsdom > jsdom > request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142

warning jest > jest-cli > jest-config > jest-environment-jsdom > jsdom > request-promise-native@1.0.9: request-promise-native has been deprecated because it extends the now deprecated request package, see https://github.com/request/request/issues/3142
[2/4] Fetching packages...
info fsevents@2.2.1: The platform "linux" is incompatible with this module.
info "fsevents@2.2.1" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Rebuilding all packages...
success Saved lockfile.
success Saved 728 new dependencies.
info Direct dependencies
├─ @babel/preset-env@7.12.11
├─ @types/eslint-config-prettier@6.11.0
├─ @types/eslint-plugin-prettier@3.1.0
├─ @types/jest@26.0.19
├─ @types/ramda@0.27.34
├─ @types/redis@2.8.28
├─ @typescript-eslint/eslint-plugin@4.11.1
├─ @typescript-eslint/parser@4.11.1
├─ axios@0.21.1
├─ concurrently@5.3.0
├─ copyfiles@2.4.1
├─ coveralls@3.1.0
├─ crypto-browserify@3.12.0
├─ dotenv@8.2.0
├─ eslint-config-prettier@7.1.0
├─ eslint-plugin-import@2.22.1
├─ eslint-plugin-jsdoc@30.7.13
├─ eslint-plugin-jsonc@0.8.1
├─ eslint-plugin-prettier@3.3.0
├─ eslint-plugin-simple-import-sort@7.0.0
├─ eslint-plugin-unicorn@24.0.0
├─ eslint@7.17.0
├─ jest@26.6.3
├─ path-browserify@1.0.1
├─ prettier@2.2.1
├─ questrade-api-enumerations@1.1.4
├─ ramda@0.27.1
├─ redis@3.0.2
├─ snyk@1.437.3
├─ sort-json@2.0.0
├─ source-map-support@0.5.19
├─ tedis@0.1.12
├─ ts-jest@26.4.4
├─ ts-loader@8.0.13
├─ ts-node@9.1.1
├─ tslib@2.0.3
├─ typedoc@0.20.10
├─ typescript-tslint-plugin@1.0.1
├─ typescript@4.1.3
├─ webpack-cli@4.3.1
└─ webpack@5.11.1
 */
