import {
  client,
  ech0,
  echo,
  errorLog,
  getHash,
  getHttpClient,
  getMyToken,
  infoLog,
  makeTedis,
  setMyToken,
  tablelog,
  warnLog,
} from './default-behaviour';

export { validateToken, writeToken } from './auth';
export { mkDirP } from './auth/mkdirp';
export {
  client,
  ech0,
  echo,
  errorLog,
  getHash,
  getHttpClient,
  getMyToken,
  infoLog,
  makeTedis,
  setMyToken,
  sideEffects,
  tablelog,
  warnLog,
};

const sideEffects = {
  client,
  ech0,
  echo,
  errorLog,
  getHash,
  getHttpClient,
  getMyToken,
  infoLog,
  makeTedis,
  setMyToken,
  tablelog,
  warnLog,
};
