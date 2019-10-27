export const _logErrors = (error: Error, message = '') => {
  console.error('Error:', error.message, '\n', message);
  return error;
};
