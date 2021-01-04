const path = require('path');

module.exports = {
  mode: 'development', // 'development' | 'production' | 'none',
  cache: true,
  devtool: false,
  performance: {
    hints: 'warning',
  },
  entry: './build/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build/src'),
  },
  resolve: {
    fallback: {
      path: false, //   require.resolve('path-browserify'),
      crypto: false, // require.resolve('crypto-browserify'),
      stream: false, // require.resolve('stream-browserify'),
      fs: false,
    },
  },
};

/*
+ _writeToken, _validateToken, setMyToken, getMyToken
rm /home/luxcium/dev/questrade-ts/build/src/test
- import { access, constants, readFileSync, writeFileSync } from 'fs';
- import path from 'path';
ERROR in ./build/src/private/auth/axiosCredentials_oAUTH/_validateToken.js 5:11-24
ERROR in ./build/src/private/auth/axiosCredentials_oAUTH/_validateToken.js 6:37-52

- import { writeFileSync } from 'fs';
ERROR in ./build/src/private/auth/axiosCredentials_oAUTH/_writeToken.js 4:11-24

- when using crypto
ERROR in ./build/src/utils/create-url-and-data-hashes.js 4:15-32
ERROR in ./build/src/utils/getHash.js 5:39-56

- when using FsImplementationSync, Made, Mode, OptionsSync, sync
ERROR in ./build/src/utils/mkdirp.js 8:35-48
ERROR in ./build/src/utils/mkdirp.js 9:37-52

- in /home/luxcium/dev/questrade-ts/src/get-token.ts
ERROR in ./node_modules/dotenv/lib/main.js 24:11-24
ERROR in ./node_modules/dotenv/lib/main.js 25:13-28
 */
