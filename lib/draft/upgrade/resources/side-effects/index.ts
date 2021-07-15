export { validateToken } from './auth/validate-token';
export { writeCreds } from './auth/write-creds';

export const _warn = <T>(A: T) => {
  console.warn("WARNING: No account number found, will default to '11111111'");

  return A;
};
