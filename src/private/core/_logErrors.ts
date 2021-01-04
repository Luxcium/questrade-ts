export const _logErrors = (error: Error, message: string = '') => {
  console.error('Error:', error.message, '\n', message); // CONSOLE: List the side effects

  return error;
};
