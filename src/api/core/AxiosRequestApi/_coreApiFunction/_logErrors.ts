export function _logErrors(apiError: Error, message: string = '') {
  console.error('Error:', apiError.message, '\n', message);
  return apiError;
}
