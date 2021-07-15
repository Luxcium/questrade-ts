import { validateToken, writeToken } from './auth';
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

export { mkDirP } from './auth/mkdirp';
export { validateToken, writeToken };
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
  auth: { validateToken, writeToken },
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
