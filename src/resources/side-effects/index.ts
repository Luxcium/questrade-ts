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
  getHttpClient,
  writeToken,
  validateToken,
  setMyToken,
  getMyToken,
  getHash,
  errorlog,
  warnlog,
  infolog,
  tablelog,
  echo,
  ech0,
  makeTedis,
};

// const getHttpClient //  = SFX_GETHTTPCLIENT;
// const writeToken //  = SFX_WRITETOKEN;
// const validateToken //  = SFX_VALIDATETOKEN;
// const echo //  = SFX_ECHO;
// const setMyToken = SFX_SETMYTOKEN;
// const getMyToken = SFX_GETMYTOKEN;

// const getHash = SFX_GETHASH;
// const errorlog = SFX_ERRORLOG;
// const warnlog = SFX_WARNINGLOG;
// const infolog = SFX_INFOLOG;
// const tablelog = SFX_TABLELOG;
// const ech0 = SFX_ECH0;
