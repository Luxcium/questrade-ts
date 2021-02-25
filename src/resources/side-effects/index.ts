import {
  client,
  ech0,
  echo,
  errorlog,
  getHash,
  getHttpClient,
  getMyToken,
  infolog,
  makeTedis,
  setMyToken,
  tablelog,
  warnlog,
} from './default-behaviour';

export { validateToken, writeToken } from './auth';
export { sync } from './auth/mkdirp';
export {
  client,
  ech0,
  echo,
  errorlog,
  getHash,
  getHttpClient,
  getMyToken,
  infolog,
  makeTedis,
  setMyToken,
  sideEffects,
  tablelog,
  warnlog,
};

const sideEffects = {
  client,
  ech0,
  echo,
  errorlog,
  getHash,
  getHttpClient,
  getMyToken,
  infolog,
  makeTedis,
  setMyToken,
  tablelog,
  warnlog,
};
