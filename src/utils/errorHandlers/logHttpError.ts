import { default as httpStatus } from 'http-status-codes';
import { logError } from '.';
export const logHttpError = (apiError: Error) => {
  return logError(
    apiError,
    `\nHTTP error in the response from the api:
    ${httpStatus
      .getStatusText(Number.parseInt(apiError.message.slice(-3), 10))
      .toUpperCase()}`
  );
};
