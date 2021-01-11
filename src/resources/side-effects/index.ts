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
  validateToken,
  warnlog,
  writeToken,
} from './default-behaviour';

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
  validateToken,
  warnlog,
  writeToken,
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
  // writeToken,
  // validateToken,
  setMyToken,
  tablelog,
  warnlog,
};
