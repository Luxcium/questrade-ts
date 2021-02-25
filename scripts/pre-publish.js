const { readFile, writeFile } = require('fs');
const { promisify } = require('util');
/*
  "main": "./src/index.ts",
  "type": "module",
 */
async function prePublish() {
  const filePath = './package.json';
  const writePath = './dist/package.json';

  const name = 'questrade-ts';
  const displayName = 'Questrade API by Luxcium (with typescript support).';
  const description =
    'Unofficial Questrade API wrapper for NodeJS with full TypeScript support.';
  const author = 'Luxcium <luxcium@neb401.com>';
  const license = 'MIT';
  const homepage = 'https://github.com/Luxcium/questrade-ts';
  const main = './src/index.js';
  const types = './typings/index.d.ts';
  const type = 'commonjs';

  const readFileAsync = promisify(readFile);
  const writeFileAsync = promisify(writeFile);
  const rawdata = await readFileAsync(filePath);
  const package = JSON.parse(rawdata);
  const { scripts, devDependencies, version, ...partialPackage } = package;

  void partialPackage;
  const nowDate = new Date();
  // const date = ;
  const newPackage = {
    ...partialPackage,
    name,
    displayName,
    description,
    version: `${version}+${nowDate.getFullYear()}${
      nowDate.getMonth() + 1 > 9
        ? nowDate.getMonth() + 1
        : '0' + (nowDate.getMonth() + 1)
    }${nowDate.getDate()}v2.0.0.2c`,
    author,
    license,
    homepage,
    main,
    types,
    type,
  };
  writeFileAsync(writePath, JSON.stringify(newPackage));
  // console.dir(newPackage);
  // return returnValue;
}

prePublish();
module.exports = { prePublish };

process.on('uncaughtException', error =>
  error.code === 'ERR_INVALID_CALLBACK'
    ? console.warn({ errorCode: error.code }) || process.exit(2)
    : console.error({ uncaughtException: error }) || process.exit(1),
);

//   repository: {
//     type: 'git',
//     url: 'git@github.com/luxcium/questrade-ts.git',
//   },
//   bugs: { url: 'https://github.com/luxcium/questrade-ts/issues' },
//   keywords: [
//     'TypeScript',
//     'Canadian',
//     'Stock Market API',
//     'Un-Official',
//     'Questrade',
//     'Canada',
//     'API Wrapper',
//     'Questrade API',
//     'Stocks',
//     'Trading',
//     'Luxcium',
//     'TypeScript Support',
//     'API wrapper',
//     'TypeScript support',
//     'stock market api',
//     'canada',
//     'Canadian',
//   ],
//   peerDependencies: { axios: '^0.21.1' },
//   optionalDependencies: {
//     '@types/ioredis': '^4.19.2',
//     '@types/node': '^14.14.28',
//     '@types/redis': '^2.8.28',
//     'dotenv': '^8.2.0',
//     'ioredis': '^4.19.4',
//     'redis': '^3.0.2',
//     'redis-json': '^4.3.0',
//     'redis-rejson': '^1.0.0',
//     'tedis': '^0.1.12',
//   },
//   bundledDependencies: ['questrade-api-enumerations'],
// };
