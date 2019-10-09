export const logError = (apiError: Error, message: string = '') => {
  console.error('Error:', apiError.message, '\n', message);
  return apiError;
};
